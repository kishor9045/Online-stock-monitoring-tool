import Holdings from "../models/HoldingsModel.js";
import Order from "../models/OrdersModel.js";
import Position from "../models/PositionModel.js";
import User from "../models/UserModel.js";
import Watchlist from "../models/WatchlistModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const getHoldings = async (req, res) => {
    try{
        const {_id} = req.user;
        const holdings = await Holdings.find({userId: _id});
        res.status(200).json(holdings);
    }catch(err){
        res.status(500).json(`caught an error on holdings: ${err}`);
    }
};

const getPositions = async (req, res) => {
    try{
        const {_id} = req.user;
        const positions = await Position.find({userId: _id});
        res.status(200).json(positions);
    }catch(err){
        res.status(500).json(`caught an error on positions: ${err}`);
    }
};

const getOrders = async (req, res) => {
    try{
        const {_id} = req.user;
        const orders = await Order.find({userId: _id});
        res.status(200).json(orders);
    } catch(err){
        res.status(500).json(`caught an error on orders: ${err}`);
    }
};

const getWatchlist = async (req, res) => {
  try{
    const WatchlistData = await Watchlist.find();
    res.status(200).json(WatchlistData);
  }catch(err){
    res.status(500).json(`Caught an error on watchlist: ${err}`);
  }
};

const deleteWatchlist = async (req, res) => {
  try{
    const {name} = req.body;
    if(!name){
      return res.json({message: "Name field are empty", status: false});
    }
    const deletedWatchlist = await Watchlist.findOneAndDelete({name: name});
    if(!deletedWatchlist){
      return res.status(404).json({message: "Watchlist not found!", status: false});
    } else{
      res.status(200).json({message: "Deleted successful!", status: true});
    }
  }catch(err){
    res.status(500).json(`Caught an error ${err}`)
  }
};

const postOrders = async (req, res) => {
  try {
    if (!req.body) {
      return res.status(400).send("No data provided");
    }
    const {userId, stockName, qty, exchange, price, mode, product } = req.body;
    // Orders
    const newOrder = new Order({
      userId: userId,
      stockName,
      qty,
      exchange,
      price,
      mode,
      product,
      status: "COMPLETE"
    });
    const order = await newOrder.save();
    // Positions
    let position = await Position.findOne({
      userId: order.userId,
      stockName: order.stockName,
      product: order.product
    });
    const signedQty = mode === "BUY" ? qty : -qty;
    if (!position) {
      await Position.create({
        userId: order.userId,
        stockName: order.stockName,
        product: order.product,
        qty: signedQty,
        avg: price,
        price
      });
    } else {
        const oldQty = position.qty;
        const newQty = oldQty + signedQty;

        let newAvg = position.avg;
        if (mode === "BUY") {
            newAvg = ((position.avg * oldQty) + (price * qty)) / newQty;
        }
        position.qty = newQty;
        position.avg = newAvg;
        position.price = price;
        if (newQty === 0) {
            await Position.deleteOne({ _id: position._id });
        } else {
            await position.save();
        }
    }
    // Holdings
    if (product === "CNC") {
      let holding = await Holdings.findOne({
        userId: order.userId,
        stockName: order.stockName,
        exchange: order.exchange
      });

      if (mode === "BUY") {
        if (!holding) {
          await Holdings.create({
            userId: order.userId,
            stockName: order.stockName,
            exchange: order.exchange,
            qty,
            avg: price,
            price,
            net: 0,
            day: 0
          });
        } else {
            const totalQty = holding.qty + qty;
            const newAvg = ((holding.avg * holding.qty) + (price * qty)) / totalQty;
            holding.qty = totalQty;
            holding.avg = newAvg;
            holding.price = price;

            await holding.save();
        }
      }
      if (mode === "SELL" && holding) {
        holding.qty -= qty;

        if (holding.qty <= 0) {
          await Holdings.deleteOne({ _id: holding._id });
        } else {
            holding.price = price;
            await holding.save();
        }
      }
    }
    res.status(200).json("Order executed successfully");
  } catch (err) {
      res.status(500).json(`Internal server error ${err}`);
  }
};

const generateAccessToken = (user) => {
  return jwt.sign({_id: user._id, username: user.username}, process.env.JWT_TOKEN_STRING, {expiresIn: "10m"});
};
const generateRefreshToken = (user) => {
  return jwt.sign({_id: user._id, username: user.username}, process.env.JWT_REFRESH_TOKEN, {expiresIn:"7d"});
};

const signup = async (req, res) => {
  try{
    const {username, password, email} = req.body;
    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.json({message: "User already exists", status: false});
    }
    const hashedPassword = await bcrypt.hash(password, 12);
  
    const user = await User.create({
      username,
      password: hashedPassword,
      email
    });
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.cookie("refToken", refreshToken,{
      withCredentials: true,
      httpOnly: false,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.cookie("accToken", `Bearer ${accessToken}`, {
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 15 * 60 * 1000
    });
    res.status(201).json({message: "User signed in successful", status: true});
  }catch(err){
    res.status(500).json({message: `Caught an error: ${err}`, status: false})
  }
};

const login = async (req, res) => {
  try{
    const {username, password} = req.body;
    if(!username || !password){
      return res.json({message: "username or password fields are empty", status: false});
    }
    const user = await User.findOne({username});
    if(!user){
      return res.json({message: "Incorrect user!", status: false});
    }
    const auth = await bcrypt.compare(password, user.password);
    if(!auth){
      return res.json({message: "Incorrect password!", status: false});
    }
    const accessToken = generateAccessToken(user);
    const refreshToken = generateRefreshToken(user);
    res.cookie("refToken", refreshToken, {
      withCredentials: true,
      httpOnly: false,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000
    });
    res.cookie("accToken", `Bearer ${accessToken}`, {
      withCredentials: true,
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 15 * 60 * 1000
    });
    res.status(200).json({message: "User logged in successful!", status: true});
  }catch(err){
    res.status(500).json({message: `Caught an error ${err}`, status: false});
  }
};

const homeVerifyRoute = (req, res) => {
  try{
    const authHeader = req.cookies.accToken;
    if(!authHeader){
      return res.status(403).json({message: "Authorization header missing!", status: false});
    }
    const token = authHeader.split(" ")[1];
    if(!token){
      return res.status(401).json({message: "No access token exists!", status: false});
    }
    jwt.verify(token, process.env.JWT_TOKEN_STRING, async (err, data) => {
      if(err){
        return res.status(403).json({message: "Invalid token!", status: false});
      }else{
        const user = await User.findOne({_id: data._id, username: data.username});
        if(user){
          return res.json({message: "User verified successful", status: true, user: user.username, id: user._id, email: user.email});
        } else{
          return res.json({message: "Not a vaild user!", status: false});
        }
      }
    });
  }catch(err){
    res.status(500).json({message: `Caught an error ${err}`, status: false});
  }
};

const refreshToken = (req, res) => {
  const refreshToken = req.cookies.refToken;
  if(!refreshToken){
    return res.status(401).json({message: "refresh token unavailable!", status: false});
  }
  jwt.verify(refreshToken, process.env.JWT_REFRESH_TOKEN, (err, user) => {
    if(err){
      return res.status(403).json({message: "Invalid refresh token!", status: false});
    }
    const newAccessToken = generateAccessToken(user);
    res.cookie("accToken", `Bearer ${newAccessToken}`, {
      withCredentials: true,
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 15 * 60 * 1000
    });
    res.json({message: "refresh token generated successful", status: true, accessToken: newAccessToken});
  })
};

const logout = (req, res) => {
  res.clearCookie("accToken");
  res.clearCookie("refToken");
  res.status(201).json({message: "You logged out successful!", status: true});
};

export {getHoldings, getPositions, getOrders, getWatchlist, deleteWatchlist, postOrders, signup, login, homeVerifyRoute, refreshToken, logout};
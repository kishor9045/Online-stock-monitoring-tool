import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.cookies.accToken;
  if(!authHeader){
    return res.status(401).json({message: "Authorization header missing!", status: false});
  }
  const token = authHeader.split(" ")[1];
  if(!token){
    return res.status(401).json({message: "token missing", status: false});
  }
  jwt.verify(token, process.env.JWT_TOKEN_STRING, (err, user) => {
    if(err){
      return res.status(403).json({message: "Invalid token!", status: false});
    }
    req.user = user;
    next();
  });
};

export default authMiddleware;
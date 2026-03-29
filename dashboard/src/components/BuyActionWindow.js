import { useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {GeneralContext} from "./GeneralContext";
import "./BuyActionWindow.css";
import {userContext} from "./userContext.js";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [exchange, setExchange] = useState("NSE");
  const [product, setProduct] = useState("CNC");
  const {closeBuyWindow} = useContext(GeneralContext)
  const {userDetails} = useContext(userContext);
  const id = userDetails.id;

  const dragContainer = useRef(null);

  const startX = useRef(0);
  const startY = useRef(0);
  const newX = useRef(0);
  const newY = useRef(0);

  const mouseMove = (e) => {
    newX.current = startX.current - e.clientX;
    newY.current = startY.current - e.clientY;

    startX.current = e.clientX;
    startY.current = e.clientY;

    const container = dragContainer.current;

    container.style.top = container.offsetTop - newY.current + 'px';
    container.style.left = container.offsetLeft - newX.current + 'px';
  }

  const mouseDown = (e) => {
    startX.current = e.clientX;
    startY.current = e.clientY;

    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", mouseMove);
    })
  }

  const handleBuyClick = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/orders`, {
      userId: id,
      stockName: uid,
      qty: parseInt(stockQuantity),
      exchange: exchange,
      price: parseFloat(stockPrice),
      product: product,
      mode: "BUY",
    });
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  const handleExchangeRadioClick = (e) => {
    setExchange(e.target.value);
  }

  const handleProductClick = (e) => {
    setProduct(e.target.value);
  }

  return (
    <div className="container" id="buy-window" ref={dragContainer}>
      <div className="header" onMouseDown={mouseDown}>
        <h3>Buy {uid} <span>NSE</span> X {stockQuantity} Qty</h3>
        <div className="market-options">
          <input type="radio" name="exchange" id="nse" value="NSE" onClick={handleExchangeRadioClick} defaultChecked/>
          <label htmlFor="nse">NSE &#8377;212.70</label>
          <input type="radio" name="exchange" id="bse" value="BSE" onClick={handleExchangeRadioClick}/>
          <label htmlFor="bse">BSE &#8377;212.75</label>
        </div>
      </div>
      <div className="regular-order">
        <div className="order-validity">
          <div>
            <input type="radio" name="product" id="mis" value="MIS" onClick={handleProductClick}/>
            <label htmlFor="mis">Intraday <span>MIS</span></label>
          </div>
          <div>
            <input type="radio" name="product" id="cnc" value="CNC" onClick={handleProductClick} defaultChecked/>
            <label htmlFor="cnc">Longterm <span>CNC</span></label>
          </div>
        </div>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input type="number" name="qty" id="qty" onChange={(e) => setStockQuantity(e.target.value)} value={stockQuantity}/>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input type="number" name="price" id="price" step="0.05" onChange={(e) => setStockPrice(e.target.value)} value={stockPrice}/>
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>Buy</Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;

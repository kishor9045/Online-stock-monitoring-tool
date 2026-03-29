import {useEffect} from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { axiosInstance } from "./axiosInstance";

const Orders = () => {
  let [orders, setOrders] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      axiosInstance.get("/getOrders",{withCredentials: true}).then((result) => {
        if(result.status === 200){
          setOrders(result.data);
        }
        setLoading(false);
      })
    }catch(err){
      console.log("caught an error while getting orders", err);
      setLoading(false);
    }
  },[]);

  if(loading){
    return <p>Loading orders....</p>
  }

  return (
    <div className="orders">
      {
        orders.length === 0 ? (
          <div className="no-orders">
            <p>You haven't placed any orders today</p>
            <Link to={"/"} className="order-btn">Get started</Link>
          </div>
        ) : (
          <>
            <h3 className="title">Orders ({orders.length})</h3>
            <div className="order-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Qty.</th>
                    <th>Price</th>
                    <th>Exchange</th>
                    <th>Product</th>
                    <th>Status</th>
                    <th>mode</th>
                  </tr>
                </thead>
                {orders.map((order, index) => {
                  const orderMode = order.mode === "BUY" ? "profit" : "loss";
                  return(
                    <tbody key={index}>
                      <tr>
                        <td>{order.stockName}</td>
                        <td>{order.qty}</td>
                        <td>{order.price}</td>
                        <td>{order.exchange}</td>
                        <td>{order.product}</td>
                        <td>{order.status}</td>
                        <td className={orderMode}>{order.mode}</td>
                      </tr>
                    </tbody>
                  );
                })}
              </table>
            </div>
          </>
        )
      }
      
    </div>
  );
};

export default Orders;
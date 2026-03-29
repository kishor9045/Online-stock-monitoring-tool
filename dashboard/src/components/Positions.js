import {useState, useEffect} from "react";
import { axiosInstance } from "./axiosInstance";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try{
      axiosInstance.get("/getPositions", {withCredentials: true}).then((res) => {
        if(res.status === 200){
          setAllPositions(res.data);
        }
        setLoading(false);
      })
    }catch(err){
      console.log("Caught an error while fetching positions data", err);
      setLoading(false);
    }
  }, []);

  if(loading){
    return <p>Loading positions....</p>
  }

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
            </tr>
          </thead>
          {
            allPositions.map((stock, index) => {
              const curValue = stock.price * stock.qty;
              const isProfit = curValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";

              return (
                <tbody key={index}>
                  <tr>
                    <td>{stock.product}</td>
                    <td>{stock.stockName}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td className={profClass}> {(curValue - stock.avg * stock.qty).toFixed(2)} </td>
                  </tr>
                </tbody>
              );
            })
          }
        </table>
      </div>
    </>
  );
};

export default Positions;

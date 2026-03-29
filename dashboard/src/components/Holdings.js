import {useState, useEffect} from "react";
import { VerticalGraph } from "./VerticalGraph";
import {useContext} from "react";
import {userContext} from "./userContext";
import { axiosInstance } from "./axiosInstance";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const {accessToken} = useContext(userContext);

  useEffect(() => {
    try{
      axiosInstance.get("/getHoldings", {headers: {Authorization: accessToken}, withCredentials: true}).then((res) => {
        if(res.status === 200){
          setAllHoldings(res.data);
        }
      })
    }catch(err){
      console.log("caught an error whild fetching the data", err);
    }
  }, []);

  // sending data for ploting vertical bar graph
  const labels = allHoldings.map((holding) => holding.stockName);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      }
    ]
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>exch.</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          {
            allHoldings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const isProfit = currValue - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";

              return(
                <tbody key={index}>
                  <tr>
                    <td>{stock.stockName}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{currValue.toFixed(2)}</td>
                    <td>{stock.exchange}</td>
                    <td className={profClass}>{(currValue - stock.avg * stock.qty).toFixed(2)}</td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                </tbody>
              );
            })
          }
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

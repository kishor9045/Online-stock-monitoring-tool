import { useState,useEffect, useContext } from "react";
import { GeneralContext } from "./GeneralContext.js";
import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, Delete } from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart.js";
import {axiosInstance} from "./axiosInstance.js";
import {ToastContainer, toast, Bounce} from "react-toastify";
import {useNavigate} from "react-router-dom";


const WatchList = () => {
  const [watchlist, setWatchlist] = useState([]);
  const [allWatchlistData, setAllWatchListData] = useState([]);
  const [watchlistSearchInput, setWatchlistSearchInput] = useState("");

  useEffect(() => {
    try{
      const handleWatchlistData = async () => {
        const {data, status} = await axiosInstance.get("/getWatchlist", {withCredentials: true});
        if(status === 200){
          setWatchlist(data);
          setAllWatchListData(data);
        }
      }
      handleWatchlistData();
    }catch(err){
      console.log(err);
    }
  },[]);
  
  // Doughnut chart options
  const labels = watchlist.map((subArray) => subArray.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleWatchlistSearchInput = () => {
    const filteredData = watchlist.filter((list) => {
      const inputStr = watchlistSearchInput.toLowerCase().trim().replace(/[^a-zA-Z]/g, "");
      return list.name.toLowerCase().includes(inputStr);
    });
    if(filteredData.length > 0){
      setWatchlist(filteredData);
    } else{
      console.log("No watchlist exists!");
    }
  }

  useEffect(() => {
    if(watchlistSearchInput.trim().length > 0){
      handleWatchlistSearchInput();
    } else{
      setWatchlist(allWatchlistData);
    }
  }, [watchlistSearchInput]);

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input type="text" name="search" id="search" placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx" className="search" onChange={(e) => setWatchlistSearchInput(e.target.value)} value={watchlistSearchInput} onKeyDown={(e) => e.key === "Enter" ? handleWatchlistSearchInput(): ""}/>
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
      </ul>
      <DoughnutChart data={data} />
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchlistActions(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchlistActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span>{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="up" />)}
          <span>{stock.price}</span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

const WatchListActions = ({ uid }) => {
  const navigate = useNavigate();
  const generalContext = useContext(GeneralContext);
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
    generalContext.openSellWindow(uid);
  };

  const scrollToAnalytics = () => {
    const watchlistContainer = document.querySelector(".watchlist-container");
    watchlistContainer.scrollTo({
      top: watchlistContainer.scrollHeight,
      behavior: "smooth"
    });
  };

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  const handleDeleteWatchlistItem = async () => {
    try{
      const {data, status} = await axiosInstance.delete("/deleteWatchlist", {
        data: {name: uid}
      }, {
        withCredentials: true
      });
      if(status === 200){
        handleSuccess(data.message);
        setTimeout(() => {
          navigate(0);
        }, 1500);
      }
    } catch(err){
      console.log(err);
    }
  }

  return (
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TransitionComponent={Grow} onClick={handleBuyClick}>
          <button className="buy">Buy</button>
        </Tooltip>
        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow} onClick={handleSellClick}>
          <button className="sell">Sell</button>
        </Tooltip>
        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow} onClick={scrollToAnalytics}>
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="Delete(Del)" placement="top" arrow TransitionComponent={Grow} onClick={handleDeleteWatchlistItem}>
          <button className="action">
            <Delete className="icon" />
          </button>
        </Tooltip>
      </span>
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
    </span>
  );
};

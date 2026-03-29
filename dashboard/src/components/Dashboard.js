import { Route, Routes, useNavigate } from "react-router-dom";
import Summary from "./Summary.js";
import Orders from "./Orders.js";
import Holdings from "./Holdings.js";
import Positions from "./Positions.js";
import Funds from "./Funds.js";
import Apps from "./Apps.js";
import WatchList from "./WatchList.js";
import Profile from "./Profile.js"
import { GeneralContextProvider } from "./GeneralContext.js";
import {useEffect} from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [])

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

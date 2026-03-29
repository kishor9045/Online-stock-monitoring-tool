import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";
import { useEffect } from "react";
import { ToastContainer, toast, Bounce } from "react-toastify";
import Dashboard from "./Dashboard.js";
import TopBar from "./TopBar.js";
import {useContext} from "react";
import {userContext} from "./userContext.js";
import { axiosInstance } from "./axiosInstance.js";

const Home = () => {
  const navigate = useNavigate();
  const {setUserDetails} = useContext(userContext);
  const [cookie, setCookies, removeCookie] = useCookies(); 

  useEffect(() => {
    if(!cookie.data){
      console.log("You did'nt logged in!");
      navigate("/login");
      }
  },[]);

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
  }

  const refreshInstance = axios.create({
        baseURL: process.env.REACT_APP_BACKEND_URL,
        withCredentials: true
  });

  axiosInstance.interceptors.response.use(
    response => response,
    async error => {
      const originalRequest = error.config;
      if(error.response.status === 403 && !originalRequest._retry){
        originalRequest._retry = true;
        try{
          const res = await refreshInstance.post("/refreshToken");
          const {accessToken} = res.data;
          originalRequest.headers.Authorization = accessToken;
          return axiosInstance(originalRequest);
        }catch(err){
          console.log("refresh token expired", err);
          const logout = await axiosInstance.post("/logout");
          const {message, status} = logout.data;
          console.log(logout);
          if(status){
            handleSuccess(`Session expired ${message}`);
          }
          removeCookie("data", {path: "/"});
          setTimeout(() => {
            navigate("/login")
          }, 3000);
          return Promise.reject(err);
        }
      }
      return Promise.reject(error);
    }
  )


  useEffect(() => {
    const verifyToken = async () => {
      try{
        const verifiedData = await axiosInstance.post("/");
        const {message, status, user, id, email} = verifiedData.data;
        if(status){
          setUserDetails({id: id, username: user, email: email});
          console.log(message);
        }
      }catch(err){
        console.log(err);
      }
    }
    if(cookie.data){
      verifyToken();
    }
  },[]);

  return (
    <>
      <TopBar />
      <Dashboard/>
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
    </>
  );
};

export default Home;
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {ToastContainer, toast, Bounce} from "react-toastify";
import {useContext} from "react";
import {userContext} from "./userContext.js";
import { axiosInstance } from "./axiosInstance";
import Avatar from '@mui/material/Avatar';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const {userDetails} = useContext(userContext);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const activeMenuClass = "menu selected";
  const menuClass = "menu";

  useEffect(() => {
    const handleDropdownOutsideClickOpen = (event) => {
      const dropdownContainer = document.querySelector(".dropdown-container");
      const profile = document.querySelector(".profile");
      if(dropdownContainer && !dropdownContainer.contains(event.target) && !profile.contains(event.target)){
        setIsProfileDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleDropdownOutsideClickOpen);
    return () => document.removeEventListener("mousedown", handleDropdownOutsideClickOpen);
  }, []);

  return (
    <div className="menu-container">
      <img src="logo.png" alt="logo" className="logo" style={{cursor: "pointer"}} onClick={() => {navigate("/"); handleMenuClick(0)}}/>
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/" onClick={() => handleMenuClick(0)}>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders" onClick={() => handleMenuClick(1)}>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings" onClick={() => handleMenuClick(2)}>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions" onClick={() => handleMenuClick(3)}>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds" onClick={() => handleMenuClick(4)}>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps" onClick={() => handleMenuClick(5)}>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>Apps</p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{userDetails.username.slice(0,2).toUpperCase()}</div>
          <p className="username">USERID</p>
        </div>
        {isProfileDropdownOpen && <MenuDropdown navigate={navigate}  username={userDetails.username} email={userDetails.email}/>}
      </div>
    </div>
  );
};

const MenuDropdown = ({navigate, username, email}) => {

  const handleSuccess = (message) => {
    toast.success(message, {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  }

  const handleLogout = async (e) => {
    e.preventDefault();
    const logout = await axiosInstance.post("/logout");
    const {message, status} = logout.data;
    if(status){
      handleSuccess(message);
    }
    setTimeout(() => {
      navigate("/login")
    }, 1000);
  }

  const handleAnotherAccountRedirect = () => {
    window.open(`${process.env.REACT_APP_FRONTEND_URL}/signup`, "_blank", "noopener, noreferrer")
  }

  return (
    < >
      <div className="dropdown">
        <div className="dropdown-container">
          <div className="dropTop">
            <h2>Hello {username}</h2>
            <p className="email">{email}</p>
          </div>
          <div className="dropProfile">
            <Link to={"/profile"}><Avatar className="profileAvatar"/> My profile</Link>
          </div>
          <div className="dropBottom">
            <Link onClick={handleAnotherAccountRedirect}><PersonAdd/> Add another account</Link>
            <Link onClick={handleLogout}><Logout/> Logout</Link>
          </div>
        </div>
      </div>
      <ToastContainer position="bottom-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
    </>
  );
}

export default Menu;

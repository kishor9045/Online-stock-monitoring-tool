import axios from "axios";
import "./Login.css";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import {ToastContainer, toast, Bounce} from "react-toastify";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Login = () => {
    const [inputValue, setInputValue] = useState({username: "", password: ""});
    const [visible, setVisible] = useState(true);
    const [cookies, setCookies] = useCookies();
    const navigate = useNavigate();
    const {username, password} = inputValue;

    useEffect(() => {
        if(localStorage.getItem("refToken")){
            console.log("You already logged in!");
            navigate("/");
        }
    },[])

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputValue({
            ...inputValue,
            [name]: value
        })
    };

    const handleError = (message) => {
        toast.error(message, {
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`,{
                ...inputValue
            }, {
                withCredentials: true
            })
            const {message, status, refToken} = data;
            if(status){
                handleSuccess(message);
                localStorage.setItem("refToken", refToken);
                setTimeout(() => {
                    navigate("/");
                }, 3000);
            }else{
                handleError(message);
            }
        }catch(err){
            console.log(err);
        }
        setInputValue({
            username: "",
            password: ""
        })
    };

    const handleVisibility = () => {
        setVisible(!visible);
        const input = document.getElementById("password");
        if(visible){
            input.type = "text";
        }else{
            input.type = "password";
        }
    };

    return(
        <div className="outer-base">
            <div className="inner-base">
                <div className="header-login">
                    <img src="logo192.png" width="60" height="40" alt="Kite-logo"/>
                    <h2>Login to Kite</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter your username" name="username" onChange={handleChange} value={username} autoComplete="off" required/>
                    <input type="password" placeholder="Enter your password" name="password" id="password" onChange={handleChange} value={password} required/>
                    <span>
                        {visible ? <VisibilityOutlinedIcon id="eye-visible" onClick={handleVisibility}/> : <VisibilityOffOutlinedIcon id="eye-slash" onClick={handleVisibility}/>}
                    </span>
                    <button>Login</button>
                </form>
            </div>
            <div className="footer-container">
                <p> <a href="/">Don't have an account? Signup now!</a></p>
                <p>Zerodha Broking Limited: Member of NSE, BSE, MCX ‐ SEBI Reg. no. INZ000031633, CDSL ‐ SEBI Reg. no. IN-DP-431-2019 | Smart Online Dispute Resolution | SEBI SCORES</p>
            </div>
            <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
        </div>
    );
}

export default Login;
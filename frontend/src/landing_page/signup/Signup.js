import Hero from "./Hero";
import {useState} from "react";
import axios from "axios";
import DematAccount from "./DematAccount.js";
import {ToastContainer, toast, Bounce} from "react-toastify";
import OpenAccount from "../OpenAccount.js";

export default function Signup(){
    const [inputValue, setInputValue] = useState({username: "", password: "", email: ""});
    const {username, password, email} = inputValue;

    const handleOnChange = (e) => {
        const {name, value} = e.target;
        setInputValue({...inputValue, [name]: value});
    }

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
    }
    
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
                ...inputValue
            }, {
                withCredentials: true
            })
            if(!data){
                console.log("data is undefined");
            }

            const {message, status} = data;
            if(status){
                handleSuccess(message);
                setTimeout(() => {
                    window.open(`${process.env.REACT_APP_DASHBOARD_URL}/login`, "_blank", "noopener,noreferrer");
                },1000);
            } else{
                handleError(message);
            }
        }catch(err){
            console.log(err);
        }
        setInputValue({
            ...inputValue,
            username: "",
            password: "",
            email: ""
        })
    }

    const handleCheckBoxClick = () => {
        const checkbox = document.getElementById("password");
        if(checkbox.type === "password"){
            checkbox.type = "text";
        }else{
            checkbox.type = "password";
        }
    }

    return(
        <>
          <Hero/>
          <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src="/media/images/openAccount.svg" alt="openAccount"/>
                </div>
                <div className="col-lg-6 col-sm-12 p-5">
                    <h3>Signup now</h3>
                    <p className="text-muted">Or track your existing application</p>
                    <form className="w-75" onSubmit={handleOnSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Username: </label>
                            <input type="text" placeholder="Create you new username" name="username" id="username" className="form-control" onChange={handleOnChange} value={username} autoComplete="off" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email: </label>
                            <input type="email" placeholder="Add your email" name="email" id="email" className="form-control" onChange={handleOnChange} value={email} autoComplete="off" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password: </label>
                            <input type="password" placeholder="Create your new password" name="password" id="password" className="form-control" onChange={handleOnChange} value={password} required/>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div>
                                <input type="checkbox" id="visibile" className="form-check-input me-2" onClick={handleCheckBoxClick}/>
                                <label htmlFor="visibile">Show password</label>
                            </div>
                            <p className="m-0">Already have an account? <a href={`${process.env.REACT_APP_DASHBOARD_URL}/login`} target="_blank" rel="noreferrer noopener">Login</a></p>
                        </div>
                        <button className="btn btn-primary px-3 mt-2">Continue</button>
                    </form>
                </div>
            </div>
          </div>
          <DematAccount/>
          <OpenAccount/>
          <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" transition={Bounce}/>
        </>
    )
}
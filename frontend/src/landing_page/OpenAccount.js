import {useNavigate} from "react-router-dom";

export default function OpenAccount(){
    const navigate = useNavigate();

    return(
        <div className="container text-center">
            <div className="mt-5">
                <h2>Open a Tradexa account</h2>
                <p className="fs-5 mb-5">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <button className="btn btn-primary py-2" style={{width:"17%"}} onClick={() => navigate("/signup")}>Sign up for free</button>
            </div>
        </div>
    )
}
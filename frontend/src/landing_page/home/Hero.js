import {useNavigate} from "react-router-dom";

export default function Hero(){
    const navigate = useNavigate();

    return (
        <div className="container text-center my-5">
            <div className="row">
                <div>
                 <img src="/media/images/homeHero.png" alt="Hero" className="mb-4" style={{width:"850px", height:"400px"}}/>
                </div>
                <div className="mt-5">
                    <h1>Invest in everything</h1>
                    <p className="fs-5">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more</p>
                    <button className="btn btn-primary py-2" style={{width:"17%"}} onClick={() => navigate("/signup")}>Sign up for free</button>
                </div>
            </div>
        </div>
    )
}
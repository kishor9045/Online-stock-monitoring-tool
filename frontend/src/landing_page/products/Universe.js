import {useNavigate} from "react-router-dom";

export default function Universe() {
    const navigate = useNavigate();

    return ( 
        <div className="container text-center pb-5">
            <p className="my-5 pb-5">Want to know more about our technology stack? Check out the Zerodha.tech blog.</p>
            <div className="row my-5">
                <h1>The Zerodha Universe</h1>
                <p>Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <div className="p-5">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/media/images/zerodhaFundhouse.png" alt="Zerodha fund house" width="200px"/>
                            <p className="mt-2 text-muted">Our asset management venture
                            that is creating simple and transparent index
                            funds to help you save for your goals.</p>
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/media/images/streakLogo.png" alt="Zerodha fund house" width="160px"/>
                            <p className="mt-2 text-muted">Systematic trading platform
                            that allows you to create and backtest
                            strategies without coding.</p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="p-5">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/media/images/sensibullLogo.svg" alt="Zerodha fund house" width="200px"/>
                            <p className="mt-2 text-muted">Options trading platform that lets you
                            create strategies, analyze positions, and examine
                            data points like open interest, FII/DII, and more.
                            </p>
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/media/images/goldenpiLogo.png" alt="Zerodha fund house" width="200px"/>
                            <p className="mt-2 text-muted">Investment research platform
                            that offers detailed insights on stocks,
                            sectors, supply chains, and more.
                            </p>
                        </a>
                    </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <div className="p-5">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/media/images/smallcaseLogo.png" alt="Zerodha fund house" width="200px"/>
                            <p className="mt-2 text-muted">Thematic investing platform
                            that helps you invest in diversified
                            baskets of stocks on ETFs.</p>
                        </a>
                    </div>
                    <div className="p-5">
                        <a href="/" style={{textDecoration:"none"}}>
                            <img src="/media/images/dittoLogo.png" alt="Zerodha fund house" width="150px"/>
                            <p className="mt-2 text-muted">Personalized advice on life
                            and health insurance. No spam
                            and no mis-selling.</p>
                        </a>
                    </div>
                </div>
            </div>
            <button className="btn btn-primary py-2" style={{width:"17%"}} onClick={() => navigate("/signup")}>Sign up for free</button>
        </div>
     );
}
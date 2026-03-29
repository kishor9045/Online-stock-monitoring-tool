import {Link} from "react-router-dom";

export default function Education(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src="/media/images/education.svg" alt="Large brokerage"/>
                </div>
                <div className="col-lg-6 col-sm-12 lh-lg">
                    <div className="p-3">
                        <h1 className="mb-4">Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <Link to="/" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Varsity <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div className="p-3">
                        <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <Link to="/" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">TradingQ&A <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
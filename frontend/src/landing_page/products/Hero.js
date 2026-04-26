import {Link} from "react-router-dom";

export default function Hero(){
    return(
        <div className="container border-bottom my-5">
            <div className="row text-center p-5">
                <h1 className=" fs-3 p-3">Tradexa Products</h1>
                <p>Sleek, modern, and intuitive trading platforms</p>
                <p>Check out our <Link to="/" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">investment offerings <i className="fa-solid fa-arrow-right"></i></Link></p>
            </div>
        </div>
    )
}
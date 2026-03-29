import {Link, useNavigate} from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();

    return ( 
        <div style={{backgroundColor:"rgb(56, 126, 209)", color:"white", height:"350px"}}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-sm-12">
                        <p className="fs-5"><b>Support Portal</b></p>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 col-sm-12">
                        <Link to="/" className="text-light">Track Tickets</Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-sm-12 lh-lg p-2">
                        <h4 className="mb-4">Search for an answer or browse help topics to create a ticket</h4>
                        <button className="btn btn-light p-4" onClick={() => navigate("/")}>Eg: how do i activate F&O, why is my order getting rejected..</button>
                        <div className="mt-3">
                            <Link to="/" className="text-light ms-3">Track account opening</Link>
                            <Link to="/" className="text-light ms-3">Track segment activation</Link>
                            <Link to="/" className="text-light ms-3">Intraday</Link>
                            <Link to="/" className="text-light ms-3">margins</Link><br/>
                            <Link to="/" className="text-light ms-3">Kite user manual</Link>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-4 col-sm-12 p-2 lh-lg">
                        <h3>Featured</h3>
                        <ol>
                            <li><Link to="/" className="text-light">Current Takeovers and Delisting - January 2024</Link></li>
                            <li><Link to="/" className="text-light">Latest Intraday Leverages - MIS & CO</Link></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
     );
}
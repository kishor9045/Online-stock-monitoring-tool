import {Link} from "react-router-dom";

function RightSection({imageURL, productTitle, productDescription, link}) {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5" style={{width:"520px"}}>
                    <h2 className="mb-3">{productTitle}</h2>
                    <p>{productDescription}</p>
                    <div className="mb-4">
                        <Link to={link} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Learn more <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src={imageURL} alt="Kite"/>
                </div>
            </div>
        </div>
     );
}

export default RightSection;
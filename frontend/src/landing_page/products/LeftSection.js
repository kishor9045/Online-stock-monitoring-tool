import {Link} from "react-router-dom";

export default function LeftSection({imageURL, productTitle, productDescription, firstLink, secondLink, googlePlay, appStore}){
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src={imageURL} alt="Kite"/>
                </div>
                <div className="col-lg-6 col-sm-12 p-5" style={{width:"520px"}}>
                    <h2 className="mb-3">{productTitle}</h2>
                    <p>{productDescription}</p>
                    <div className="mb-4">
                        <Link to={firstLink} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover ms-3 me-4">Try demo <i className="fa-solid fa-arrow-right"></i></Link>
                        <Link to={secondLink} className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover ms-5">Learn more <i className="fa-solid fa-arrow-right"></i></Link>
                    </div>
                    <div>
                        <Link to={googlePlay}>
                            <img src="/media/images/googlePlayBadge.svg" alt="google play store" className="ms-3"/>
                        </Link>
                        <Link to={appStore} className="ms-5">
                            <img src="/media/images/appstoreBadge.svg" alt="google play store"/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
import {Link} from "react-router-dom";

export default function TicketDropdown({iconClass, title,collapseId, li1, li2, li3, li4, li5}){
    return(
        <div className="container">
            <div className="row my-4">
                <div className="col-lg-8 offset-lg-2 col-sm-12">
                    <div className="border d-flex align-items-center rounded scaleTicket" style={{height:"60px"}}>
                        <div style={{width:"60px",height:"59px",backgroundColor:"#f2f8fe"}} className="d-flex justify-content-center align-items-center rounded-start"><i className={iconClass}></i></div>
                        <Link className="fs-5 mx-3 d-flex align-items-center justify-content-between" style={{width:"100%",height:"100%",color:"#242424",display:"inline-block", textDecoration:"none"}} data-bs-toggle="collapse" to={`#${collapseId}`} role="button">{title} <i className="fa-solid fa-angle-down"></i></Link>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <div className="collapse multi-collapse border border-top-0 rounded-bottom" id={collapseId} style={{width:"840px"}}>
                                <div className="p-3">
                                    <ul className="lh-lg">
                                        <li><Link to="/" style={{textDecoration:"none"}}>{li1}</Link></li>
                                        <li><Link to="/" style={{textDecoration:"none"}}>{li2}</Link></li>
                                        <li><Link to="/" style={{textDecoration:"none"}}>{li3}</Link></li>
                                        <li><Link to="/" style={{textDecoration:"none"}}>{li4}</Link></li>
                                        <li><Link to="/" style={{textDecoration:"none"}}>{li5}</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand border-bottom position-sticky top-0" style={{backgroundColor:"white"}}>
        <div className="container-fluid p-2">
          <Link className="navbar-brand text-lg-center" to="/">
            <img src="media/images/logo.svg" style={{width:"25%"}} alt="Logo"/>
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="w-100 d-flex justify-content-lg-center justify-content-md-end">
              <form>
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      <div className="d-flex containerOne">
                        <li className="nav-item me-4 items">
                            <Link className="nav-link active" to="/signup">Signup</Link>
                        </li>
                        <li className="nav-item me-4 items">
                            <Link className="nav-link active" to="/about">About</Link>
                        </li>
                        <li className="nav-item me-4 items">
                            <Link className="nav-link active" to="/products">Products</Link>
                        </li>
                        <li className="nav-item me-4 items">
                            <Link className="nav-link active" to="/pricing">Pricing</Link>
                        </li>
                        <li className="nav-item me-3 items">
                            <Link className="nav-link active" to="/support">Support</Link>
                        </li>
                      </div>

                      <li className="nav-item dropdown">
                          <a className="nav-link" role="button" href="/" data-bs-toggle="dropdown" data-bs-display="static">
                            <i className="fa-solid fa-bars hamburger"></i>
                          </a>
                          <ul className="dropdown-menu navDropdown">
                            <li className="dropdownTopElements">
                              <div className="container">
                                <div className="row border-bottom">
                                  <ul style={{listStyleType:"none", display:"flex"}} className="my-3">
                                    <div className="col-6">
                                      <li><a className="dropdown-item rounded" href="/signup">Signup</a></li>
                                      <li><a className="dropdown-item rounded" href="/about">About</a></li>
                                      <li><a className="dropdown-item rounded" href="/products">Products</a></li>
                                    </div>
                                    <div className="col-6">
                                      <li><a className="dropdown-item rounded" href="/pricing">Pricing</a></li>
                                      <li><a className="dropdown-item rounded" href="/support">Support</a></li>
                                    </div>
                                    </ul>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="container text-center">
                                <div className="row d-flex">
                                  <div className="col">
                                    <a className="dropdown-item rounded" href={`${process.env.REACT_APP_DASHBOARD_URL}/login`} target="_blank" rel="noreferrer">
                                      <img src="media/images/kite-logo.svg"alt="Kite logo"/>
                                      <p>Kite</p>
                                      <p className="text-muted" style={{fontSize:"12px"}}>Trading platform</p>
                                    </a>
                                  </div>
                                  <div className="col">
                                    <a className="dropdown-item rounded" href="/">
                                      <img src="media/images/console.svg"alt="Kite logo"/>
                                      <p>Console</p>
                                      <p className="text-muted" style={{fontSize:"12px"}}>Backoffice</p>
                                    </a>
                                  </div>
                                  <div className="col">
                                    <a className="dropdown-item rounded" href="/">
                                      <img src="media/images/kite-connect.svg"alt="Kite logo"/>
                                      <p>Kite Connect</p>
                                      <p className="text-muted" style={{fontSize:"12px"}}>Trading APIs</p>
                                    </a>
                                  </div>
                                  <div className="col">
                                    <a className="dropdown-item rounded" href="/">
                                      <img src="media/images/coin.svg"alt="Kite logo"/>
                                      <p>Coin</p>
                                      <p className="text-muted" style={{fontSize:"12px"}}>Mutual funds</p>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="container">
                                <div className="row p-2">
                                  <div className="col p-2">
                                    <p className="ms-3"><b>Utilities</b></p>
                                    <ul style={{listStyleType:"none", padding:"0"}}>
                                      <li><a className="dropdown-item rounded" href="/">Calculators</a></li>
                                      <li><a className="dropdown-item rounded" href="/">Brokerage calculator</a></li>
                                      <li><a className="dropdown-item rounded" href="/">Margin calculator</a></li>
                                      <li><a className="dropdown-item rounded" href="/">SIP calculator</a></li>
                                    </ul>
                                  </div>
                                  <div className="col p-2">
                                    <p className="ms-3"><b>Updates</b></p>
                                    <ul style={{listStyleType:"none", padding:"0"}}>
                                      <li><a className="dropdown-item rounded" href="/">Z-Connect blog</a></li>
                                      <li><a className="dropdown-item rounded" href="/">Circulars / Bulletin</a></li>
                                      <li><a className="dropdown-item rounded" href="/">IPOs</a></li>
                                      <li><a className="dropdown-item rounded" href="/">Markets</a></li>
                                    </ul>
                                  </div>
                                  <div className="col">
                                    <p><b>Education</b></p>
                                    <ul className="text-center" style={{listStyleType:"none", padding:"0", display:"flex"}}>
                                      <li>
                                        <a className="dropdown-item rounded" href="/">
                                          <img src="media/images/varsityLogo.png" alt="varsity logo"/>
                                          <p className="mt-1">Varsity</p>
                                        </a>
                                      </li>
                                      <li>
                                        <a className="dropdown-item rounded" href="/">
                                          <img src="media/images/tqna.png" alt="varsity logo"/>
                                          <p className="mt-2">Trading Q&A</p>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                      </li>
                  </ul>
              </form>
            </div>
          </div>
        </div>
      </nav>
  );
}

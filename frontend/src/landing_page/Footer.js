export default function Footer(){
    let anchor = {
        textDecoration:"none",
        color:"#666666"
    }
    let para = {
        color:"#666666",
        fontSize:"14px"
    }
    return (
        <footer className="border-top mt-5" style={{backgroundColor: "#FBFBFB"}}>
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <img src="media/images/logo.svg" alt="footer Logo" style={{width:"60%"}}/>
                        <p className="mt-3" style={{color:"#666666"}}>&copy; 2010 - 2025, Zerodha Broking Ltd. All rights reserved.</p>
                    </div>
                    <div className="col">
                        <h5 className="mb-3">Account</h5>
                        <ul style={{lineHeight:"3em", padding:"0px"}}>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Open demat account</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Minor demat account</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>NRI demat account</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Commodity</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Dematerialisation</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Fund transfer</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>MTF</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Referral program</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="mb-3">Support</h5>
                        <ul style={{lineHeight:"3em", padding:"0px"}}>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Contact us</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Support portal</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>How to file a complaint?</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Status of your complaints</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Bulletin</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Circular</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Z-Connect blog</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Downloads</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="mb-3">Company</h5>
                        <ul style={{lineHeight:"3em", padding:"0px"}}>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>About</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Philosophy</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Press & media</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Careers</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Zerodha Cares (CSR)</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Zerodha.tech</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Open source</a></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5 className="mb-3">Quick links</h5>
                        <ul style={{lineHeight:"3em", padding:"0px"}}>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Upcoming IPOs</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Brokerage charges</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Market holidays</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Economic calendar</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Calculators</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Markets</a></li>
                            <li style={{listStyleType:"none"}}><a href="/" style={anchor}>Sectors</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-4">
                    <p style={para}>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>
                    <p style={para}>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>
                    <p style={para}>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>
                    <p style={para}>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>
                    <p style={para}>India's largest broker based on networth as per NSE. NSE broker factsheet</p>
                    <p style={para}>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>
                </div>
                <div className="d-flex justify-content-evenly">
                    <p style={para}>NSE</p>
                    <p style={para}>BSE</p>
                    <p style={para}>MCX</p>
                    <p style={para}>Terms & conditions</p>
                    <p style={para}>Policies & procedures</p>
                    <p style={para}>Privacy policy</p>
                    <p style={para}>Disclosure</p>
                    <p style={para}>For investor's attention</p>
                    <p style={para}>Investor charter</p>
                </div>
            </div>
        </footer>
    )
}
export default function Awards(){
    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12">
                    <img src="/media/images/largestBroker.svg" alt="Large brokerage"/>
                </div>
                <div className="col-lg-6 col-sm-12 lh-lg">
                    <h1 className="mb-4">Largest stock broker in India</h1>
                    <p className="mb-4">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className="row m-2">
                        <ul className="col-lg-6 col-sm-12">
                            <li><p>Futures and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                        <ul className="col-lg-6 col-sm-12">
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Gov</p></li>
                        </ul>
                    </div>
                    <img src="/media/images/pressLogos.png" alt="Newspapers" style={{width:"620px"}}/>
                </div>
            </div>
        </div>
    )
}
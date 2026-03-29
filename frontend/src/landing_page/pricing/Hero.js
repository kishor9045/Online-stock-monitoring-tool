export default function Hero(){
    return (
        <div className="container text-center ">
            <div className="row py-5 my-4 border-bottom">
                <h2>Pricing</h2>
                <p className="text-muted">Free equity investments and flat $20 traday and F&O trades</p>
            </div>
            <div className="row my-5">
                <div className="col-lg-4 col-sm-12 p-5">
                    <img src="/media/images/pricing0.svg" alt="Rupees" width="250px"/>
                    <h3 className="mb-4">Free equity delivery</h3>
                    <p className="text-muted">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-5">
                    <img src="/media/images/pricingEquity.svg" alt="Rupees" width="250px"/>
                    <h3 className="mb-4">Intraday and F&O trades</h3>
                    <p className="text-muted">Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col-lg-4 col-sm-12 p-5">
                    <img src="/media/images/pricingMF.svg" alt="Rupees" width="250px"/>
                    <h3 className="mb-4">Free direct MF</h3>
                    <p className="text-muted">All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
    )
}
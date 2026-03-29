export default function Brokerage(){
    return(
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <h3 className="mb-4 text-center" style={{color:"#387Ed1"}}>Brokerage calculator</h3>
                    <ul>
                        <li className="text-muted"><p>Instantly calculate brokerage charges for intraday and delivery trades.</p></li>
                        <li className="text-muted"><p>Compare fees across multiple stockbrokers in one place.</p></li>
                        <li className="text-muted"><p>Get detailed cost breakdown including STT, GST, SEBI, and stamp duty.</p></li>
                        <li className="text-muted"><p>Plan your trades efficiently with accurate profit and loss estimation.</p></li>
                        <li className="text-muted"><p>Supports calculations for equity, futures, options, and commodities.</p></li>
                        <li className="text-muted"><p>Completely free and easy-to-use online brokerage calculator tool.</p></li>
                    </ul>
                </div>
                <div className="col-lg-6 col-sm-12 p-5">
                    <h3 className="mb-4 text-center" style={{color:"#387Ed1"}}>List of charges</h3>
                    <ul>
                        <li className="text-muted"><p>Brokerage Fee – Charged per trade or as a percentage of turnover.</p></li>
                        <li className="text-muted"><p>Securities Transaction Tax (STT) – Levied by the government on both buy and sell transactions.</p></li>
                        <li className="text-muted"><p>Exchange Transaction Charges – Applied by stock exchanges for trade processing.</p></li>
                        <li className="text-muted"><p>Goods and Services Tax (GST) – 18% applicable on brokerage and transaction charges.</p></li>
                        <li className="text-muted"><p>SEBI Turnover Fees – Nominal charge collected by SEBI on total turnover value.</p></li>
                        <li className="text-muted"><p>Stamp Duty – State-wise duty charged on the buy side of transactions.</p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
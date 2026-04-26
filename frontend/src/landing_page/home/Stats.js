export default function Stats(){
    let heading = {
        color:"#424242"
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-sm-12 lh-lg p-5">
                    <h2 className="my-4 mb-5" style={heading}>Trust with confidence</h2>
                    <div>
                        <h4 style={heading}>Customer-first always</h4>
                        <p className="text-muted">That's why 1.6+ crore customers trust Tradexa with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
                    </div>
                    <div>
                        <h4 style={heading}>No spam or gimmicks</h4>
                        <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
                    </div>
                    <div>
                        <h4 style={heading}>The Tradexa universe</h4>
                        <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    </div>
                    <div>
                        <h4 style={heading}>Do better with money</h4>
                        <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                    </div>
                </div>
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src="/media/images/ecosystem.png" alt="Ecostystem" style={{width:"90%"}}/>
                    <div className="d-flex justify-content-evenly">
                        <a href="/" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="/" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Try Kit demo <i className="fa-solid fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <img src="/media/images/pressLogos.png" alt="Newspapers" style={{width:"620px"}}/>
                </div>
            </div>
        </div>
    )
}
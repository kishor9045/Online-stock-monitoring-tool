export default function Pricing(){
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-lg-4 p-5">
                    <h2 className="mb-4">Unbeatable pricing</h2>
                    <p>We pioneered to concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="/" className="link-underline link-underline-opacity-0 link-underline-opacity-75-hover">See pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-2"></div>
                <div className="col-lg-6 p-5 d-flex text-center">
                    <div style={{width:"250px"}} className="border p-4">
                        <h2>$0</h2>
                        <p>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div style={{width:"250px"}} className="border p-4">
                        <h2>$20</h2>
                        <p>Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
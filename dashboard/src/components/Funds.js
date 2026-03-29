import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <div>
          <p>Instant, zero-cost fund transfers with UPI </p>
        </div>
        <div>
          <Link className="fund-btn btn-green">Add funds</Link>
          <Link className="fund-btn btn-blue">Withdraw</Link>
        </div>
      </div>
      <div className="row">
        <div className="funds-col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="row-data">
              <p>Available margin</p>
              <p className="imp colored">4,043.10</p>
            </div>
            <div className="row-data">
              <p>Used margin</p>
              <p className="imp">3,757.30</p>
            </div>
            <div className="row-data">
              <p>Available cash</p>
              <p className="imp">4,043.10</p>
            </div>
            <hr />
            <div className="row-data">
              <p>Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="row-data">
              <p>Margin</p>
              <p>3736.40</p>
            </div>
            <div className="row-data">
              <p>Payin</p>
              <p>4064.00</p>
            </div>
            <div className="row-data">
              <p>SPAN</p>
              <p>0.00</p>
            </div>
            <div className="row-data">
              <p>Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="row-data">
              <p>Exposure</p>
              <p>0.00</p>
            </div>
            <div className="row-data">
              <p>Options premium</p>
              <p>0.00</p>
            </div>
            <hr />
            <div className="row-data">
              <p>Collateral (Liquid funds)</p>
              <p>0.00</p>
            </div>
            <div className="row-data">
              <p>Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="row-data">
              <p>Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="funds-col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;

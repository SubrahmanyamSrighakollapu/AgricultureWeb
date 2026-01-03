import React from "react";

const UpgradeLimit = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-auto">
          <div className="upgrade-card">
            <form>
              <div className="field">
                <label>Settlement Account Type</label>
                <select className="input select">
                  <option>Select</option>
                </select>
              </div>

              <div className="field">
                <label>Bank A/C No.</label>
                <input className="input" />
              </div>

              <div className="field">
                <label>Contact No.</label>
                <input className="input" />
              </div>

              <div className="field">
                <label>Bank Name</label>
                <input className="input" />
              </div>

              <div className="field">
                <label>IFSC Code</label>
                <input className="input" />
              </div>

              <div className="field">
                <label>A/C Holder Name</label>
                <select className="input select">
                  <option>Search Bank Name</option>
                </select>
              </div>

              <div className="field">
                <label>PAN Number</label>
                <input className="input" />
              </div>

              <div className="note">
                Note: Enter 10 digit PAN Number as per your Bank Account
              </div>

              <div className="button-row">
                <button type="button" className="cancel-btn">
                  Cancel
                </button>
                <button type="button" className="submit-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        .upgrade-card {
          width: 685px;
          height: 805px;
          padding: 32px;
          border: 1px solid #4D4D4D;
          box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.25);
          border-radius: 8px;
          background: #ffffff;
        }

        .field {
          margin-bottom: 20px;
        }

        .field label {
          font-size: 14px;
          margin-bottom: 6px;
          display: block;
          font-family: Poppins;
        }

        .input {
          width: 590px;
          height: 50px;
          border: 1px solid #4D4D4D;
          border-radius: 8px;
          padding: 10px 14px;
          font-size: 14px;
          outline: none;
        }

        .input:focus {
          border-color: #4D4D4D;
        }

        .select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='45' viewBox='0 0 24 24' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          background-size: 15px 45px;
          padding-right: 42px;
        }

        .note {
          width: 464px;
          height: 24px;
          font-family: "Poppins", sans-serif;
          font-weight: 500;
          font-size: 16px;
          line-height: 100%;
          letter-spacing: 0%;
          opacity: 1;
          margin-top: 6px;
          margin-bottom: 20px;
        }

        .button-row {
          width: 590px;
          display: flex;
          justify-content: space-between;
          margin-top: 20px;
        }

        .cancel-btn {
          width: 148px;
          height: 40px;
          border-radius: 8px;
          border: 1px solid #7A7A7A;
          background: #ffffff;
          font-weight: 500;
        }

        .submit-btn {
          width: 148px;
          height: 40px;
          border-radius: 8px;
          border: none;
          background: #4BAF47;
          color: #ffffff;
          font-weight: 500;
        }
      `}</style>
    </div>
  );
};

export default UpgradeLimit;
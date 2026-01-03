import React from "react";

const Settlement = () => {
  return (
    <div className="card shadow-sm p-4 rounded-3">
      <form>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Settlement Account Type</label>
            <select className="form-select">
              <option>Select</option>
            </select>
          </div>
          <div className="col-md-6">
            <label className="form-label">Bank A/C No.</label>
            <input className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Contact No.</label>
            <input className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Bank Name</label>
            <input className="form-control" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">IFSC Code</label>
            <input className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">A/C Holder Name</label>
            <select className="form-select">
              <option>Search Bank Name</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">
              Bankit Fee <span className="text-danger">*</span>
            </label>
            <input className="form-control" />
          </div>
          <div className="col-md-6">
            <label className="form-label">Total Settlement Balance</label>
            <input className="form-control" />
          </div>
        </div>

        <div className="mb-1">
          <label className="form-label">
            Amount <span className="text-danger">*</span>
          </label>
          <input className="form-control w-100" />
        </div>

        <p className="text-danger small mb-4">
          You can not make any settlement exceeding your Total Settlement Balance /
          Allowed Settlement Limit / Wallet Balance
        </p>

        <div className="row align-items-start mb-4">
          <div className="col-md-6">
            <label className="form-label">
              Transaction Pin <span className="text-danger">*</span>
            </label>
            <input type="password" className="form-control" />
            <div className="text-center mt-1">
              <small className="text-muted">Change Transaction Pin</small>
            </div>
          </div>

          <div className="col-md-6">
            <label className="form-label">
              Transfer Mode <span className="text-danger">*</span>
            </label>
            <select className="form-select">
              <option>Instant</option>
            </select>
          </div>
        </div>

        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label text-danger small">
            Rs. 0 will be charged for opting SecurePlus assurance plan on this transaction
          </label>
        </div>

        <div className="form-check mb-4">
          <input className="form-check-input" type="checkbox" />
          <label className="form-check-label small">
            I hereby agree to the terms & Conditions of this settlement transaction.
          </label>
        </div>

        <div className="d-flex justify-content-between px-5">
          <button type="button" style={styles.cancelBtn}>
            Cancel
          </button>

          <button type="button" style={styles.submitBtn}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

const styles = {
  cancelBtn: {
    width: "148px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #57B846",
    backgroundColor: "#57B846",
    color: "#FFFFFF",
    fontSize: "14px",
    fontWeight: "500",
  },
  submitBtn: {
    width: "148px",
    height: "40px",
    borderRadius: "8px",
    border: "1px solid #7A7A7A",
    backgroundColor: "#FFFFFF",
    color: "#000000",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default Settlement;
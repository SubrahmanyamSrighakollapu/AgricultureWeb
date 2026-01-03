import React from "react";

const RegisterBankForm = () => {
  return (
    <div className="card shadow-sm p-4 rounded-3">
      <form>
        <Input label="Settlement Account Type" type="select" />
        <Input label="Contact No." />
        <Input label="A/C Holder Name" />
        <Input label="Bank A/C No." />
        <Input label="Confirm Bank A/C No." />
        <Input label="Bank Name" type="select" placeholder="Search Bank Name" />
        <Input label="IFSC Code" />

        <div className="d-flex justify-content-between align-items-center mt-4">
          <button type="button" style={styles.outlineBtn}>Cancel</button>
          <button type="button" style={styles.registerBtn}>
            Register <br /> Beneficiary
          </button>
          <button type="button" style={styles.outlineBtn}>
            Verify <br /> Beneficiary
          </button>
        </div>
      </form>
    </div>
  );
};

const Input = ({ label, type = "input", placeholder = "Select" }) => (
  <div className="mb-3">
    <label className="form-label">{label}</label>
    {type === "select" ? (
      <select className="form-select">
        <option>{placeholder}</option>
      </select>
    ) : (
      <input className="form-control" />
    )}
  </div>
);

const styles = {
  outlineBtn: {
    width: "148px",
    height: "49px",
    borderRadius: "8px",
    border: "1px solid #565656",
    backgroundColor: "#F5F5F5",
    fontWeight: "500",
  },
  registerBtn: {
    width: "148px",
    height: "49px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4BAF47",
    color: "#ffffff",
    fontWeight: "500",
  },
};

export default RegisterBankForm;
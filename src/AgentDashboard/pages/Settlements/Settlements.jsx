import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RegisterBankForm from "./RegisterBankForm";
import Settlement from "./Settlement";
import DeleteBank from "./DeleteBank";
import UpgradeLimit from "./UpgradeLimit";

const Settlements = () => {
  const [activeTab, setActiveTab] = useState("register");

  return (
    <div className="container-fluid mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="d-flex justify-content-between mb-4">
            <Radio
              label="REGISTER BANK"
              checked={activeTab === "register"}
              onChange={() => setActiveTab("register")}
            />

            <Radio
              label="SETTLEMENT"
              checked={activeTab === "settlement"}
              onChange={() => setActiveTab("settlement")}
            />

            <Radio
              label="DELETE BANK"
              checked={activeTab === "delete"}
              onChange={() => setActiveTab("delete")}
            />

            <Radio
              label="UPGRADE LIMIT"
              checked={activeTab === "upgrade"}
              onChange={() => setActiveTab("upgrade")}
            />
          </div>

          {activeTab === "register" && <RegisterBankForm />}
          {activeTab === "settlement" && <Settlement />}
          {activeTab === "delete" && <DeleteBank />}
          {activeTab === "upgrade" && <UpgradeLimit />}
        </div>
      </div>
    </div>
  );
};

const Radio = ({ label, checked, onChange }) => (
  <label className="form-check-label d-flex align-items-center gap-1">
    <input
      type="radio"
      className="form-check-input"
      checked={checked}
      onChange={onChange}
    />
    {label}
  </label>
);

export default Settlements;
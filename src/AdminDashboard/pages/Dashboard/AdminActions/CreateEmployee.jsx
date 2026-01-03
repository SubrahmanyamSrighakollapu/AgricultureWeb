// src/AdminDashboard/pages/CreateEmployee/CreateEmployee.jsx
import React, { useState } from 'react';

const CreateEmployee = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(2);

  return (
    <>
      <style jsx>{`
        .create-employee-container {
          padding: 40px 20px;
          background-color: #f7f9fc;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .title {
          font-size: 28px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 32px;
          text-align: left;
          max-width: 900px;
          margin-left: auto;
          margin-right: auto;
        }

        .card {
          max-width: 900px;
          margin: 0 auto 32px auto;
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .step-title {
          font-size: 18px;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 28px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        label {
          font-size: 14px;
          font-weight: 600;
          color: #4a5568;
          margin-bottom: 8px;
        }

        input {
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 15px;
          background-color: #fff;
          transition: border-color 0.2s;
        }

        input:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .permissions {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 20px;
          margin-top: 16px;
          margin-bottom: 32px;
        }

        .checkbox-group {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: #54CF17;
        }

        .checkbox-group label {
          font-size: 15px;
          font-weight: normal;
          margin-bottom: 0;
        }

        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
        }

        .btn {
          padding: 12px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .btn-next,
        .btn-save-add {
          background-color: #54CF17;
          color: white;
        }

        .btn-next:hover,
        .btn-save-add:hover {
          background-color: #54CF17;
        }

        .btn-cancel,
        .btn-save {
          background-color: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }

        .btn-cancel:hover,
        .btn-save:hover {
          background-color: #edf2f7;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
          }

          .permissions {
            grid-template-columns: 1fr;
          }

          .actions {
            flex-direction: column;
          }

          .btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="create-employee-container">
        <h1 className="title">Create Employee</h1>

        {/* STEP 1: Employee Basic Details */}
        {step === 1 && (
          <div className="card">
            <h2 className="step-title">STEP 1: Employee Basic Details</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter full name" />
              </div>

              <div className="form-group">
                <label>Email ID</label>
                <input type="email" placeholder="Enter email ID" />
              </div>

              <div className="form-group">
                <label>Mobile Number</label>
                <input type="text" placeholder="Enter mobile number" />
              </div>

              <div className="form-group">
                <label>Employee ID</label>
                <input type="text" placeholder="Enter Employee ID" />
              </div>

              <div className="form-group">
                <label>Department</label>
                <input type="text" placeholder="Enter Department" />
              </div>

              <div className="form-group">
                <label>Role Type</label>
                <input type="text" placeholder="Enter Role Type" />
              </div>
            </div>

            <div className="permissions">
              <div className="checkbox-group">
                <input type="checkbox" id="viewOrders" />
                <label htmlFor="viewOrders">View Orders</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="manageInventory" />
                <label htmlFor="manageInventory">Manage Inventory</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="approvePayments" />
                <label htmlFor="approvePayments">Approve Payments</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="viewReports" />
                <label htmlFor="viewReports">View Reports</label>
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-next" onClick={nextStep}>
                Next
              </button>
              <button className="btn btn-cancel">Cancel</button>
            </div>
          </div>
        )}

        {/* STEP 2: Work Details */}
        {step === 2 && (
          <div className="card">
            <h2 className="step-title">STEP 2: Work Details</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Joining Date</label>
                <input type="text" placeholder="Enter Joining Date" />
              </div>

              <div className="form-group">
                <label>Shift (Optional)</label>
                <input type="text" placeholder="Enter Shift details" />
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-save-add">Save & Add Another</button>
              <button className="btn btn-save">Save Employee</button>
              <button className="btn btn-cancel">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateEmployee;
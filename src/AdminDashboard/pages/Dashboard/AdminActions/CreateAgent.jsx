// src/AdminDashboard/pages/Dashboard/AdminActions/CreateAgent.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateAgent = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const nextStep = () => setStep(2);
  const prevStep = () => setStep(1);
  const goToKyc = () => navigate('/admin/agent-kyc-verification');

  return (
    <>
      <style jsx>{`
        .create-agent-container {
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
          margin-bottom: 24px;
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

        .form-group.full-width {
          grid-column: 1 / -1;
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

        .btn-next {
          background-color: #54CF17;
          color: white;
        }

        .btn-next:hover {
          background-color: #54CF17;
        }

        .btn-cancel {
          background-color: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
        }

        .btn-cancel:hover {
          background-color: #edf2f7;
        }

        @media (max-width: 768px) {
          .form-grid {
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

      <div className="create-agent-container">
        <h1 className="title">Create Agent</h1>

        {/* STEP 1: Agent Basic Details */}
        {step === 1 && (
          <div className="card">
            <h2 className="step-title">STEP 1: Agent Basic Details</h2>

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
                <label>Operating Area</label>
                <input type="text" placeholder="Enter Operating Area" />
              </div>

              <div className="form-group full-width">
                <label>Language Preferred</label>
                <input type="text" placeholder="Enter Language Preferred" />
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

        {/* STEP 2: Bank Details */}
        {step === 2 && (
          <div className="card">
            <h2 className="step-title">STEP 1: Bank Details</h2>

            <div className="form-grid">
              <div className="form-group">
                <label>Business Type</label>
                <input type="text" placeholder="Enter Business Type" />
              </div>

              <div className="form-group">
                <label>Business Name</label>
                <input type="text" placeholder="Enter Business Name" />
              </div>

              <div className="form-group full-width">
                <label>Address</label>
                <input type="text" placeholder="Enter Address" />
              </div>

              <div className="form-group">
                <label>Service Radius (km)</label>
                <input type="text" placeholder="Enter Service Radius (km)" />
              </div>

              <div className="form-group">
                <label>Commission %</label>
                <input type="text" placeholder="Enter Commission %" />
              </div>
            </div>

            <div className="actions">
              <button className="btn btn-next" onClick={goToKyc}>
                Next
              </button>
              <button className="btn btn-cancel" onClick={prevStep}>
                Back
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CreateAgent;
// src/AdminDashboard/pages/Dashboard/AdminActions/CreateUser.jsx
import React, { useState } from 'react';

const CreateUser = () => {
  const [autoGeneratePassword, setAutoGeneratePassword] = useState(true);
  const [status, setStatus] = useState(true);

  return (
    <>
      <style jsx>{`
        .create-user-container {
          padding: 40px 20px;
          background-color: #f7f9fc;
          min-height: 100vh;
          font-family: 'Segoe UI', sans-serif;
        }

        .card {
          max-width: 800px;
          margin: 0 auto;
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .title {
          font-size: 28px;
          font-weight: 600;
          color: #2d3748;
          margin-bottom: 32px;
          text-align: left;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
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

        input[type="text"],
        input[type="email"],
        input[type="password"] {
          padding: 12px 16px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 15px;
          background-color: #fff;
          transition: border-color 0.2s;
        }

        input[type="text"]:focus,
        input[type="email"]:focus,
        input[type="password"]:focus {
          outline: none;
          border-color: #6366f1;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.1);
        }

        .role-description {
          grid-column: 1 / -1;
          font-size: 13px;
          color: #718096;
          line-height: 1.5;
          margin-top: -12px;
          margin-bottom: 20px;
        }

        .toggle-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .toggle-label {
          font-size: 15px;
          font-weight: 500;
          color: #4a5568;
        }

        /* Toggle Switch */
        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 52px;
          height: 28px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #cbd5e0;
          transition: 0.3s;
          border-radius: 34px;
        }

        .slider:before {
          position: absolute;
          content: "";
          height: 22px;
          width: 22px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
        }

        input:checked + .slider {
          background-color: #54CF17;
        }

        input:checked + .slider:before {
          transform: translateX(24px);
        }

        /* Status Toggle - same as above but separate for clarity */
        .status-group {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 32px;
        }

        .status-label {
          font-size: 15px;
          font-weight: 500;
          color: #4a5568;
        }

        /* Action Buttons */
        .actions {
          display: flex;
          justify-content: flex-end;
          gap: 16px;
          margin-top: 32px;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.2s;
        }

        .btn-primary {
          background-color: #54CF17;
          color: white;
        }

        .btn-primary:hover {
          background-color: #54CF17;
        }

        .btn-secondary {
          background-color: #e2e8f0;
          color: #4a5568;
        }

        .btn-secondary:hover {
          background-color: #cbd5e0;
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

      <div className="create-user-container">
        <div className="card">
          <h1 className="title">Create User</h1>

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
              <label>Role</label>
              <input type="text" placeholder="Enter Role" />
            </div>

            <p className="role-description">
              Admin - Manage all aspects of the platform. Agent - Manage specific accounts and transactions. 
              Employee - Support role with limited access.
            </p>
          </div>

          <div className="toggle-group">
            <span className="toggle-label">Auto-generate password</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={autoGeneratePassword}
                onChange={() => setAutoGeneratePassword(!autoGeneratePassword)}
              />
              <span className="slider"></span>
            </label>
          </div>

          {!autoGeneratePassword && (
            <div className="form-group full-width" style={{ marginBottom: '24px' }}>
              <label>Password</label>
              <input type="password" placeholder="Enter password" />
            </div>
          )}

          <div className="status-group">
            <span className="status-label">Status</span>
            <label className="toggle-switch">
              <input
                type="checkbox"
                checked={status}
                onChange={() => setStatus(!status)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <div className="actions">
            <button className="btn btn-primary">Create User</button>
            <button className="btn btn-secondary">Send Login Credentials</button>
            <button className="btn btn-cancel">Cancel</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateUser;
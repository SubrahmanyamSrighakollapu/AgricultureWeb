// PaymentMethodsManager.jsx
import React from 'react';

const PaymentMethodsManager = () => {
  return (
    <>
      <style>{`
        .payment-methods-manager {
          padding: 24px 32px;
          background: #f5f7fa;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .page-subtitle {
          color: #64748b;
          font-size: 15px;
          margin: 0 0 32px 0;
        }

        .two-column-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 48px;
        }

        .card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          padding: 28px 32px;
        }

        .card-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 24px 0;
        }

        .form-group {
          margin-bottom: 24px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          margin-bottom: 6px;
          display: block;
        }

        .form-input,
        .form-textarea {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: rgba(75, 175, 71, 1);
          box-shadow: 0 0 0 3px rgba(75, 175, 71, 0.15);
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #94a3b8;
        }

        .form-textarea {
          min-height: 90px;
          resize: vertical;
        }

        .helper-text {
          font-size: 13px;
          color: #64748b;
          margin-top: 6px;
        }

        .add-btn {
          width: 100%;
          padding: 12px;
          background: rgba(75, 175, 71, 1);
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .add-btn:hover {
          background: rgba(65, 155, 61, 1);
        }

        /* Tables Section */
        .tables-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
        }

        .table-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          overflow: hidden;
        }

        .table-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .table-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 16px 20px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          font-size: 14px;
          color: #334155;
        }

        .table th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
        }

        .no-data {
          padding: 80px 24px;
          text-align: center;
          color: #64748b;
          font-size: 15px;
        }

        .action-btn {
          background: none;
          border: none;
          color: #ef4444;
          cursor: pointer;
          font-weight: 600;
        }
      `}</style>

      <div className="payment-methods-manager">
        <h1 className="page-title">Payment Methods Manager</h1>
        <p className="page-subtitle">
          Configure payment methods and options for seamless transactions
        </p>

        <div className="two-column-layout">
          {/* Left - Add Payment Method */}
          <div className="card">
            <h2 className="card-title">Add Payment Method</h2>

            <div className="form-group">
              <label className="form-label">Method Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Method Name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                placeholder="Enter Description"
              />
              <div className="helper-text">
                Brief description of this payment method
              </div>
            </div>

            <button className="add-btn">Add Method</button>
          </div>

          {/* Right - Add Payment Option */}
          <div className="card">
            <h2 className="card-title">Add Payment Option</h2>

            <div className="form-group">
              <label className="form-label">Payment Method</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Payment Method"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Option Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Option Name"
              />
            </div>

            <div className="form-group">
              <label className="form-label">Description</label>
              <textarea
                className="form-textarea"
                placeholder="Enter Description"
              />
              <div className="helper-text">
                Brief description of this payment method
              </div>
            </div>

            <button className="add-btn">Add Method</button>
          </div>
        </div>

        {/* Tables */}
        <div className="tables-section">
          {/* All Payment Methods Table */}
          <div className="table-card">
            <div className="table-header">
              <h2 className="table-title">All Payment Methods</h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Method</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={4}>
                    <div className="no-data">No Payment Methods</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* All Payment Options Table */}
          <div className="table-card">
            <div className="table-header">
              <h2 className="table-title">All Payment Options</h2>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Method</th>
                  <th>Option Name</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={5}>
                    <div className="no-data">No Payment Options</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentMethodsManager;
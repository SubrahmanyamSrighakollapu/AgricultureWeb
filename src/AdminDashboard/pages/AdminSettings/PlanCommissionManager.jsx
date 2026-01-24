// PlanCommissionManager.jsx
import React from 'react';
import { Search, Filter, Edit, Trash2 } from 'lucide-react';

const PlanCommissionManager = () => {
  return (
    <>
      <style>{`
        .commission-manager-page {
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

        .form-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          padding: 28px 32px;
          margin-bottom: 32px;
          border: 2px solid #3b82f6;
        }

        .form-title {
          font-size: 20px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 24px 0;
        }

        .select-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-label {
          font-size: 14px;
          font-weight: 500;
          color: #334155;
        }

        .form-select,
        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          font-size: 15px;
          background: white;
          outline: none;
        }

        .form-select:focus,
        .form-input:focus {
          border-color: rgba(75, 175, 71, 1);
          box-shadow: 0 0 0 3px rgba(75, 175, 71, 0.15);
        }

        .commission-input-wrapper {
          margin: 32px 0;
        }

        .info-box {
          background: #fefce8;
          border: 1px solid #fef08a;
          border-radius: 10px;
          padding: 16px 20px;
          color: #854d0e;
          font-size: 14px;
          line-height: 1.5;
          margin: 24px 0 32px 0;
        }

        .info-box strong {
          color: #713f12;
        }

        .save-btn {
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

        .save-btn:hover {
          background: rgba(65, 155, 61, 1);
        }

        /* Directory */
        .directory-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .directory-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .directory-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 16px 0;
        }

        .filters-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .search-wrapper {
          flex: 1;
          min-width: 260px;
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 10px 12px 10px 40px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          font-size: 14px;
        }

        .search-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .filter-select {
          min-width: 140px;
          padding: 10px 12px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          font-size: 14px;
        }

        .filter-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: rgba(75, 175, 71, 1);
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
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
          color: #334155;
          font-size: 14px;
        }

        .table th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
        }

        .status-active {
          color: #10b981;
          font-weight: 600;
        }

        .actions-cell {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
        }

        .action-btn:hover {
          color: #1a1a1a;
        }
      `}</style>

      <div className="commission-manager-page">
        <h1 className="page-title">Plan Commission Manager</h1>
        <p className="page-subtitle">
          Configure commission structures for different plans and roles
        </p>

        <div className="form-card">
          <h2 className="form-title">Select plan & role</h2>

          <div className="select-row">
            <div className="form-group">
              <label className="form-label">Select plan</label>
              <select className="form-select">
                <option>Choose Plan</option>
                {/* Add real options here */}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Select Role</label>
              <select className="form-select">
                <option>Choose Role</option>
                {/* Add real options here */}
              </select>
            </div>
          </div>

          <div className="commission-input-wrapper">
            <div className="form-group">
              <label className="form-label">Payment gateway Commission</label>
              <input
                type="text"
                className="form-input"
                placeholder="Enter Commission Rate (%)"
              />
            </div>
          </div>

          <button className="save-btn">Save Commission</button>

          <div className="info-box">
            <strong>How it works:</strong><br />
            Commission rates determine how much each role earns from the selected plan. 
            Lower hierarchy roles typically have lower commission rates.
          </div>
        </div>

        <div className="directory-card">
          <div className="directory-header">
            <h2 className="directory-title">Commission Directory</h2>

            <div className="filters-row">
              <div className="search-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for plan, role, ..."
                />
              </div>

              <select className="filter-select">
                <option>All Plans</option>
              </select>

              <select className="filter-select">
                <option>All Roles</option>
              </select>

              <select className="filter-select">
                <option>All Gateways</option>
              </select>

              <button className="filter-btn">
                <Filter size={18} />
                Filter
              </button>
            </div>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Plan Name</th>
                <th>Role name</th>
                <th>Gateway name</th>
                <th>Commission Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Associated plan</td>
                <td>Agent</td>
                <td>Payment gateway</td>
                <td>Percentage</td>
                <td>
                  <span className="status-active">Active</span>
                </td>
                <td className="actions-cell">
                  <button className="action-btn" title="Edit">
                    <Edit size={18} />
                  </button>
                  <button className="action-btn" title="Delete">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PlanCommissionManager;
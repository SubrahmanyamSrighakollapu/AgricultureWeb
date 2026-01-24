// PlansManagement.jsx
import React from 'react';
import { Search, Filter, Edit, Trash2 } from 'lucide-react';

const PlansManagement = () => {
  return (
    <>
      <style>{`
        .plans-management-page {
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

        .main-content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .card.blue-border {
          border: 2px solid #3b82f6;
        }

        .card-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .form-section {
          padding: 28px 24px;
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
          resize: vertical;
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

        /* Plans Directory */
        .directory-header {
          padding: 16px 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .search-wrapper {
          flex: 1;
          min-width: 240px;
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
          padding: 10px 12px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          min-width: 140px;
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

      <div className="plans-management-page">
        <h1 className="page-title">Plans Management</h1>
        <p className="page-subtitle">
          Create and manage subscription plans with pricing and features
        </p>

        <div className="main-content">
          {/* Add New Plan Form */}
          <div className="card blue-border">
            <div className="card-header">
              <h2 className="card-title">Add New Plan</h2>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label className="form-label">Plan Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Plan Name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Price (₹)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Price (₹)"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Description</label>
                <textarea
                  className="form-textarea"
                  rows="4"
                  placeholder="Enter Description"
                />
              </div>

              <button className="save-btn">Save Plan</button>
            </div>
          </div>

          {/* Plans Directory */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Plans Directory</h2>
            </div>

            <div className="directory-header">
              <div className="search-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for plan, id, ..."
                />
              </div>

              <select className="filter-select">
                <option>All Status</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>

              <button className="filter-btn">
                <Filter size={18} />
                Filter
              </button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Plan Details</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>bronze</td>
                  <td>₹1,000</td>
                  <td>
                    <span className="status-active">Active</span>
                  </td>
                  <td>8 Jun 2025</td>
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
      </div>
    </>
  );
};

export default PlansManagement;
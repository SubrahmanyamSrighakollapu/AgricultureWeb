// RolesManagement.jsx
import React from 'react';
import { Search, Filter } from 'lucide-react';

const RolesManagement = () => {
  return (
    <>
      <style>{`
        .roles-management-page {
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
          display: grid;
          grid-template-columns: 1fr;
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
          padding: 24px;
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

        .form-input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
        }

        .form-input:focus {
          border-color: rgba(75, 175, 71, 1);
          box-shadow: 0 0 0 3px rgba(75, 175, 71, 0.15);
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        .helper-text {
          font-size: 13px;
          color: #64748b;
          margin-top: 4px;
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

        /* Roles Directory */
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
          min-width: 160px;
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
          padding: 16px 24px;
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

        .no-data {
          padding: 80px 24px;
          text-align: center;
          color: #64748b;
        }

        .no-data-title {
          font-size: 18px;
          font-weight: 600;
          color: #334155;
          margin: 0 0 8px 0;
        }
      `}</style>

      <div className="roles-management-page">
        <h1 className="page-title">Roles Management</h1>
        <p className="page-subtitle">
          Create and manage user roles with hierarchical permissions
        </p>

        <div className="main-content">
          {/* Left - Add New Role Form */}
          <div className="card blue-border">
            <div className="card-header">
              <h2 className="card-title">Add New Role</h2>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label className="form-label">Role Name</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Role Name"
                />
              </div>

              <div className="form-group">
                <label className="form-label">Parent Role (Optional)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Parent Role (Optional)"
                />
                <div className="helper-text">
                  Select the role that will be directly above this role
                </div>
              </div>

              <h3 style={{ margin: '32px 0 20px', fontSize: '18px', fontWeight: 600 }}>
                Role Configuration
              </h3>

              <div className="form-group">
                <label className="form-label">Hierarchy Level</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Hierarchy Level"
                />
                <div className="helper-text">
                  Lower numbers indicate higher authority (1 is highest)
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Default Commission Rate (%)</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Enter Default Commission Rate (%)"
                />
                <div className="helper-text">
                  Enter a value between 0 and 100
                </div>
              </div>

              <button className="save-btn">Save Changes</button>
            </div>
          </div>

          {/* Right - Roles Directory */}
          <div className="card">
            <div className="card-header">
              <h2 className="card-title">Roles Directory</h2>
            </div>

            <div className="directory-header">
              <div className="search-wrapper">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search for role, id, ..."
                />
              </div>

              <select className="filter-select">
                <option>Hierarchy Level</option>
                <option>Role Name</option>
                <option>Commission Rate</option>
              </select>

              <button className="filter-btn">
                <Filter size={18} />
                Filter
              </button>
            </div>

            <table className="table">
              <thead>
                <tr>
                  <th>Role Details</th>
                  <th>Hierarchy Level</th>
                  <th>Parent Role</th>
                  <th>Commission Rate</th>
                  <th>Created Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={6}>
                    <div className="no-data">
                      <h3 className="no-data-title">No Roles Directory</h3>
                    </div>
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

export default RolesManagement;
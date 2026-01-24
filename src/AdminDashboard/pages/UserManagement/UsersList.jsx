// UsersList.jsx
import React from 'react';
import { Search, Plus, Edit, Trash2 } from 'lucide-react';

const UsersList = () => {
  return (
    <>
      <style>{`
        .users-list-page {
          padding: 24px 32px;
          background: #f5f7fa;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 32px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0 0 8px 0;
        }

        .create-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
          background: #10b981;
          color: white;
          border: none;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }

        .create-btn:hover {
          background: #059669;
        }

        .filter-bar {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-wrapper {
          flex: 1;
          min-width: 300px;
          position: relative;
        }

        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 15px;
          outline: none;
        }

        .search-input:focus {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
        }

        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #94a3b8;
        }

        .select {
          padding: 12px 16px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 15px;
          min-width: 160px;
          background: white;
        }

        .table-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          overflow: hidden;
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
        }

        .table th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
        }

        .status-pending {
          background: #fef3c7;
          color: #92400e;
        }

        .status-approved {
          background: #d1fae5;
          color: #065f46;
        }

        .status-rejected {
          background: #fee2e2;
          color: #991b1b;
        }

        .action-icons {
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

        .pagination {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 24px;
          color: #64748b;
          font-size: 14px;
        }

        .pagination-numbers {
          display: flex;
          gap: 8px;
        }

        .page-number {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 6px;
          cursor: pointer;
        }

        .page-number.active {
          background: #10b981;
          color: white;
          font-weight: 600;
        }
      `}</style>

      <div className="users-list-page">
        <div className="page-header">
          <h1 className="page-title">User List</h1>
          <button className="create-btn">
            <Plus size={18} />
            Create New User
          </button>
        </div>

        <div className="filter-bar">
          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search by name, Id..."
            />
          </div>

          <select className="select">
            <option>All Role</option>
            <option>Agent</option>
            <option>Farmer</option>
            <option>Admin</option>
          </select>

          <select className="select">
            <option>All Status</option>
            <option>Pending</option>
            <option>Approved</option>
            <option>Rejected</option>
          </select>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>User ID</th>
                <th>Name</th>
                <th>Role</th>
                <th>Mobile</th>
                <th>Wallet Balance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>AG-0278</td>
                <td>Sarah Johnson</td>
                <td>Agent</td>
                <td>+91 9876543212</td>
                <td>₹80,000</td>
                <td><span className="status-badge status-pending">Pending</span></td>
                <td className="action-icons">
                  <button className="action-btn"><Edit size={18} /></button>
                  <button className="action-btn"><Trash2 size={18} /></button>
                </td>
              </tr>

              <tr>
                <td>AG-0278</td>
                <td>Sarah Johnson</td>
                <td>Farmer</td>
                <td>+91 9876543212</td>
                <td>₹80,000</td>
                <td><span className="status-badge status-approved">Approved</span></td>
                <td className="action-icons">
                  <button className="action-btn"><Edit size={18} /></button>
                  <button className="action-btn"><Trash2 size={18} /></button>
                </td>
              </tr>

              <tr>
                <td>AG-0278</td>
                <td>Sarah Johnson</td>
                <td>Agent</td>
                <td>+91 9876543212</td>
                <td>₹80,000</td>
                <td><span className="status-badge status-rejected">Rejected</span></td>
                <td className="action-icons">
                  <button className="action-btn"><Edit size={18} /></button>
                  <button className="action-btn"><Trash2 size={18} /></button>
                </td>
              </tr>

              <tr>
                <td>AG-0278</td>
                <td>Sarah Johnson</td>
                <td>Farmer</td>
                <td>+91 9876543212</td>
                <td>₹80,000</td>
                <td><span className="status-badge status-pending">Pending</span></td>
                <td className="action-icons">
                  <button className="action-btn"><Edit size={18} /></button>
                  <button className="action-btn"><Trash2 size={18} /></button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pagination">
          <div>Showing 1 to 3 of 100</div>
          <div className="pagination-numbers">
            <div className="page-number active">1</div>
            <div className="page-number">2</div>
            <div className="page-number">3</div>
            <div className="page-number">...</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UsersList;
// NoticeBoardManager.jsx
import React from 'react';
import { Edit, Trash2 } from 'lucide-react';

const NoticeBoardManager = () => {
  return (
    <>
      <style>{`
        .noticeboard-manager {
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
          padding: 28px 32px;
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

        .form-textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #d1d9e0;
          border-radius: 8px;
          font-size: 15px;
          outline: none;
          resize: vertical;
          min-height: 100px;
        }

        .form-textarea:focus {
          border-color: rgba(75, 175, 71, 1);
          box-shadow: 0 0 0 3px rgba(75, 175, 71, 0.15);
        }

        .form-textarea::placeholder {
          color: #94a3b8;
        }

        .helper-text {
          font-size: 13px;
          color: #64748b;
          margin-top: 6px;
        }

        .notice-box {
          background: #fffbeb;
          border: 1px solid #fee2c7;
          border-radius: 8px;
          padding: 16px 20px;
          margin: 24px 0 32px 0;
          color: #c2410c;
          font-size: 14px;
        }

        .notice-box strong {
          color: #9a3412;
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

        /* Archive Table */
        .archive-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .archive-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .archive-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0;
        }

        .archive-table {
          width: 100%;
          border-collapse: collapse;
        }

        .archive-table th,
        .archive-table td {
          padding: 16px 24px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .archive-table th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
          font-size: 14px;
        }

        .notice-cell {
          font-size: 14px;
          color: #334155;
          max-width: 600px;
        }

        .actions-cell {
          text-align: right;
        }

        .action-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
          margin-left: 12px;
        }

        .action-btn:hover {
          color: #ef4444;
        }
      `}</style>

      <div className="noticeboard-manager">
        <h1 className="page-title">Noticeboard Manager</h1>
        <p className="page-subtitle">
          Post important notices and announcements for your users
        </p>

        <div className="main-content">
          {/* Create Notice Section */}
          <div className="card blue-border">
            <div className="card-header">
              <h2 className="card-title">Create Notice</h2>
            </div>

            <div className="form-section">
              <div className="form-group">
                <label className="form-label">Notice Content</label>
                <textarea
                  className="form-textarea"
                  placeholder="Enter the Notice Message here..."
                />
                <div className="helper-text">
                  Notices appear prominently on the dashboard and notification center.
                </div>
              </div>

              <div className="notice-box">
                <strong>Important Notice</strong><br />
                Please fill out this field. Notices are visible to all users and should contain important announcements or updates.
              </div>

              <button className="save-btn">Save Notice</button>
            </div>
          </div>

          {/* Notices Archive */}
          <div className="archive-card">
            <div className="archive-header">
              <h2 className="archive-title">Notices Archive</h2>
            </div>

            <table className="archive-table">
              <thead>
                <tr>
                  <th>Notices</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="notice-cell">
                    Message should be here...
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
      </div>
    </>
  );
};

export default NoticeBoardManager;
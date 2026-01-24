// PaymentGatewaySetup.jsx
import React from 'react';

const PaymentGatewaySetup = () => {
  return (
    <>
      <style>{`
        .payment-gateway-page {
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
          padding: 32px;
          margin-bottom: 32px;
        }

        .section-title {
          font-size: 18px;
          font-weight: 600;
          color: #1a1a1a;
          margin: 0 0 16px 0;
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
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .form-input::placeholder {
          color: #94a3b8;
        }

        /* Payment Methods Chips */
        .payment-methods-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 16px;
          margin-bottom: 32px;
        }

        .method-chip {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 16px;
          text-align: center;
          transition: all 0.2s;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }

        .method-chip:hover {
          background: #fef2f2;
          border-color: #fca5a5;
          box-shadow: 0 0 0 3px rgba(252, 165, 165, 0.15);
        }

        .method-chip.selected {
          border-color: #10b981;
          box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.15);
        }

        .method-chip .icon {
          margin-bottom: 12px;
          display: block;
        }

        .method-chip .name {
          font-weight: 600;
          color: #1a1a1a;
          font-size: 15px;
          margin-bottom: 4px;
        }

        .method-chip .desc {
          font-size: 13px;
          color: #64748b;
          line-height: 1.4;
        }

        /* Payment Options Chips */
        .payment-options-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        .option-chip {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 16px;
          background: #f1f5f9;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          color: #334155;
          border: 1px solid #cbd5e1;
        }

        .option-chip img,
        .option-chip .emoji {
          width: 24px;
          height: 24px;
        }

        /* Buttons */
        .buttons-row {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .btn {
          padding: 10px 24px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-cancel {
          background: #f1f5f9;
          color: #475569;
          border: none;
        }

        .btn-cancel:hover {
          background: #e2e8f0;
        }

        .btn-save {
          background: rgba(75, 175, 71, 1);
          color: white;
          border: none;
        }

        .btn-save:hover {
          background: rgba(75, 175, 71, 1);
        }

        /* Table / Existing Gateways */
        .list-card {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .list-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
        }

        .list-title {
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

        .no-data-subtitle {
          margin: 0;
          font-size: 15px;
        }
      `}</style>

      <div className="payment-gateway-page">
        <h1 className="page-title">Payment Gateway Setup</h1>
        <p className="page-subtitle">
          Configure and manage your payment gateways
        </p>

        <div className="form-card">
          <h2 className="section-title">Gateway Information</h2>

          <div className="form-group">
            <label className="form-label">Gateway Name</label>
            <input
              type="text"
              className="form-input"
              placeholder="Enter Gateway Name"
            />
          </div>

          <h2 className="section-title">Payment Methods</h2>

          <div className="payment-methods-grid">
            <div className="method-chip">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="icon">
                <rect x="2" y="5" width="20" height="14" rx="2" fill="#1f2937" stroke="#374151" strokeWidth="1"/>
                <rect x="2" y="9" width="20" height="2" fill="#6b7280"/>
                <rect x="4" y="12" width="4" height="1" fill="#9ca3af"/>
              </svg>
              <div className="name">Bank Transfer</div>
              <div className="desc">Details shared via email/invoice</div>
            </div>

            <div className="method-chip">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="icon">
                <circle cx="12" cy="12" r="10" fill="#3b82f6"/>
                <path d="M8 12h8M12 8v8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <div className="name">UPI / Net Banking</div>
              <div className="desc">Instant payment for faster process</div>
            </div>

            <div className="method-chip">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="icon">
                <rect x="3" y="4" width="18" height="16" rx="2" fill="#f3f4f6" stroke="#d1d5db"/>
                <path d="M7 8h10M7 12h6" stroke="#6b7280" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="name">Pay on Invoice</div>
              <div className="desc">Credit terms apply (Net 30)</div>
            </div>

            <div className="method-chip">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="icon">
                <rect x="4" y="6" width="16" height="12" rx="3" fill="#10b981"/>
                <circle cx="12" cy="12" r="3" fill="white"/>
                <path d="M10 12h4" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <div className="name">Wallet</div>
              <div className="desc">You can pay with wallet</div>
            </div>
          </div>

          <h2 className="section-title">Payment Options</h2>

          <div className="payment-options-grid">
            <div className="option-chip">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#4285F4"/>
                <path d="M12 7v10M7 12h10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              Google Pay
            </div>
            <div className="option-chip">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#5F259F"/>
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">Pe</text>
              </svg>
              PhonePe
            </div>
            <div className="option-chip">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#00BAF2"/>
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">Paytm</text>
              </svg>
              Paytm
            </div>
            <div className="option-chip">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="4" fill="#FF6600"/>
                <text x="12" y="16" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">BHIM</text>
              </svg>
              BHIM UPI
            </div>
          </div>

          <div className="buttons-row">
            <button className="btn btn-cancel">Cancel</button>
            <button className="btn btn-save">Save gateway</button>
          </div>
        </div>

        <div className="list-card">
          <div className="list-header">
            <h2 className="list-title">Configured Gateways</h2>
          </div>

          <table className="table">
            <thead>
              <tr>
                <th>Gateway Name</th>
                <th>Payment Methods</th>
                <th>Status</th>
                <th>Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={4}>
                  <div className="no-data">
                    <h3 className="no-data-title">No Gateways Configured</h3>
                    <p className="no-data-subtitle">
                      Add your first payment gateway to start accepting payments
                    </p>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default PaymentGatewaySetup;
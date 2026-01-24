// AddPaymentGateway.jsx
import React from 'react';
import { Plus } from 'lucide-react';

const AddPaymentGateway = () => {
  return (
    <>
      <style>{`
        .payment-gateway-page {
          padding: 24px 32px;
          background: #f5f7fa;
          min-height: 100vh;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .header-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1a1a1a;
          margin: 0;
        }

        .page-subtitle {
          color: #64748b;
          font-size: 15px;
          margin: 4px 0 0 0;
        }

        .add-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px;
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
          background: rgba(65, 155, 61, 1); /* slightly darker on hover */
        }

        .table-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .table-header {
          background: #f8fafc;
          border-bottom: 1px solid #e5e7eb;
          padding: 16px 24px;
        }

        .table-title-row {
          display: grid;
          grid-template-columns: 2fr 2fr 1fr 1fr;
          font-weight: 600;
          color: #475569;
          font-size: 14px;
        }

        .table-body {
          min-height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
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
        <div className="header-row">
          <div>
            <h1 className="page-title">Payment Gateway Setup</h1>
            <p className="page-subtitle">
              Configure and manage your payment gateways
            </p>
          </div>

          <button className="add-btn">
            <Plus size={18} />
            Add gateway
          </button>
        </div>

        <div className="table-container">
          <div className="table-header">
            <div className="table-title-row">
              <div>Gateway Name</div>
              <div>Payment Methods</div>
              <div>Status</div>
              <div>Created</div>
            </div>
          </div>

          <div className="table-body">
            <div>
              <h3 className="no-data-title">No Gateways Configured</h3>
              <p className="no-data-subtitle">
                Add your first payment gateway to start accepting payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPaymentGateway;
import React from "react";
import del from "../../../assets/AgentDashboard/Dashboard/material-symbols_delete.png";
import paid from "../../../assets/AgentDashboard/Dashboard/paid (2).png";
import Status from "../../../assets/AgentDashboard/Dashboard/Status.png";
import total from "../../../assets/AgentDashboard/Dashboard/total.png";
import vector from "../../../assets/AgentDashboard/Dashboard/Vector.png";

const VendorPayments = () => {
  return (
    <div className="vendor-root">
      <div className="vendor-header">
        <h3>Vendor payments</h3>
        <p>Track, approve and release farmer payouts efficiently.</p>
      </div>
      
      <div className="summary-row">
        <div className="summary-card">
          <div className="summary-top">
            <span>Total Payable</span>
            <img src={total} alt="" />
          </div>
          <div className="summary-amount">₹ 90,000</div>
          <div className="summary-note green">+10% in last month</div>
        </div>

        <div className="summary-card">
          <div className="summary-top">
            <span>Paid today</span>
            <img src={paid} alt="" />
          </div>
          <div className="summary-amount">₹ 90,000</div>
          <div className="summary-note green">18 transactions processed</div>
        </div>
      </div>
      
      <div className="vendor-table-box">
        <div className="table-controls">
          <div className="filters">
            <div className="filter-box">
              <img src={vector} alt="" />
              <span>Filter</span>
            </div>
            <div className="filter-box">
              <img src={Status} alt="" />
              <span>Status</span>
            </div>
          </div>

          <input
            className="search"
            placeholder="Search orders, customers..."
          />
        </div>
        
        <div className="table-head">
          <span>Farmer</span>
          <span>Order ID</span>
          <span>Product</span>
          <span>Amount</span>
          <span>status</span>
          <span>Action</span>
        </div>

        <div className="table-row">
          <span>Ramesh</span>
          <span>Order #2415</span>
          <span>Wheat</span>
          <span>₹ 52,000</span>
          <span className="awaiting">Awaiting Purchase</span>
          <span><img src={del} alt="" /></span>
        </div>

        <div className="table-row">
          <span>Raju</span>
          <span>Order #2418</span>
          <span>Toor Dal</span>
          <span>₹ 48,000</span>
          <span className="transit">In Transit</span>
          <span><img src={del} alt="" /></span>
        </div>

        <div className="table-row">
          <span>Ramesh</span>
          <span>Order #2480</span>
          <span>Basmati Rice</span>
          <span>₹ 85,000</span>
          <span className="delivered">Delivered</span>
          <span><img src={del} alt="" /></span>
        </div>
      </div>

      <div className="table-footer">
        <span>Showing <b>1–3</b> of 30</span>
        <button>Next</button>
      </div>
      
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: Poppins;
        }

        .vendor-root {
          padding: 24px 32px;
          background: #f7f9f4;
          overflow-x: hidden;
        }

        .vendor-header h3 {
          font-size: 20px;
          font-weight: 500;
        }

        .vendor-header p {
          font-size: 13px;
          color: #6f6f6f;
          margin-bottom: 24px;
        }

        .summary-row {
          display: flex;
          gap: 24px;
          margin-bottom: 24px;
        }

        .summary-card {
          width: 629px;
          padding: 20px;
          background: #fff;
          border: 1px solid #dcdcdc;
          border-radius: 8px;
        }

        .summary-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .summary-top img {
          width: 46px;
          height: 46px;
        }

        .summary-amount {
          font-size: 22px;
          font-weight: 500;
          margin-top: 8px;
        }

        .summary-note {
          font-size: 12px;
        }

        .green { color: #2aa32a; }

        .vendor-table-box {
          width: 100%;
          max-width: 1400px;
          background: #fff;
          border: 1px solid #3f3f3f;
          border-radius: 8px;
        }

        .table-controls {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          border-bottom: 1px solid #e0e0e0;
        }

        .filters {
          display: flex;
          gap: 10px;
        }

        .filter-box {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 13px;
          background: #fff;
        }

        .filter-box img {
          width: 14px;
          height: 14px;
        }

        .search {
          width: 260px;
          height: 32px;
          border-radius: 20px;
          border: 1px solid #ccc;
          padding: 0 14px;
          font-size: 13px;
        }

        .table-head,
        .table-row {
          display: grid;
          grid-template-columns: 1fr 1.2fr 1.2fr 1fr 1.2fr 0.6fr;
          padding: 12px 16px;
          font-size: 13px;
        }

        .table-head {
          background: #f7fbf4;
          color: #0b7a0b;
          font-weight: 500;
          border-bottom: 1px solid #e0e0e0;
        }

        .table-row img {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .awaiting { color: #ff7a00; }
        .transit { color: #a000c8; }
        .delivered { color: #2aa32a; }

        .table-footer {
          max-width: 1400px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 12px;
          font-size: 13px;
        }

        .table-footer button {
          width: 80px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: #fff;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .summary-row {
            flex-direction: column;
          }
          
          .summary-card {
            width: 100%;
          }
          
          .table-controls {
            flex-direction: column;
            gap: 10px;
          }
          
          .search {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default VendorPayments;
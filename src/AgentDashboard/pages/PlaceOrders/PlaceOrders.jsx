import React from "react";
import del from "../../../assets/AgentDashboard/Dashboard/material-symbols_delete.png";
import customer from "../../../assets/AgentDashboard/Dashboard/ix_customer.png";
import cart from "../../../assets/AgentDashboard/Dashboard/cart_outline.png";
import tabler from "../../../assets/AgentDashboard/Dashboard/tabler_cash.png";

const PlaceOrders = () => {
  return (
    <div className="place-page">
      <div className="left-section">
        <h2 className="title">Place customer Order</h2>
        <p className="subtitle">
          Manage current orders and track fulfilment progress from farmers to customers.
        </p>

        <input
          className="search"
          placeholder="Search orders, customers..."
        />
        <div className="orders-box">
          <div className="orders-header">Customer orders</div>
          <div className="orders-thead">
            <span>Order ID</span>
            <span>Customer</span>
            <span>Product</span>
            <span>QTY</span>
            <span>status</span>
            <span>Action</span>
          </div>

          <div className="orders-row">
            <span>Order #2415</span>
            <span>Ramesh</span>
            <span>Wheat</span>
            <span>2.5 Tons</span>
            <span className="awaiting">Awaiting Purchase</span>
            <span><img src={del} alt="" /></span>
          </div>

          <div className="orders-row">
            <span>Order #2418</span>
            <span>Raju</span>
            <span>Toor Dal</span>
            <span>500 Kg</span>
            <span className="transit">In Transit</span>
            <span><img src={del} alt="" /></span>
          </div>
          
          <div className="orders-row">
            <span>Order #2480</span>
            <span>Ramesh</span>
            <span>Basmati Rice</span>
            <span>1 Ton</span>
            <span className="delivered">Delivered</span>
            <span><img src={del} alt="" /></span>
          </div>
        </div>
        
        <div className="orders-footer">
          <span>Showing <b>1-3</b> of 30</span>
          <button>Next</button>
        </div>
      </div>

      <div className="right-section">
        <div className="create-card">
          <div className="create-header">
            <div className="plus">+</div>
            <span>Create New Order</span>
          </div>

          <div className="form-body">
            <div className="section">
              <img src={customer} alt="" />
              <span>Customer Details</span>
            </div>

            <input placeholder="Customer name" />

            <div className="row2">
              <input placeholder="Contact No." />
              <input placeholder="Zip Code" />
            </div>

            <div className="section">
              <img src={cart} alt="" />
              <span>Product Details</span>
            </div>

            <input placeholder="Enter Crop Type" />

            <div className="row2">
              <input placeholder="Qty" />
              <input placeholder="Grade Type" />
            </div>

            <input placeholder="mm/dd/yy" />

            <div className="section">
              <img src={tabler} alt="" />
              <span>Pricing</span>
            </div>

            <div className="row2">
              <input placeholder="Selling price" />
              <input placeholder="Est, Margin" />
            </div>

            <button className="submit">→ Submit Order</button>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        * {
          box-sizing: border-box;
          font-family: Poppins;
        }

        .place-page {
          display: flex;
          gap: 28px;
          padding: 24px;
          background: #f7f9f4;
        }

        .left-section {
          width: 720px;
        }

        .title {
          font-size: 20px;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .subtitle {
          font-size: 13px;
          color: #6f6f6f;
          margin-bottom: 14px;
        }

        .search {
          width: 720px;
          height: 40px;
          border-radius: 20px;
          border: 1px solid #ddd;
          padding: 0 16px;
          margin-bottom: 16px;
        }

        .orders-box {
          background: #fff;
          border: 1px solid #9e9e9e;
          border-radius: 8px;
          overflow: hidden;
        }

        .orders-header {
          padding: 12px 16px;
          font-weight: 500;
          border-bottom: 1px solid #ddd;
        }

        .orders-thead {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.2fr 0.8fr 1.2fr 0.6fr;
          padding: 10px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #0b7a0b;
          background: #f7fbf4;
          border-bottom: 1px solid #e0e0e0;
        }

        .orders-row {
          display: grid;
          grid-template-columns: 1.2fr 1fr 1.2fr 0.8fr 1.2fr 0.6fr;
          padding: 12px 16px;
          font-size: 13px;
          align-items: center;
        }

        .orders-row img {
          width: 18px;
          height: 18px;
        }

        .awaiting { color: #ff7a00; }
        .transit { color: #a000c8; }
        .delivered { color: #2aa32a; }

        .orders-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 10px;
          font-size: 13px;
        }

        .orders-footer button {
          width: 80px;
          height: 32px;
          border-radius: 6px;
          border: 1px solid #ccc;
          background: #fff;
        }

        .right-section {
          width: 360px;
        }

        .create-card {
          background: #fff;
          border: 1px solid #dcdcdc;
          border-radius: 8px;
        }

        .create-header {
          height: 56px;
          background: #f3ffe6;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 16px;
          font-weight: 500;
        }

        .plus {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: #4CAF50;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .form-body {
          padding: 16px;
        }

        .form-body input {
          width: 100%;
          height: 36px;
          margin-bottom: 10px;
          padding: 0 12px;
          border-radius: 4px;
          border: 1px solid #ccc;
          font-size: 13px;
        }

        .row2 {
          display: flex;
          gap: 10px;
        }

        .section {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
          font-size: 13px;
          margin: 12px 0 6px;
        }

        .section img {
          width: 16px;
        }

        .submit {
          width: 100%;
          height: 36px;
          background: #4CAF50;
          border: none;
          border-radius: 6px;
          color: #fff;
          margin-top: 12px;
          font-size: 13px;
        }

        @media (max-width: 1200px) {
          .place-page {
            flex-direction: column;
          }
          
          .left-section, .right-section {
            width: 100%;
          }
          
          .search {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default PlaceOrders;
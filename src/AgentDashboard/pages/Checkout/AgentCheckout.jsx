import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Basmati from "../../../assets/cart/Basmati_Rice.png";
import Wheat from "../../../assets/cart/Wheat_Gains.png";

import BAnk from "../../../assets/checkout/Bank_img.png";
import Farmer from "../../../assets/checkout/Farmer_img.png";
import Platform from "../../../assets/checkout/Platform_img.png";
import Invoice from "../../../assets/checkout/Invoice_img.png";
import Upi from "../../../assets/checkout/Upi_img.png";
import Warehouse from "../../../assets/checkout/Warehouse_img.png";

const AgentCheckout = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-lg-8">
          <h4 className="fw-bold mb-4">Secure CheckOut</h4>

          <div className="card p-4 mb-4">
            <h6 className="fw-bold mb-3">Business Details</h6>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Business Name</label>
                <input className="form-control" placeholder="Enter Business name" />
              </div>

              <div className="col-md-6">
                <label className="form-label">GSTIN</label>
                <input className="form-control" placeholder="Enter GSTIN" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Contact Person</label>
                <input className="form-control" placeholder="Enter Contact Person name" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input className="form-control" placeholder="Enter Phone Number" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Email Address</label>
                <input className="form-control" placeholder="Enter Email Address" />
              </div>
            </div>
          </div>

          <div className="card p-4 mb-4">
            <div className="d-flex justify-content-between mb-3">
              <h6 className="fw-bold">Fulfillment Method</h6>
              <small className="text-muted">
                How would you like to receive this order?
              </small>
            </div>

            <div className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-start">
                <img src={Platform} alt="Platform Logistics" width="36" />
                <div>
                  <h6 className="fw-semibold mb-1">Platform Logistics</h6>
                  <small className="text-muted">
                    Pan-India verified transport with insurance coverage.
                  </small>
                </div>
              </div>
              <input type="radio" checked readOnly />
            </div>

            <div className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-start">
                <img src={Farmer} alt="Farmer Pickup" width="36" />
                <div>
                  <h6 className="fw-semibold mb-1">Farmer Pickup (Take Away)</h6>
                  <small className="text-muted">
                    Pickup directly from Farmer / FPO location.
                  </small>
                </div>
              </div>
              <input type="radio" />
            </div>

            <div className="border rounded p-3 d-flex justify-content-between align-items-center">
              <div className="d-flex gap-3 align-items-start">
                <img src={Warehouse} alt="Warehouse Hold" width="36" />
                <div>
                  <h6 className="fw-semibold mb-1">Warehouse Hold (Advanced)</h6>
                  <small className="text-muted">
                    Store temporarily for consolidation.
                  </small>
                </div>
              </div>
              <input type="radio" />
            </div>
          </div>

          <div className="card p-4 mb-4">
            <h6 className="fw-bold mb-3">Delivery Details</h6>

            <div className="row g-3">
              <div className="col-12">
                <label className="form-label">Warehouse / Godown Name</label>
                <input className="form-control" placeholder="Enter Warehouse / Godown Name" />
              </div>

              <div className="col-12">
                <label className="form-label">Full Address</label>
                <input className="form-control" placeholder="Enter Full Address" />
              </div>

              <div className="col-md-6">
                <label className="form-label">City, State, PIN</label>
                <input className="form-control" placeholder="Enter City, State, PIN" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Phone Number</label>
                <input className="form-control" placeholder="Enter Phone Number" />
              </div>
            </div>
          </div>

          <div className="card p-4">
            <h6 className="fw-bold mb-3">Payment & Quote</h6>

            <div className="row g-3">
              <div className="col-md-4">
                <div className="border rounded p-3 bg-success bg-opacity-10 h-100">
                  <img src={BAnk} alt="Bank Transfer" width="32" className="mb-2" />
                  <h6 className="fw-semibold">Bank Transfer</h6>
                  <small>Invoice shared via email</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="border rounded p-3 h-100">
                  <img src={Upi} alt="UPI Payment" width="32" className="mb-2" />
                  <h6 className="fw-semibold">UPI / Net Banking</h6>
                  <small>Instant payment</small>
                </div>
              </div>

              <div className="col-md-4">
                <div className="border rounded p-3 h-100">
                  <img src={Invoice} alt="Pay on Invoice" width="32" className="mb-2" />
                  <h6 className="fw-semibold">Pay on Invoice</h6>
                  <small>Credit terms apply</small>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card p-4">
            <h5 className="fw-bold mb-4">Order Summary</h5>

            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={Wheat} alt="High-Quality Wheat Grains" width="36" className="rounded-circle" />
              <span>High-Quality Wheat Grains</span>
            </div>

            <div className="d-flex align-items-center gap-2 mb-3">
              <img src={Basmati} alt="Premium Basmati Rice" width="36" className="rounded-circle" />
              <span>Premium Basmati Rice</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹ 71,250</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Processing Fee</span>
              <span>₹ 1,000</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>GST (5%)</span>
              <span>₹ 3,563</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold mb-3">
              <span>Total</span>
              <span>₹ 75,813</span>
            </div>

            <small className="text-muted d-block mb-3">
              Includes all taxes
            </small>

            <button
              className="btn btn-success w-100"
              onClick={() => navigate("/agent/order-placed")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCheckout;
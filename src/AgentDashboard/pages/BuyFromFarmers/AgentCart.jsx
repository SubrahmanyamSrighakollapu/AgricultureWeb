import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Basmati from "../../../assets/cart/Basmati_Rice.png";
import Wheat from "../../../assets/cart/Wheat_Gains.png";
import Check from "../../../assets/cart/Check_img.png";
import Delete from "../../../assets/cart/Delete_img.png";
import Delivery from "../../../assets/cart/Delivery_img.png";
import Security from "../../../assets/cart/Security_img.png";

const AgentCart = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container my-5">
      <div className="row g-4">
        <div className="col-lg-8">
          <h4 className="mb-4">Your Cart</h4>

          <div className="card p-3">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  <th>Product</th>
                  <th>Bag Size</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Basmati}
                        alt="Premium Basmati Rice"
                        width="40"
                        height="40"
                        className="rounded-circle"
                      />
                      <span>Premium Basmati Rice</span>
                    </div>
                  </td>
                  <td>50 kg</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-light btn-sm">-</button>
                      <span>2</span>
                      <button className="btn btn-light btn-sm">+</button>
                    </div>
                  </td>
                  <td>₹40,000</td>
                  <td>
                    <button className="btn btn-light btn-sm">
                      <img src={Delete} alt="Delete" width="18" />
                    </button>
                  </td>
                </tr>

                <tr>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <img
                        src={Wheat}
                        alt="High-Quality Wheat Grains"
                        width="40"
                        height="40"
                        className="rounded-circle"
                      />
                      <span>High-Quality Wheat Grains</span>
                    </div>
                  </td>
                  <td>25 kg</td>
                  <td>
                    <div className="d-flex align-items-center gap-2">
                      <button className="btn btn-light btn-sm">-</button>
                      <span>5</span>
                      <button className="btn btn-light btn-sm">+</button>
                    </div>
                  </td>
                  <td>₹31,250</td>
                  <td>
                    <button className="btn btn-light btn-sm">
                      <img src={Delete} alt="Delete" width="18" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div
            className="d-flex align-items-center mt-4"
            style={{
              width: "480px",
              maxWidth: "100%",
              height: "80px",
              gap: "16px",
              padding: "12px 16px",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              background: "#fff",
            }}
          >
            <input
              type="text"
              className="form-control"
              placeholder="Have a coupon code?"
              style={{ height: "40px" }}
            />

            <button
              className="btn btn-success"
              style={{
                height: "40px",
                padding: "0 24px",
                whiteSpace: "nowrap",
              }}
            >
              Apply
            </button>
          </div>
        </div>
        
        <div className="col-lg-4">
          <div className="card p-4">
            <h5 className="mb-4">Order Summary</h5>

            <div className="d-flex justify-content-between mb-2">
              <span>Subtotal</span>
              <span>₹ 71,250</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>Transport charges (Est.)</span>
              <span>₹ 1,000</span>
            </div>

            <div className="d-flex justify-content-between mb-2">
              <span>GST (5%)</span>
              <span>₹ 3,563</span>
            </div>

            <hr />
            
            <div className="d-flex justify-content-between mb-3 fw-bold">
              <span>Total</span>
              <span>₹ 75,813</span>
            </div>

            <small className="text-muted d-block mb-3">
              Includes all taxes
            </small>

            <button
              className="btn btn-success w-100 mb-3"
              onClick={() => navigate("/agent/checkout")}
            >
              → Proceed to Checkout
            </button>

            <button className="btn btn-light w-100 mb-4">
              Request Quotation
            </button>

            <ul className="list-unstyled">
              <li className="d-flex align-items-center gap-2 mb-3">
                <img src={Security} alt="Secure Payment" width="20" />
                <span>Secure Payment</span>
              </li>
              <li className="d-flex align-items-center gap-2 mb-3">
                <img src={Delivery} alt="Fast Delivery" width="20" />
                <span>Fast Delivery</span>
              </li>
              <li className="d-flex align-items-center gap-2">
                <img src={Check} alt="Quality Check" width="20" />
                <span>Quality Check</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCart;
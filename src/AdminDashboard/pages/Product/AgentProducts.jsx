// AgentProducts.jsx
import React, { useState } from 'react';
import { Download, Search, X, Trash2 } from 'lucide-react';

const sampleOrders = [
  {
    orderId: 'ORD-0278',
    agentName: 'Sarah Johnson',
    totalProducts: 3,
    totalQuantity: '15 Kg',
    totalPrice: '₹80,000',
    status: 'Pending',
    products: [
      { name: 'Premium Wheat', qty: '2 Kg', unitPrice: '₹1000', total: '₹2000', image: 'https://images.unsplash.com/photo-1590092808465-6a7a8c3e8c3f?w=400' },
      { name: 'Organic Long Grain Brown', qty: '1 Kg', unitPrice: '₹1000', total: '₹1000', image: 'https://images.unsplash.com/photo-1590092808465-6a7a8c3e8c3f?w=400' },
      { name: 'Toor Dal', qty: '2 Kg', unitPrice: '₹1000', total: '₹2000', image: 'https://images.unsplash.com/photo-1590092808465-6a7a8c3e8c3f?w=400' }
    ]
  },
  {
    orderId: 'ORD-0278',
    agentName: 'Sarah Johnson',
    totalProducts: 5,
    totalQuantity: '15 Kg',
    totalPrice: '₹80,000',
    status: 'Approved',
    products: [
      { name: 'Premium Wheat', qty: '2 Kg', unitPrice: '₹1000', total: '₹2000', image: 'https://images.unsplash.com/photo-1590092808465-6a7a8c3e8c3f?w=400' }
    ]
  },
  {
    orderId: 'ORD-0278',
    agentName: 'Sarah Johnson',
    totalProducts: 4,
    totalQuantity: '15 Kg',
    totalPrice: '₹80,000',
    status: 'Rejected',
    products: [
      { name: 'Toor Dal', qty: '2 Kg', unitPrice: '₹1000', total: '₹2000', image: 'https://images.unsplash.com/photo-1590092808465-6a7a8c3e8c3f?w=400' }
    ]
  },
  {
    orderId: 'ORD-0278',
    agentName: 'Sarah Johnson',
    totalProducts: 1,
    totalQuantity: '15 Kg',
    totalPrice: '₹80,000',
    status: 'Pending',
    products: [
      { name: 'Premium Wheat', qty: '2 Kg', unitPrice: '₹1000', total: '₹2000', image: 'https://images.unsplash.com/photo-1590092808465-6a7a8c3e8c3f?w=400' }
    ]
  }
];

const AgentProducts = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const openModal = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  return (
    <>
      <style>{`
        .agent-products-page {
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

        .page-subtitle {
          color: #64748b;
          font-size: 15px;
          margin: 0;
        }

        .export-btn {
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
        }

        .export-btn:hover { background: #059669; }

        .filter-bar {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .status-btn {
          padding: 8px 20px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          transition: all 0.15s;
        }

        .status-btn.all     { background: #e5e7eb; color: #374151; }
        .status-btn.pending  { background: #fef3c7; color: #92400e; }
        .status-btn.rejected { background: #fee2e2; color: #991b1b; }
        .status-btn.approved { background: #d1fae5; color: #065f46; }

        .status-btn.active {
          box-shadow: 0 0 0 3px rgba(16,185,129,0.3);
        }

        .search-wrapper {
          flex: 1;
          min-width: 280px;
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

        .table-container {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.08);
          overflow-x: auto;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
          min-width: 900px;
        }

        .table th, .table td {
          padding: 16px 20px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
          font-size: 14px;
        }

        .table th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
          white-space: nowrap;
        }

        .status-badge {
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
        }

        .status-pending  { background: #fef3c7; color: #92400e; }
        .status-approved { background: #d1fae5; color: #065f46; }
        .status-rejected { background: #fee2e2; color: #991b1b; }

        .view-btn {
          color: #3b82f6;
          background: none;
          border: none;
          font-weight: 600;
          cursor: pointer;
        }

        .action-btn {
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 600;
          border: none;
          cursor: pointer;
          margin-left: 8px;
        }

        .approve-btn { background: #10b981; color: white; }
        .reject-btn  { background: #ef4444; color: white; }
        .view-only   { background: #6b7280; color: white; cursor: default; }
        .view-reason { background: #f59e0b; color: white; }

        /* Modal */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          width: 90%;
          max-width: 900px;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 600;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #64748b;
        }

        .modal-body {
          padding: 24px;
        }

        .modal-table {
          width: 100%;
          border-collapse: collapse;
        }

        .modal-table th,
        .modal-table td {
          padding: 14px 16px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-table th {
          background: #f8fafc;
          font-weight: 600;
          color: #475569;
        }

        .product-image {
          width: 60px;
          height: 60px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .remove-btn {
          color: #ef4444;
          background: none;
          border: none;
          cursor: pointer;
        }
      `}</style>

      <div className="agent-products-page">
        <div className="page-header">
          <div>
            <h1 className="page-title">Agent Product</h1>
            <p className="page-subtitle">
              Review and approve products purchased by agents
            </p>
          </div>

          <button className="export-btn">
            <Download size={18} />
            Export
          </button>
        </div>

        <div className="filter-bar">
          <button className="status-btn all active">All</button>
          <button className="status-btn pending">Pending</button>
          <button className="status-btn rejected">Rejected</button>
          <button className="status-btn approved">Approved</button>

          <div className="search-wrapper">
            <Search size={18} className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Search Agent / Order ID"
            />
          </div>
        </div>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Agent Name</th>
                <th>Total Products</th>
                <th>Total Quantity</th>
                <th>Total Price</th>
                <th>Status</th>
                <th>Access</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sampleOrders.map((order, index) => (
                <tr key={index}>
                  <td>{order.orderId}</td>
                  <td>{order.agentName}</td>
                  <td>{order.totalProducts}</td>
                  <td>{order.totalQuantity}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    <span className={`status-badge status-${order.status.toLowerCase()}`}>
                      {order.status}
                    </span>
                  </td>
                  <td>
                    <button 
                      className="view-btn"
                      onClick={() => openModal(order)}
                    >
                      View Product
                    </button>
                  </td>
                  <td>
                    {order.status === 'Pending' && (
                      <>
                        <button className="action-btn approve-btn">Approve</button>
                        <button className="action-btn reject-btn">Reject</button>
                      </>
                    )}
                    {order.status === 'Approved' && (
                      <button className="action-btn view-only">View Only</button>
                    )}
                    {order.status === 'Rejected' && (
                      <button className="action-btn view-reason">View Reason</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal */}
        {selectedOrder && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">
                  Order Details - {selectedOrder.orderId} : {selectedOrder.agentName}
                </h2>
                <button className="close-btn" onClick={closeModal}>
                  <X size={24} />
                </button>
              </div>

              <div className="modal-body">
                <table className="modal-table">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Quantity</th>
                      <th>Unit Price</th>
                      <th>Total</th>
                      <th>Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder.products.map((product, idx) => (
                      <tr key={idx}>
                        <td>
                          <img 
                            src={product.image} 
                            alt={product.name} 
                            className="product-image"
                          />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.qty}</td>
                        <td>{product.unitPrice}</td>
                        <td>{product.total}</td>
                        <td>
                          <button className="remove-btn">
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AgentProducts;
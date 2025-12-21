// src/shop/RiceAndGrain.jsx

import { useState } from 'react';
import Img1 from '../../assets/shop/Img1.jpg';
import Img2 from '../../assets/shop/Img2.jpg';
import Img3 from '../../assets/shop/Img3.jpg';
import Img4 from '../../assets/shop/Img4.jpg';
import Img5 from '../../assets/shop/Img5.jpg';
import Img6 from '../../assets/shop/Img6.jpg';
// Additional images for Load More (reusing some for demo)
import Img7 from '../../assets/shop/Img1.jpg';
import Img8 from '../../assets/shop/Img2.jpg';
import Img9 from '../../assets/shop/Img3.jpg';

const products = [
  { id: 1, img: Img1, title: 'Golden Sella Basmati Rice', type: 'Basmati', quantity: '50kg Jute Bag', status: 'In Stock', price: '80,000', moq: '1 Ton' },
  { id: 2, img: Img2, title: 'Thai Jasmine Rice', type: 'Jasmine', quantity: '25kg PP Bag', status: 'In Stock', price: '80,000', moq: '1 Ton' },
  { id: 3, img: Img3, title: 'Organic Long Grain Brown', type: 'Long Grain', quantity: '1 Ton Bulk', status: 'Out of Stock', price: '90,000', moq: '1 Ton' },
  { id: 4, img: Img4, title: 'Premium Wheat Grain', type: 'Wheat', quantity: '50kg Jute Bag', status: 'In Stock', price: '80,000', moq: '1 Ton' },
  { id: 5, img: Img5, title: 'Parboiled Rice (Non-Sticky)', type: 'Parboiled', quantity: '50kg PP Bag', status: 'In Stock', price: '80,000', moq: '1 Ton' },
  { id: 6, img: Img6, title: 'Golden Sella Basmati Rice', type: 'Basmati', quantity: '50kg PP Bag', status: 'In Stock', price: '80,000', moq: '1 Ton' },
  // Additional products for Load More
  { id: 7, img: Img7, title: 'Extra Long Basmati Rice', type: 'Basmati', quantity: '40kg Bag', status: 'In Stock', price: '85,000', moq: '1 Ton' },
  { id: 8, img: Img8, title: 'Red Rice Premium', type: 'Red Rice', quantity: '25kg Bag', status: 'In Stock', price: '95,000', moq: '1 Ton' },
  { id: 9, img: Img9, title: 'Brown Jasmine Rice', type: 'Jasmine', quantity: '50kg Bag', status: 'Out of Stock', price: '88,000', moq: '1 Ton' },
];

const RiceAndGrain = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [productsFound] = useState(20); // Can be made dynamic later

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 6, products.length));
  const showLess = () => setVisibleCount(6);

  return (
    <div
      className="rice-grain-section"
      style={{ width: '75%', padding: '1rem 1rem' }}
    >
      {/* Top Banner */}
      <div className="top-banner mb-4 px-5 py-4">
        <h2 className="banner-title mb-2">Wholesale Rice & Grains</h2>
        <p className="banner-text mb-0">
          Verified direct-from-farm sourcing for enterprise buyers. Bulk pricing available for orders over 10 tons.
        </p>
      </div>

      {/* Products Found */}
      <div className="mb-4">
        <h3 className="products-found">{productsFound} Products Found</h3>
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {products.slice(0, visibleCount).map(product => (
          <div key={product.id} className="col-md-6 col-lg-4">
            <div className="product-card d-flex flex-column">
              <img
                src={product.img}
                alt={product.title}
                className="card-img-top"
              />
              <div className="card-body px-3 pt-2 pb-4 d-flex flex-column">
                <h4 className="card-title">{product.title}</h4>
                <div className="d-flex justify-content-between text-muted mb-2">
                  <span>{product.type}</span>
                  <span>{product.quantity}</span>
                </div>
                <div className={`status-badge ${product.status === 'In Stock' ? 'in-stock' : 'out-stock'} mb-1`}>
                  {product.status}
                </div>
                <hr className="my-3" />
                <div className="d-flex justify-content-between text-success small mb-2">
                  <span>Price Per Ton</span>
                  <span>MOQ</span>
                </div>
                <div className="d-flex justify-content-between fw-semibold mb-3">
                  <span>₹{product.price}</span>
                  <span>{product.moq}</span>
                </div>
                <button className="btn add-to-cart-btn mt-auto">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <div className="text-center mt-5">
        {visibleCount < products.length ? (
          <button className="btn load-more-btn" onClick={loadMore}>
            Load More Products
          </button>
        ) : (
          <button className="btn load-more-btn" onClick={showLess}>
            Show Less
          </button>
        )}
      </div>

      {/* Internal CSS for custom styles */}
      <style jsx>{`
        .top-banner {
          width: 100%;
          min-height: 6rem;
          background: #FCFCFA;
          border: 0.4px solid #717171;
          border-radius: 18px;
          margin: 0 auto;
        }

        .banner-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 2.2rem;
          line-height: 2.8rem;
          color: #000000;
        }

        .banner-text {
        width: 70%;
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 1.375rem;
          color: #4BAF47;
        }

        .products-found {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 24px;
          color: #000000;
        }

        .product-card {
          max-width: 20rem;
          margin: 0 auto;
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          transition: transform 0.2s;
        }

        .product-card:hover {
          transform: translateY(-4px);
        }

        .card-img-top {
          width: 100%;
          height: 254px;
          object-fit: cover;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }

        .card-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 500;
          font-size: 20px;
          line-height: 28px;
          color: #000000;
          margin-bottom: 0.5rem;
        }

        .status-badge {
          align-self: flex-start;
          padding: 0.25rem 0.75rem;
          border-radius: 4px;
          font-size: 14px;
          font-weight: 500;
        }

        .in-stock {
          background: #B4FFC780;
          border: 0.4px solid #4BAF47;
          color: #0A6806;
        }

        .out-stock {
          background: #FFD4B4;
          border: 0.4px solid #FF6600;
          color: #CC0000;
        }

        .add-to-cart-btn {
          background: #4BAF47;
          color: white;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          border-radius: 8px;
          padding: 0.5rem;
        }

        .load-more-btn {
          width: 379px;
          max-width: 100%;
          height: 4rem;
          background: white;
          border: 0.5px solid #BCBCBC;
          border-radius: 50px;
          box-shadow: 0px 1px 4px 0px #00000040;
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 18px;
        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .product-card {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default RiceAndGrain;
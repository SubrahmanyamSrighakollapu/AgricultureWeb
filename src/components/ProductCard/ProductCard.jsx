// src/components/ProductCard/ProductCard.jsx
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import WishlistIcon from '../../assets/shop/wishlist.png';
import { useCart } from '../../context/CartContext';
import { getImageUrl } from '../../utils/imageLoader';

const ProductCard = ({ product, isAgentView = false }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleCardClick = () => {
    // Navigate based on context
    if (isAgentView) {
      navigate(`/agent/agent-item-details/${product.id}`);
    } else {
      navigate(`/details/${product.id}`);
    }
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    
    if (isAgentView) {
      // For agent view, navigate to details page instead
      navigate(`/agent/agent-item-details/${product.id}`);
    } else {
      // For normal shop, add to cart directly
      addToCart(product, 1);
    }
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    // TODO: wire up wishlist behavior
    console.log('Added to wishlist:', product.id);
  };

  const getImagePath = (imgName) => {
    const url = getImageUrl(imgName);
    return url || '';
  }; 

  return (
    <div 
      className="product-card h-100 d-flex flex-column" 
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-image-wrap" style={{ position: 'relative', overflow: 'visible' }}>
        <img
          src={getImagePath(product.img)}
          alt={product.title}
          className="card-img-top"
          style={{
            width: '100%',
            height: '254px',
            objectFit: 'cover',
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            display: 'block'
          }}
        />

        {product.agent && (
          <img
            src={getImagePath(product.agent)}
            alt="Agent"
            style={{
              position: 'absolute',
              bottom: '12px',
              left: '12px',
              width: '4rem',
              height: '4rem',
              borderRadius: '8px',
              border: '3px solid white',
              objectFit: 'cover',
              boxShadow: '0px 2px 8px rgba(0,0,0,0.2)',
              zIndex: 9999,
              pointerEvents: 'auto'
            }}
          />
        )}

        <img
          src={WishlistIcon}
          alt="Wishlist"
          onClick={handleWishlistClick}
          style={{
            position: 'absolute',
            top: '12px',
            right: '12px',
            width: '46px',
            height: '46px',
            background: 'white',
            padding: '6px',
            borderRadius: '50%',
            boxShadow: '0px 2px 6px rgba(0,0,0,0.12)',
            zIndex: 9999,
            cursor: 'pointer',
            pointerEvents: 'auto'
          }}
        />
      </div>
      <div className="card-body px-3 pt-2 pb-4 d-flex flex-column">
        <p className="text-dark mb-1 fw-normal">{product.title}</p>
        <div className="d-flex justify-content-between text-muted mb-2 small">
          <span>{product.type}</span>
          <span>{product.quantity}</span>
        </div>
        <div 
          className={`status-badge mb-1 ${product.status === 'In Stock' ? 'in-stock' : 'out-stock'}`}
          style={{
            alignSelf: 'flex-start',
            padding: '0.25rem 0.75rem',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
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
        <button 
          className="btn add-to-cart-btn mt-auto"
          onClick={handleAddToCart}
          style={{
            background: '#4BAF47',
            color: 'white',
            fontWeight: '600',
            borderRadius: '8px',
            padding: '0.5rem',
            border: 'none'
          }}
        >
          {isAgentView ? 'View Details' : 'Add To Cart'}
        </button>
      </div>

      <style>{`
        .product-card {
          position: relative;
          z-index: 1;
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

        .add-to-cart-btn:hover {
          background: #3d9639 !important;
        }
      `}</style>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    quantity: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    moq: PropTypes.string.isRequired,
  }).isRequired,
  isAgentView: PropTypes.bool,
};

export default ProductCard;
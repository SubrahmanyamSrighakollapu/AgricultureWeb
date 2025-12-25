import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductCard from '../../../components/ProductCard/ProductCard';
import productsData from '../../../data/products.json';

const AgentRiceAndGrains = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const products = productsData.products;
  const navigate = useNavigate();

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 6, products.length));
  const showLess = () => setVisibleCount(6);



  const handleCardClick = (productId) => {
  navigate(`/agent/agent-item-details/${productId}`);  // This is now correct after route fix
};

  const handleWishlistClick = (e, productId) => {
    e.stopPropagation();
    // Add wishlist functionality here
    console.log('Added to wishlist:', productId);
  };

  return (
    <div className="rice-grain-section" style={{ width: '75%', padding: '1rem' }}>
      {/* Top Banner */}
      <div className="banner-card px-4 py5">
        <h2 className="mb-2">Wholesale Rice & Grains</h2>
        <p className="green mb-0 col-8">
          Verified direct-from-farm sourcing for enterprise buyers. Bulk pricing available for orders over 10 tons.
        </p>
      </div>

      {/* Products Found */}
      <div className="mb-4">
        <h3 
          className="fw-semibold"
          style={{
            fontSize: '24px',
            color: '#000000'
          }}
        >
          {products.length} Products Found
        </h3>
      </div>

      {/* Product Grid */}
      <div className="row g-4 justify-content-center">
        {products.slice(0, visibleCount).map(product => (
          <div key={product.id} className="col-12 col-sm-6 col-lg-4">
            <div 
              className="agent-product-card-wrapper" 
              style={{ position: 'relative', cursor: 'pointer', overflow: 'visible' }}
            >
              {/* Product Card */}
              <ProductCard product={product} isAgentView={true} />
            </div>
          </div>
        ))}
      </div>

      {/* Load More / Show Less Button */}
      <div className="text-center mt-5">
        {visibleCount < products.length ? (
          <button 
            className="btn load-more-btn"
            onClick={loadMore}
            style={{
              width: '379px',
              maxWidth: '100%',
              height: '4rem',
              background: 'white',
              border: '0.5px solid #BCBCBC',
              borderRadius: '50px',
              boxShadow: '0px 1px 4px 0px #00000040',
              fontWeight: '600',
              fontSize: '18px'
            }}
          >
            Load More Products
          </button>
        ) : (
          <button 
            className="btn load-more-btn"
            onClick={showLess}
            style={{
              width: '379px',
              maxWidth: '100%',
              height: '4rem',
              background: 'white',
              border: '0.5px solid #BCBCBC',
              borderRadius: '50px',
              boxShadow: '0px 1px 4px 0px #00000040',
              fontWeight: '600',
              fontSize: '18px'
            }}
          >
            Show Less
          </button>
        )}
      </div>

      <style jsx>{`
        @media (max-width: 992px) {
          .rice-grain-section {
            width: 100% !important;
            padding: 1rem !important;
          }
        }

        .agent-product-card-wrapper:hover {
          transform: translateY(-5px);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default AgentRiceAndGrains;
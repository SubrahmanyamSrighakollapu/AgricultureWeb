// src/pages/shop/OfferCard.jsx

import offerImg from '../../assets/shop/offerCardImg.png';
import DiscoverMoreButton from '../../components/DiscoverMoreButton';

const OfferCard = () => {
  return (
    <section className="offer-section px-5 py-3" style={{ background: '#EAFCEA', minHeight: '10rem', marginTop: '-2rem', }}>
      <div className="container">
        
        <div
          className="offer-card d-flex align-items-center gap-3 mx-auto"
          style={{
            width: '93.25rem',
            minHeight: '20.125rem',
            gap: '0rem',
            padding: '3rem',
            borderRadius: '0.5rem',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* Left: Text (title, paragraph, button) */}
          <div className="d-flex flex-column justify-content-center" style={{ width: '45%', textAlign: 'left' }}>
            <h3
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 700,
                fontSize: '3rem',
                lineHeight: '4.25rem',
                color: '#000000',
                margin: 0,
              }}
            >
              Premium Bulk Grains for Your Business
            </h3>

            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontStyle: 'normal',
                fontSize: '1.375rem', // 28px
                lineHeight: '1.875rem', // 30px
                color: '#565656',
                marginTop: '1.25rem',
                marginBottom: '1.5rem',
                maxWidth: '33rem',
              }}
            >
              Direct from farms, quality assured, reliable supply across India. Sourcing bulk rice and dals has never been easier.
            </p>

            <div>
              <DiscoverMoreButton text="Explore All Products →" />
            </div>
          </div>

          {/* Right: Image */}
          <div className="d-flex justify-content-center" style={{ width: '45%' }}>
            <img
              src={offerImg}
              alt="Premium Bulk Grains"
              style={{
                width: '35.0625rem', // 657px
                height: '18.5625rem', // 377px
                borderRadius: '2.5rem',
                borderBottom: '0.3125rem solid #0A6806',
                boxShadow: '0.25rem 0.25rem 0.5rem rgba(0,0,0,0.25)',
                objectFit: 'cover',
              }}
            />
          </div>
        </div>
      </div>

    
      <style>{`
        /* Ensure primary sizing uses rems and adapts */
        .offer-section { padding-bottom: 4rem; }

        @media (max-width: 1200px) {
          /* remove left offset on narrower screens and make card full-width */
          .offer-card { width: 100% !important; margin-left: 0 !important; height: auto !important; padding: 2rem !important; }
          .offer-card > div:first-child { width: 100% !important; display: flex; justify-content: center; }
          .offer-card img { width: 36rem !important; height: 21rem !important; }
          h3 { font-size: 3rem !important; line-height: 3.5rem !important; }
          p { font-size: 1.25rem !important; line-height: 1.75rem !important; }
        }

        @media (max-width: 768px) {
          .offer-card { padding: 1.5rem !important; gap: 1rem !important; }
          .offer-card img { width: 100% !important; height: auto !important; border-radius: 1.5rem !important; }
          h3 { font-size: 2rem !important; line-height: 2.4rem !important; }
          p { font-size: 1rem !important; line-height: 1.5rem !important; max-width: 100% !important; }
          .offer-section { padding-top: 3rem; padding-bottom: 3rem; }
        }

        @media (max-width: 480px) {
          h3 { font-size: 1.5rem !important; line-height: 1.9rem !important; }
          p { font-size: 0.95rem !important; line-height: 1.4rem !important; }
        }
      `}</style>
    </section>
  );
};

export default OfferCard;
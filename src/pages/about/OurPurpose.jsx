// src/about/OurPurpose.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import icon1 from '../../assets/about/Icon1.png';
import icon2 from '../../assets/about/Icon2.png';

const OurPurpose = () => {
  const purposes = [
    {
      icon: icon1,
      title: 'Our Mission',
      text: 'To create a transparent and sustainable agriculture ecosystem where everyone thrives. We aim to eliminate opaque middlemen and foster direct relationships built on trust and verified quality.'
    },
    {
      icon: icon2,
      title: 'Our Vision',
      text: 'To become the world\'s most trusted organic trade platform connecting verified farmers and markets. We envision a future where organic sourcing is effortless, ethical, and universally accessible.'
    }
  ];

  return (
    <section className="w-100 position-relative mt-5 text-center" style={{
      padding: '4rem 8rem',
      backgroundColor: '#F8F7F0CC'
    }}>
      <h2 className="fw-semibold m-0 mb-5" style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '2.5rem',
        lineHeight: '1.9rem',
        color: '#1F1E17'
      }}>
        OUR PURPOSE
      </h2>

      <div className="d-flex flex-wrap justify-content-center align-items-start mx-auto purpose-cards-wrapper" style={{
        gap: '3.75rem',
        maxWidth: '74rem'
      }}>
        {purposes.map((purpose, index) => (
          <div key={index} className="bg-white rounded shadow d-flex flex-column align-items-start p-4 purpose-card" style={{
            width: '35.0625rem',
            maxWidth: '100%',
            height: '20.8125rem',
            boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.25)',
            boxSizing: 'border-box'
          }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: '#4BAF4747'
            }}>
              <img 
                src={purpose.icon} 
                alt={`${purpose.title} Icon`} 
                className="rounded-circle"
                style={{
                  width: '1.75rem',
                  height: '3rem',
                  objectFit: 'contain'
                }}
              />
            </div>

            <h3 className="fw-semibold m-0 mb-3" style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.375rem',
              lineHeight: '1.625rem',
              color: '#1F1E17'
            }}>
              {purpose.title}
            </h3>

            <p className="fw-light m-0 text-start" style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.125rem',
              lineHeight: '2.25rem',
              color: '#878680'
            }}>
              {purpose.text}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .purpose-cards-wrapper {
            gap: 2.5rem !important;
          }
          .purpose-card {
            width: 32rem !important;
          }
        }

        @media (max-width: 992px) {
          .purpose-cards-wrapper {
            flex-direction: column;
            align-items: center;
          }
          .purpose-card {
            width: 100% !important;
            max-width: 35rem !important;
            height: auto !important;
            padding: 2rem 1.5rem !important;
          }
          h2 {
            font-size: 2.25rem !important;
            line-height: 3.2rem !important;
          }
        }

        @media (max-width: 768px) {
          section {
            padding: 5rem 1.5rem 6rem !important;
          }
          h2 {
            font-size: 2rem !important;
            line-height: 2.8rem !important;
          }
          h3 {
            font-size: 1.25rem !important;
          }
          .purpose-card p {
            font-size: 1rem !important;
            line-height: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 4rem 1rem 5rem !important;
          }
          h2 {
            font-size: 1.75rem !important;
            line-height: 2.4rem !important;
          }
          .rounded-circle {
            width: 3rem !important;
            height: 3rem !important;
          }
          .rounded-circle img {
            width: 1.5rem !important;
            height: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
};

// Export empty styles object for compatibility
export const styles = {};

export default OurPurpose;
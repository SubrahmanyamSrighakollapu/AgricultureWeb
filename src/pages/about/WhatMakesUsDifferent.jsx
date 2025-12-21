// src/about/WhatMakesUsDifferent.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import icon3 from '../../assets/about/Icon3.png';
import icon4 from '../../assets/about/Icon4.png';
import icon5 from '../../assets/about/Icon5.png';
import icon6 from '../../assets/about/Icon6.png';
import icon7 from '../../assets/about/Icon7.png';

const WhatMakesUsDifferent = () => {
  const features = [
    {
      icon: icon3,
      title: 'Direct Farmer Partnerships',
      text: 'Sourcing directly from verified growers without hidden layers, ensuring fair pricing and better farmer income.',
    },
    {
      icon: icon4,
      title: 'Bulk & Retail Friendly',
      text: 'Flexible purchasing options tailored for businesses of all sizes from agents to large retailers.',
    },
    {
      icon: icon5,
      title: 'End-to-End Traceability',
      text: 'Full visibility from farm to shelf through transparent records and digital tracking.',
    },
    {
      icon: icon6,
      title: 'Agent-Centric Model',
      text: 'Empowering local agents with tools to source, trade, and scale efficiently.',
    },
    {
      icon: icon7,
      title: 'Sustainable Agriculture',
      text: 'Commitment to soil health, eco-friendly farming, and long-term sustainability.',
    },
  ];

  return (
    <section className="w-100 position-relative mt-5 bg-white text-center py-5" style={{ padding: '5rem 2rem' }}>
      <h2 className="fw-semibold m-0 mb-5" style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '2.5rem',
        lineHeight: '1.9rem',
        color: '#1F1E17'
      }}>
        WHAT MAKES US DIFFERENT
      </h2>

      <div className="d-flex flex-wrap justify-content-center mx-auto different-cards-wrapper" style={{
        gap: '1rem',
        maxWidth: '90rem'
      }}>
        {features.map((feature, index) => (
          <div key={index} className="d-flex flex-column align-items-center rounded p-4 different-card" style={{
            width: '15.5rem',
            height: '24.6875rem',
            backgroundColor: '#EFFFF0',
            borderRadius: '0.5rem',
            padding: '2.5rem 1.5rem',
            boxSizing: 'border-box'
          }}>
            <div className="rounded-circle d-flex align-items-center justify-content-center mb-4" style={{
              width: '3rem',
              height: '3rem',
              backgroundColor: '#4BAF4747'
            }}>
              <img 
                src={feature.icon} 
                alt={feature.title} 
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
              {feature.title}
            </h3>

            <p className="fw-light m-0 text-start mt-3 flex-grow-1" style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.125rem',
              lineHeight: '2.25rem',
              color: '#878680'
            }}>
              {feature.text}
            </p>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .different-cards-wrapper {
            gap: 1.5rem !important;
          }
          .different-card {
            width: 17rem !important;
          }
        }

        @media (max-width: 992px) {
          .different-cards-wrapper {
            gap: 2rem !important;
          }
          .different-card {
            width: 100% !important;
            max-width: 22rem !important;
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
          .different-card {
            padding: 2rem 1rem !important;
          }
          h2 {
            font-size: 2rem !important;
            line-height: 2.8rem !important;
          }
          h3 {
            font-size: 1.25rem !important;
          }
          .different-card p {
            font-size: 1rem !important;
            line-height: 2rem !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 4rem 1rem 5rem !important;
          }
          .different-card {
            width: 100% !important;
            max-width: 18rem !important;
            height: auto !important;
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

export default WhatMakesUsDifferent;
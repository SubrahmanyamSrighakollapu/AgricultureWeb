// src/about/OurTestimonials.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import bgImg from '../../assets/about/bgImg.png';
import iconOverlay from '../../assets/about/Icon8.png';
import line from '../../assets/about/line.png';
import person1 from '../../assets/about/person1.png';
import person2 from '../../assets/about/person2.png';

const OurTestimonials = () => {
  const testimonials = [
    {
      image: person1,
      text: 'There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.',
      name: 'Bonnie Tolbet',
      role: 'Customer',
    },
    {
      image: person2,
      text: 'There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.',
      name: 'Alexander Harvard',
      role: 'Customer',
    },
  ];

  return (
    <section className="w-100 position-relative mt-5 text-center testimonials-section" style={{
      padding: '3rem 8rem 5rem 8rem',
      backgroundImage: `url(${bgImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      <p className="fw-medium m-0 mb-3" style={{
        fontFamily: 'Inter, sans-serif',
        fontSize: '1.5rem',
        lineHeight: '2.25rem',
        color: '#4BAF47'
      }}>
        Our Testimonials
      </p>

      <h2 className="fw-semibold m-0 mb-5" style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '2.5rem',
        lineHeight: '1.9rem',
        color: '#1F1E17'
      }}>
        What They Say
      </h2>

      <div className="d-flex flex-wrap justify-content-center mx-auto testimonial-cards-wrapper" style={{
        gap: '6rem',
        maxWidth: '73.125rem'
      }}>
        {testimonials.map((item, index) => (
          <div key={index} className="position-relative d-inline-block testimonial-card-wrapper">
            {/* Person Image Wrapper */}
            <div className="position-absolute rounded shadow testimonial-image-wrapper" style={{
              top: '3.1875rem',
              left: '-4.375rem',
              width: '8.75rem',
              height: '11.4375rem',
              overflow: 'hidden',
              zIndex: 10
            }}>
              <img 
                src={item.image} 
                alt={item.name} 
                className="w-100 h-100"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Overlay Icon */}
            <img
              src={iconOverlay}
              alt="Decorative icon"
              className="position-absolute testimonial-overlay-icon"
              style={{
                top: 'calc(3.1875rem + 5.71875rem)',
                left: 'calc(-4.375rem + 9.3rem - 2rem)',
                width: '3rem',
                height: '3rem',
                transform: 'translateY(-50%)',
                objectFit: 'contain',
                pointerEvents: 'none',
                zIndex: 15
              }}
            />

            {/* Card */}
            <div className="position-relative bg-white rounded shadow testimonial-card" style={{
              width: '28.25rem',
              height: '17.8125rem',
              borderRadius: '0.625rem',
              padding: '2rem 2.5rem 3rem 7.5rem',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
              boxSizing: 'border-box',
              overflow: 'visible',
              zIndex: 1
            }}>
              <div className="h-100 d-flex flex-column justify-content-between">
                <p className="fw-light text-start m-0" style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '1.125rem',
                  lineHeight: '1.8rem',
                  color: '#878680'
                }}>
                  {item.text}
                </p>

                <div className="d-flex align-items-center justify-content-between mt-4">
                  <div className="d-flex rating-lines" style={{ gap: '0.1rem' }}>
                    <img src={line} alt="Rating" style={{ width: '1rem', height: 'auto', objectFit: 'contain' }} />
                    <img src={line} alt="Rating" style={{ width: '1rem', height: 'auto', objectFit: 'contain' }} />
                    <img src={line} alt="Rating" style={{ width: '1rem', height: 'auto', objectFit: 'contain' }} />
                    <img src={line} alt="Rating" style={{ width: '1rem', height: 'auto', objectFit: 'contain' }} />
                    <img src={line} alt="Rating" style={{ width: '1rem', height: 'auto', objectFit: 'contain' }} />
                  </div>

                  <div className="text-end">
                    <h3 className="fw-semibold m-0 mb-1" style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1.25rem',
                      lineHeight: '1rem',
                      color: '#1F1E17'
                    }}>
                      {item.name}
                    </h3>
                    <p className="fw-medium m-0" style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '1rem',
                      lineHeight: '1.625rem',
                      color: '#878680'
                    }}>
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        /* Responsive adjustments */
        @media (max-width: 1200px) {
          .testimonial-cards-wrapper {
            gap: 3rem !important;
          }
          .testimonial-card {
            width: 30rem !important;
          }
        }

        @media (max-width: 992px) {
          .testimonial-cards-wrapper {
            flex-direction: column;
            align-items: center;
          }
          .testimonial-card {
            width: 100% !important;
            max-width: 35rem !important;
            height: auto !important;
            padding: 8rem 2rem 2rem 2rem !important;
          }
          .testimonial-image-wrapper {
            left: 50% !important;
            top: -5rem !important;
            transform: translateX(-50%) !important;
          }
          .testimonial-overlay-icon {
            left: 50% !important;
            top: -1rem !important;
            transform: translateX(-50%) !important;
          }
          h2 {
            font-size: 2.25rem !important;
            line-height: 3.2rem !important;
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 5rem 1.5rem 6rem !important;
          }
          .testimonial-image-wrapper {
            width: 7.5rem !important;
            height: 9.375rem !important;
            top: -4.5rem !important;
          }
          .testimonial-card p {
            font-size: 1rem !important;
          }
          .testimonial-overlay-icon {
            width: 3rem !important;
            height: 3rem !important;
          }
          h2 {
            font-size: 2rem !important;
            line-height: 2.8rem !important;
          }
          .fw-medium:first-child {
            font-size: 1.25rem !important;
          }
        }

        @media (max-width: 480px) {
          .testimonials-section {
            padding: 4rem 1rem 5rem !important;
          }
          .testimonial-image-wrapper {
            width: 6.25rem !important;
            height: 8.125rem !important;
            top: -4rem !important;
          }
          h3 {
            font-size: 1.125rem !important;
          }
          .text-end p {
            font-size: 0.9375rem !important;
          }
          .testimonial-overlay-icon {
            width: 2.5rem !important;
            height: 2.5rem !important;
          }
          h2 {
            font-size: 1.75rem !important;
            line-height: 2.4rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default OurTestimonials;
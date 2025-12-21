// src/about/GetToKnowUs.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import cardImg from '../../assets/about/CardImg.png';
import pointImg from '../../assets/about/PointImg.png';
import DiscoverMoreButton from '../../components/DiscoverMoreButton';

const GetToKnowUs = () => {
  return (
    <div className="w-100 bg-white py-5 px-4 d-flex justify-content-center my-5" style={{ padding: '6rem 10rem' }}>
      <div className="row align-items-center mx-auto get-to-know-wrapper" style={{ gap: '1rem' }}>
        {/* Left Section - Image */}
        <div className="col-lg-6">
          <img
            src={cardImg}
            alt="Get to Know Us"
            className="w-100 d-block"
            style={{
              maxWidth: '44rem',
              height: '33rem',
              paddingLeft: '6rem',
              borderRadius: '0.5rem',
              objectFit: 'cover',
              
              
            }}
          />
        </div>

        {/* Right Section - Content */}
        <div className="col-lg-5 d-flex flex-column gap-2">
          <p className="m-0 fw-medium" style={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '1.5rem',
            color: '#49A760'
          }}>
            Get to Know Us
          </p>

          <h2 className="m-0 fw-semibold" style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '2.5rem',
            color: '#1F1E17'
          }}>
            Bridging the gap between rural roots and global markets
          </h2>

          <p className="m-0 fw-medium" style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '1rem',
            lineHeight: '1.875rem',
            color: '#878680'
          }}>
            Originating from a desire to solve inefficiencies in the traditional supply chain, Organic Agri B2B was founded to empower stakeholders through transparency. We saw that farmers weren't getting fair value, and buyers struggled with authenticity verification.
          </p>

          {/* Benefit Item */}
          <div className="d-flex gap-3 align-items-start mt-3">
            <img
              src={pointImg}
              alt="Point"
              className="flex-shrink-0"
              style={{ width: '1.5rem', height: '1.5rem' }}
            />
            <p className="m-0 fw-medium" style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 600,
              fontSize: '1rem',
              lineHeight: '1.8rem',
              color: '#1F1E17'
            }}>
              Today, our platform serves as a digital bridge—ensuring fair trade practices and full traceability from seed to shelf.
            </p>
          </div>

          {/* Button */}
          <div className="mt-2">
            <DiscoverMoreButton
              text="Discover More"
              href="/about"
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .get-to-know-wrapper {
          max-width: 100rem;
          width: 100%;
        }

        /* Large tablets and below */
        @media (max-width: 1024px) {
          .w-100.bg-white {
            padding: 6rem 2rem 5rem !important;
          }
          .get-to-know-wrapper {
            flex-direction: column;
          }
          .row.g-5 {
            gap: 3rem !important;
          }
          .col-lg-6.d-flex.flex-column.gap-2 {
            gap: 1.25rem !important;
          }
        }

        /* Tablets */
        @media (max-width: 768px) {
          .w-100.bg-white {
            padding: 5rem 1.5rem !important;
          }
          h2 {
            font-size: 2rem !important;
            line-height: 2.8rem !important;
          }
          .col-lg-6 p:first-child {
            font-size: 1.25rem !important;
          }
          .col-lg-6 img {
            height: auto !important;
          }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .w-100.bg-white {
            padding: 4rem 1rem !important;
          }
          h2 {
            font-size: 1.75rem !important;
            line-height: 2.4rem !important;
          }
          .row.g-5 {
            gap: 2rem !important;
          }
          .col-lg-6 img {
            height: auto !important;
          }
        }
      `}</style>
    </div>
  );
};

export default GetToKnowUs;
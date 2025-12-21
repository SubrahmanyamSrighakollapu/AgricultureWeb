// src/services/Education.jsx

import img2 from '../../assets/services/Img2.jpg';
import img3 from '../../assets/services/Img3.jpg';
import img4 from '../../assets/services/Img4.jpg';

const Education = () => {
  return (
    <section className="py-5 py-lg-7">
      <div className="container">
        {/* Title and Paragraph Section */}
        <div className="row justify-content-center text-center align-items-center mb-5 mb-lg-7">
          <div className="col-lg-10 col-xl-8">
            <h2 className="mb-3">EDUCATION THAT EMPOWERS</h2>
            <p className="lead">
              Bridging the knowledge gap with modern farming techniques.
            </p>
          </div>
        </div>

        {/* 3 Cards Row */}
        <div className="row g-4 g-xl-5 justify-content-center">
          {/* Card 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="education-card h-100 d-flex flex-column">
              <img src={img2} alt="Urban Agri Academy Access" className="card-img-top" />
              <div className="p-4 flex-grow-1 d-flex flex-column">
                <h3 className="card-title">Urban Agri Academy Access</h3>
                <p className="card-text flex-grow-1">
                  Comprehensive courses on sustainable urban farming.
                </p>
                <a href="#" className="mt-auto learn-more-link">
                  Learn more →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="education-card h-100 d-flex flex-column">
              <img src={img3} alt="Learning Support" className="card-img-top" />
              <div className="p-4 flex-grow-1 d-flex flex-column">
                <h3 className="card-title">Learning Support</h3>
                <p className="card-text flex-grow-1">
                  On-demand video tutorials and expert webinars.
                </p>
                <a href="#" className="mt-auto learn-more-link">
                  View Library →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="education-card h-100 d-flex flex-column">
              <img src={img4} alt="Organic Farming Practices" className="card-img-top" />
              <div className="p-4 flex-grow-1 d-flex flex-column">
                <h3 className="card-title">Organic Farming Practices</h3>
                <p className="card-text flex-grow-1">
                  Certification guides and soil health management.
                </p>
                <a href="#" className="mt-auto learn-more-link">
                  Start Course →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <style jsx>{`
        /* Title */
        h2 {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          line-height: 30px;
          color: #000000;
        }

        /* Main paragraph */
        .lead {
          font-family: 'Manrope', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 30px;
          color: #565656;
        }

        /* Card container */
        .education-card {
          width: 25rem;
          max-width: 100%;
          background: #FFFFFF;
          border-radius: 10px;
          border: 0.5px solid #959595;
          box-shadow: 2px 2px 4px 0px #00000040;
        }

        /* Card image */
        .education-card .card-img-top {
          width: 22rem;
          max-width: 100%;
          height: 198px;
          object-fit: cover;
          border-radius: 8px;
          margin: 24px auto 0;
          display: block;
          background-color: #D9D9D9;
        }

        /* Card title */
        .card-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 1.325rem;
          line-height: 30px;
          color: #000000;
          margin-bottom: 0.5rem;
        }

        /* Card text */
        .card-text {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: clamp(1rem, 2vw, 1.1rem);
          line-height: 30px;
          color: #565656;
          margin-bottom: 1rem;
        }

        /* Learn more link/button */
        .learn-more-link {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: 1rem;
          line-height: 30px;
          color: #0A6806;
          text-decoration: none;
          align-self: flex-start;
        }

        .learn-more-link:hover {
          text-decoration: underline;
        }

        /* Responsive adjustment: stack cards on smaller screens */
        @media (max-width: 992px) {
          .education-card {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </section>
  );
};

export default Education;
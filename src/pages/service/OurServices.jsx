// src/services/OurServices.jsx

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Icon1 from '../../assets/services/Icon1.png';
import Icon2 from '../../assets/services/Icon2.png';
import Icon3 from '../../assets/services/Icon3.png';
import Icon4 from '../../assets/services/Icon4.png';

const OurServices = () => {
  const servicesData = [
    {
      id: 1,
      icon: Icon1,
      title: 'Farmer Credit Support',
      description: 'Flexible financial options for crop cycles.',
    },
    {
      id: 2,
      icon: Icon2,
      title: 'Equipment Access',
      description: 'Rental and purchase of essential tools.',
    },
    {
      id: 3,
      icon: Icon3,
      title: 'Pest & Crop Advisory',
      description: 'Expert advice on crop health and protection.',
    },
    {
      id: 4,
      icon: Icon4,
      title: 'Education & Training',
      description: 'Improve farming practices through learning.',
    },
  ];

  return (
    <div className="bg-white py-5">
      <div className="container">
        {/* Header Section */}
        <div className="text-center mb-5">
          <h2 className="services-title mb-3">OUR CORE SERVICES</h2>
          <p className="services-subtitle">
            Designed to support farmers from soil to sale.
          </p>
        </div>

        {/* Cards Section */}
        <div className="row g-4 justify-content-center">
          {servicesData.map((service) => (
            <div key={service.id} className="col-12 col-sm-6 col-lg-3">
              <div className="service-card h-100 p-4">
                {/* Icon with Background */}
                <div className="icon-wrapper mb-3">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="service-icon"
                  />
                </div>

                {/* Title */}
                <h3 className="card-title mb-3">{service.title}</h3>

                {/* Description */}
                <p className="card-description mb-0">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          line-height: 1;
          color: #000000;
        }

        .services-subtitle {
          font-family: 'Manrope', sans-serif;
          font-weight: 500;
          font-size: clamp(1rem, 2vw, 1.25rem);
          line-height: 1;
          color: #565656;
        }

        .service-card {
          background-color: #EFFFF0;
          margin: 0 auto;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-0.3125rem);
          box-shadow: 0 0.625rem 1.5625rem rgba(0, 0, 0, 0.1);
        }

        .icon-wrapper {
          width: 4.375rem;
          height: 4.375rem;
          background-color: #4BAF474D;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .service-icon {
          width: 2.25rem;
          height: 2.25rem;
        }

        .card-title {
          font-family: 'Manrope', sans-serif;
          font-weight: 600;
          font-size: clamp(1.125rem, 2vw, 1.25rem);
          line-height: 1.6;
          color: #000000;
        }

        .card-description {
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: clamp(1rem, 1.5vw, 1.125rem);
          line-height: 1.4;
          color: #565656;
        }
      `}</style>
    </div>
  );
};

export default OurServices;
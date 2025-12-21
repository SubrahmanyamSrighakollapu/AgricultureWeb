// src/components/Top.jsx

import React from 'react';
import topBg from '../assets/about/TopImg.png';

const Top = ({ title, subtitle }) => {
  return (
    <section
      className="w-100 d-flex align-items-center justify-content-center text-center text-white"
      style={{
        backgroundImage: `url(${topBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '20.390625rem',
        marginTop: '-2.839rem',
      }}
    >
      <div className="container">
        {/* Title */}
        <h1
          className="fw-semibold mb-3 display-4 display-xl-3 display-xxl-2"
          style={{
            fontFamily: "'Manrope', sans-serif",
            textShadow: '0 2px 10px rgba(0, 0, 0, 0.6)',
          }}
        >
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p
            className="text-uppercase small mb-0"
            style={{
              fontFamily: "'Manrope', sans-serif",
              letterSpacing: '1.4px',
              opacity: 0.7,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default Top;
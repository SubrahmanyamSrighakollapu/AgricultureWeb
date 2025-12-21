// src/HomePages/ExploreProjects.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import img1 from '../../assets/MainPage/ExploreProjects/Img1.png';
import img2 from '../../assets/MainPage/ExploreProjects/Img2.png';
import img3 from '../../assets/MainPage/ExploreProjects/Img3.jpg';
import img4 from '../../assets/MainPage/ExploreProjects/Img4.png';

const ExploreProjects = () => {
  const projects = [
    { img: img1, title: 'Easy Harvesting' },
    { img: img2, title: 'Agriculture Farming' },
    { img: img3, title: 'Ecological Farming' },
    { img: img4, title: 'Organic Solutions' }
  ];

  return (
    <div className="w-100 bg-white py-5 px-4 text-center">
      {/* Header Section */}
      <div className="mb-4">
        <p className="m-0 mb-2" style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 500,
          fontSize: '1.5rem',
          color: '#49A760'
        }}>
          Recently Completed
        </p>
        <h2 className="m-0" style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 600,
          fontSize: '2.5rem',
          color: '#1F1E17'
        }}>
          Explore Projects
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="cards-grid mx-auto px-4">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="rounded shadow d-flex align-items-end p-3"
            style={{
              width: '100%',
              height: '30rem',
              backgroundImage: `url(${project.img})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <h3 className="m-0 text-white fw-light project-title" style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.3rem',
              lineHeight: '2.25rem',
              textShadow: '0 2px 8px rgba(0,0,0,0.6)'
            }}>
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      <style jsx>{`
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          max-width: 92.5rem;
          margin-bottom: 2rem;
        }

        @media (max-width: 1200px) {
          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }
          .project-title {
            font-size: 1.625rem !important;
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2rem !important;
            line-height: 2.8rem !important;
          }
          p {
            font-size: 1.25rem !important;
          }
          .cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .project-title {
            font-size: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ExploreProjects;
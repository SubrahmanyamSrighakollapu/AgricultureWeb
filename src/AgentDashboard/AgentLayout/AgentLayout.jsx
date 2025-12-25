// src/AgentDashboard/AgentLayout/AgentLayout.jsx

import { Outlet } from 'react-router-dom';
import AgentNavbar from '../../components/AgentDashboard/AgentNavbar';
import AgentSidebar from '../../components/AgentDashboard/AgentSidebar';
import Footer from '../../components/Footer';

const AgentLayout = () => {
  // Calculate navbar height dynamically or set a fixed value
  const navbarHeight = '90px'; // Adjust this to match your actual navbar height

  return (
    <div className="d-flex flex-column vh-100">
      {/* Fixed Navbar */}
      <div className="fixed-top" style={{ zIndex: 1030 }}>
        <AgentNavbar />
      </div>

      {/* Main Content Area - Below Navbar */}
      <div className="d-flex flex-grow-1" style={{ marginTop: navbarHeight }}>
        {/* Fixed Sidebar - 20% width */}
        <div 
          className="position-fixed"
          style={{
            width: '20%',
            height: `calc(100vh - ${navbarHeight})`,
            overflowY: 'auto',
            top: navbarHeight,
            left: 0,
            zIndex: 1020
          }}
        >
          <AgentSidebar />
        </div>

        {/* Main Content - 80% width, pushed to the right */}
        <div 
          className="flex-grow-1"
          style={{
            marginLeft: '20%',
            width: '80%',
            padding: '1.5rem',
            overflowY: 'auto',
            height: `calc(100vh - ${navbarHeight})`
          }}
        >
          <Outlet />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AgentLayout;
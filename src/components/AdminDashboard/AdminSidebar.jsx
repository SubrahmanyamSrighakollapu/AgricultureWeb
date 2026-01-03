// src/components/AdminDashboard/AdminSidebar.jsx

import { Link, useLocation } from 'react-router-dom';
import Icon1 from '../../assets/AgentDashboard/Sidebar/Icon1.png';
import Icon2 from '../../assets/AgentDashboard/Sidebar/Icon2.png';

const AdminSidebar = () => {
  const location = useLocation();

  const menuItems = [
    { icon: Icon1, title: 'Dashboard', path: '/admin' },
    { icon: Icon2, title: 'User Service Settings', path: '/admin/user-service-settings' }
  ];

  const sidebarStyles = {
    container: {
      backgroundColor: '#FBFFF6',
      borderRight: '0.5px solid #6B6B6B',
      height: 'auto',
      padding: '1rem',
      marginTop: '1.85rem'
    },
    item: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      cursor: 'pointer',
      borderRadius: '0.5rem',
      transition: 'background-color 0.2s ease',
      marginBottom: '1rem',
      textDecoration: 'none',
      color: 'inherit'
    },
    activeItem: {
      backgroundColor: '#4BAF4747',
      fontWeight: '600'
    },
    icon: {
      width: '1.75rem',
      height: '1.75rem',
      opacity: 1
    }
  };

  const isActive = (path) => {
    if (path === '/admin') {
      return location.pathname === '/admin';
    }
    return location.pathname === path;
  };

  return (
    <div style={sidebarStyles.container}>
      {menuItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path}
          style={{
            ...sidebarStyles.item,
            ...(isActive(item.path) ? sidebarStyles.activeItem : {})
          }}
          onMouseEnter={(e) => {
            if (!isActive(item.path)) {
              e.currentTarget.style.backgroundColor = '#E8F5E9';
            }
          }}
          onMouseLeave={(e) => {
            if (!isActive(item.path)) {
              e.currentTarget.style.backgroundColor = 'transparent';
            }
          }}
        >
          <img 
            src={item.icon} 
            alt={item.title}
            style={sidebarStyles.icon}
          />
          <p className="sidebar-title mb-0">{item.title}</p>
        </Link>
      ))}
    </div>
  );
};

export default AdminSidebar;
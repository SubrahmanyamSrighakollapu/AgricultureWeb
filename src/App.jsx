// src/App.jsx

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './auth/Login';
import OtpVerification from './auth/OtpVerification';
import Signup from './auth/Signup';
import VerifiedSuccess from './auth/VerifiedSuccess';
import Layout from './layout/Layout';
import MainPage from './pages/HomePages/MainPage';
import About from './pages/about/About';
import Services from './pages/service/Services';
import Shop from './pages/shop/shop';

import { authCSS } from './styles/authStyles';
const styleSheet = document.createElement('style');
styleSheet.innerText = authCSS;
document.head.appendChild(styleSheet);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public/auth routes without the main Layout (no navbar) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/otp-verification" element={<OtpVerification />} />
        <Route path="/verified-success" element={<VerifiedSuccess />} />
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* App routes wrapped with Layout (navbar present) */}
        <Route element={<Layout />}>
          <Route path="/home" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
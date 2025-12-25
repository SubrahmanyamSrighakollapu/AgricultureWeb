// src/App.jsx
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './auth/Login';
import OtpVerification from './auth/OtpVerification';
import Signup from './auth/Signup';
import VerifiedSuccess from './auth/VerifiedSuccess';
import { CartProvider } from './context/CartContext';
import Layout from './layout/Layout'; // This is your AGRICULTURE website layout
import About from './pages/about/About';
import Cart from './pages/Cart/Cart';
import CheckOut from './pages/Cart/Checkout';
import OrderPlaced from './pages/Cart/OrderPlaced';
import MainPage from './pages/HomePages/MainPage';
import Services from './pages/service/Services';
import Details from './pages/shop/Details/Details';
import Shop from './pages/shop/shop';
import PrivacyPolicy from './pages/TermsAndConditions/PrivacyPolicy';
import RefundPolicy from './pages/TermsAndConditions/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';

// Import your AGENT DASHBOARD layout and pages
import AgentLayout from './AgentDashboard/AgentLayout/AgentLayout'; // Agent Dashboard layout
import AgentItemDetails from "./AgentDashboard/pages/BuyFromFarmers/AgentItemDetails";
import BuyFromFarmers from './AgentDashboard/pages/BuyFromFarmers/BuyFromFarmers';
import Dashboard from './AgentDashboard/pages/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          {/* Public/auth routes without any Layout (no navbar) */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/verified-success" element={<VerifiedSuccess />} />
          <Route path="/" element={<Navigate to="/login" replace />} />

          {/* AGRICULTURE WEBSITE routes wrapped with Layout (agriculture navbar) */}
          <Route element={<Layout />}>
            <Route path="/home" element={<MainPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/cart/checkout" element={<CheckOut />} />
            <Route path="/order-placed" element={<OrderPlaced />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
          </Route>

          {/* AGENT DASHBOARD routes wrapped with AgentLayout (agent navbar + sidebar) */}
          <Route path="/agent" element={<AgentLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="buy-from-farmers" element={<BuyFromFarmers />} />
            <Route path="agent/agent-item-details/:id" element={<AgentItemDetails />} />
            {/* <Route path="place-orders" element={<PlaceOrders />} /> */}
            {/* <Route path="vendor-payments" element={<VendorPayments />} /> */}
            {/* <Route path="settlements" element={<Settlements />} /> */}
            {/* <Route path="reports" element={<Reports />} /> */}
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

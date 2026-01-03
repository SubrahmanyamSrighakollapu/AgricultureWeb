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
import ContactUs from './pages/ContactUs';
import MainPage from './pages/HomePages/MainPage';
import OrderPlaced from './pages/Cart/OrderPlaced';
import Services from './pages/service/Services';
import Details from './pages/shop/Details/Details';
import Shop from './pages/shop/shop';
import PrivacyPolicy from './pages/TermsAndConditions/PrivacyPolicy';
import RefundPolicy from './pages/TermsAndConditions/RefundPolicy';
import TermsAndConditions from './pages/TermsAndConditions/TermsAndConditions';

// Import your AGENT DASHBOARD layout and pages
import AgentLayout from './AgentDashboard/AgentLayout/AgentLayout'; // Agent Dashboard layout
import AgentCart from "./AgentDashboard/pages/BuyFromFarmers/AgentCart";
import AgentItemDetails from "./AgentDashboard/pages/BuyFromFarmers/AgentItemDetails";
import BuyFromFarmers from './AgentDashboard/pages/BuyFromFarmers/BuyFromFarmers';
import AgentCheckout from './AgentDashboard/pages/Checkout/AgentCheckout';
import AgentOrderPlaced from './AgentDashboard/pages/Checkout/AgentOrderPlaced';
import Dashboard from './AgentDashboard/pages/Dashboard/Dashboard';
import PlaceOrders from './AgentDashboard/pages/PlaceOrders/PlaceOrders';
import Reports from './AgentDashboard/pages/Reports/Reports';
import Settlements from './AgentDashboard/pages/Settlements/Settlements';
import VendorPayments from './AgentDashboard/pages/VendorPayments/VendorPayments';

// Import your ADMIN DASHBOARD layout and pages
import AdminLayout from './AdminDashboard/AdminLayout/AdminLayout';
import AdminDashboard from './AdminDashboard/pages/Dashboard/Dashboard';
import UserServiceSettings from './AdminDashboard/pages/UserServiceSettings/UserServiceSettings';
import CreateUser from './AdminDashboard/pages/Dashboard/AdminActions/CreateUser';
import CreateAgent from './AdminDashboard/pages/Dashboard/AdminActions/CreateAgent';
import AgentKycVerification from './AdminDashboard/pages/Dashboard/AdminActions/AgentKycVerification';
import AgentOnboarded from './AdminDashboard/pages/Dashboard/AdminActions/AgentOnboarded';
import CreateEmployee from './AdminDashboard/pages/Dashboard/AdminActions/CreateEmployee';

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
            <Route path="/contact" element={<ContactUs />} />
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
            <Route path="agent-item-details/:id" element={<AgentItemDetails />} />
            <Route path="cart" element={<AgentCart />} />
            <Route path="checkout" element={<AgentCheckout />} />
            <Route path="order-placed" element={<AgentOrderPlaced />} />
            <Route path="place-orders" element={<PlaceOrders />} />
            <Route path="vendor-payments" element={<VendorPayments />} />
            <Route path="settlements" element={<Settlements />} />
            <Route path="reports" element={<Reports />} />
            {/* <Route path="place-orders" element={<PlaceOrders />} /> */}
            {/* <Route path="vendor-payments" element={<VendorPayments />} /> */}
            {/* <Route path="settlements" element={<Settlements />} /> */}
            {/* <Route path="reports" element={<Reports />} /> */}
          </Route>
          {/* ADMIN DASHBOARD routes wrapped with AdminLayout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="user-service-settings" element={<UserServiceSettings />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="create-agent" element={<CreateAgent />} />
            <Route path="agent-kyc-verification" element={<AgentKycVerification />} />
            <Route path="agent-onboarded" element={<AgentOnboarded />} />
            <Route path="create-employee" element={<CreateEmployee />} />
          </Route>
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;

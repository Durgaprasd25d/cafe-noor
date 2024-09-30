import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Lazy load components
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const MenuPage = lazy(() => import("./pages/Menu.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const LoginForm = lazy(() => import("./components/Loginform.jsx"));
const RegisterForm = lazy(() => import("./components/RegisterForm.jsx"));
const ProfilePage = lazy(() => import("./components/Profile.jsx"));

// Mock authentication status
const isAuthenticated = false; // Change this based on your auth logic

const ProtectedRoute = ({ children }) => {
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <div className="overflow-hidden">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* Example of nested routes */}
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

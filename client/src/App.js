import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import Contact from "./screens/Contact";
import BookingScreen from "./screens/BookingScreen";
import Registration from "./screens/Registration";
import Login from "./screens/Login";
import BookingFormScreen from "./screens/BookingFormScreen";
import Footer from "./components/Footer";
import BooknowScreen from "./screens/BooknowScreen";
import ProfileScreen from "./screens/ProfileScreen";
import BookingSuccess from "./screens/BookingSuccess";
import AdminDashboard from "./components/AdminDashboard";
import PrivateRoute from './components/PrivateRoute';
import MyBookings from './screens/MyBookings'; // Import the MyBookings component

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBarWithConditionalRendering />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/home" element={<HomeScreen />} />
                    <Route path="/booknow" element={<BooknowScreen />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/book/:roomid/:startDate/:endDate" element={<BookingScreen />} />
                    <Route path="/bookingform" element={<BookingFormScreen />} />
                    <Route path="/register" element={<Registration />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/profile" element={<ProfileScreen />} />
                    <Route path="/bookingsuccess" element={<BookingSuccess />} />
                    <Route path="/mybookings/:token" element={<MyBookings />} /> {/* Handle bookings with token */}
                    <Route path="/admin" element={<PrivateRoute><AdminDashboard /></PrivateRoute>} />
                </Routes>
                <FooterWithConditionalRendering />
            </BrowserRouter>
        </div>
    );
}

// Footer component with conditional rendering
function FooterWithConditionalRendering() {
    const location = useLocation();
    if (location.pathname === "/register" || location.pathname === "/login" || location.pathname === "/admin") {
        return null;
    }
    return <Footer />;
}

// Footer component with conditional rendering
function NavBarWithConditionalRendering() {
  const location = useLocation();
  if (location.pathname === "/admin") {
      return null;
  }
  return <NavBar />;
}

export default App;

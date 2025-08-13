import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";

// Pages
import Home from "./pages/Home";
import CarDetails from "./pages/CarDetails";
import Cars from "./pages/Cars";
import MyBookings from "./pages/MyBookings";
import Layout from "./pages/owner/Layout";
import Dashboard from "./pages/owner/Dashboard";
import AddCar from "./pages/owner/AddCar";
import ManageCars from "./pages/owner/ManageCars";
import ManageBookings from "./pages/owner/ManageBookings";
import Login from "./components/Login";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [user, setUser] = useState(null);
  const isOwnerPath = useLocation().pathname.startsWith("/owner");

  // Load user from localStorage at app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} setUser={setUser} />}

      {!isOwnerPath && <Navbar setShowLogin={setShowLogin} user={user} setUser={setUser} />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/my-bookings" element={<MyBookings />} />

        {/* Owner Routes */}
        <Route path="/owner" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="add-car" element={<AddCar />} />
          <Route path="manage-cars" element={<ManageCars />} />
          <Route path="manage-bookings" element={<ManageBookings />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

import React, { useState } from 'react';
import { assets, menuLinks } from "../assets/assets";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = ({ setShowLogin, user, setUser }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b">
      <Link to='/'>
        <img src={assets.logo} alt="logo" className='h-8' />
      </Link>

      <div className="flex gap-4 items-center">
        {menuLinks.map((link, index) => (
          <Link key={index} to={link.path}>{link.name}</Link>
        ))}

        {user?.role === "owner" && (
          <button onClick={() => navigate('/owner')}>Dashboard</button>
        )}

        {user ? (
          <button onClick={handleLogout} className='bg-red-500 text-white px-4 py-1 rounded'>
            Logout
          </button>
        ) : (
          <button onClick={() => setShowLogin(true)} className='bg-blue-500 text-white px-4 py-1 rounded'>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;

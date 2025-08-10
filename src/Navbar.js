// Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">
        MyApp
      </Link>
      <div className="navbar-nav">
        {!token && (
          <>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </>
        )}
        {token && (
          <>
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
            <Link className="nav-link" to="/users">
              Users
            </Link>
            <button
              className="btn btn-outline-danger btn-sm ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

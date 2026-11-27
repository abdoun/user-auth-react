import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import Navbar from './Navbar';
import Register from './Register';
import Login from './Login';
import Profile from './Profile';
import Users from './Users';
import Home from './Home';
import CookieConsent from './CookieConsent';
import PrivacyPolicy from './PrivacyPolicy';
import { logout } from './utils/auth';
import {
  isTokenExpired,
  publishSharedToken,
  readSharedToken,
} from './utils/sharedToken';

function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    let token = localStorage.getItem('token');
    const shared = readSharedToken();

    // The shared cookie is the session source of truth: it is cleared on
    // logout in either frontend and expires with the JWT.
    if (!shared && token) {
      localStorage.removeItem('token');
      token = null;
    }

    // Pick up a token published by the other localhost frontend (port 3002).
    if (!token && shared && !isTokenExpired(shared)) {
      token = shared;
      localStorage.setItem('token', shared);
    }

    if (!token) {
      setIsLoggedIn(false);
      return;
    }

    try {
      const { exp } = jwtDecode(token);
      if (Date.now() >= exp * 1000) {
        logout();
        setIsLoggedIn(false);
      } else {
        setIsLoggedIn(true);
        publishSharedToken(token);
        const timeout = exp * 1000 - Date.now();
        const timer = setTimeout(() => {
          logout();
          setIsLoggedIn(false);
        }, timeout);
        return () => clearTimeout(timer);
      }
    } catch (e) {
      logout();
      setIsLoggedIn(false);
    }
  }, [isLoggedIn]);

  function PublicRoute({ children, isLoggedIn }) {
    return !isLoggedIn ? children : <Navigate to="/profile" />;
  }

  return (
    <>
      <div className="alert alert-danger text-center mb-4" role="alert">
        ⚠️ This is a demo application. Do NOT use or share any personal or
        sensitive data.
      </div>
      <Router>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute isLoggedIn={isLoggedIn}>
                <Register setIsLoggedIn={setIsLoggedIn} />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute isLoggedIn={isLoggedIn}>
                <Login setIsLoggedIn={setIsLoggedIn} />
              </PublicRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <Users />
              </PrivateRoute>
            }
          />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route
            path="*"
            element={<Navigate to={isLoggedIn ? '/profile' : '/login'} />}
          />
        </Routes>
      </Router>
      <CookieConsent />
    </>
  );
}

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
import { logout } from './utils/auth';

function PrivateRoute({ children, isLoggedIn }) {
  return isLoggedIn ? children : <Navigate to="/login" />;
}

function PublicRoute({ children, isLoggedIn }) {
  return !isLoggedIn ? children : <Navigate to="/profile" />;
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
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
  }, []);

  function PublicRoute({ children, isLoggedIn }) {
    return !isLoggedIn ? children : <Navigate to="/profile" />;
  }

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
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
        <Route
          path="*"
          element={<Navigate to={isLoggedIn ? '/profile' : '/login'} />}
        />
      </Routes>
    </Router>
  );
}

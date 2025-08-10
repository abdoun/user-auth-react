import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }

      try {
        const res = await fetch('/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          setError('Failed to fetch profile. Please login again.');
          localStorage.removeItem('token');
          navigate('/login');
          return;
        }
        const data = await res.json();
        setUser(data.user);
      } catch {
        setError('Network error.');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (error)
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  if (!user) return <div className="container mt-5">Loading profile...</div>;

  return (
    <div className="container w-50 mt-5">
      <h2>Welcome, {user.name}!</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <button
        className="btn btn-danger"
        onClick={() => {
          localStorage.removeItem('token');
          navigate('/login');
        }}
      >
        Logout
      </button>
    </div>
  );
}

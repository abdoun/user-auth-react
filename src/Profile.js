import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      navigate('/login');
      return;
    }

    const fetchProfile = async () => {
      try {
        const res = await fetch('/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          setError('Failed to fetch profile. Please login again.');
          localStorage.removeItem('token');
          setLoading(false); // <-- Add this
          navigate('/login');
          return;
        }
        const data = await res.json();
        setUser(data.user);
        setLoading(false); // <-- Add this
      } catch {
        setError('Network error.');
        setLoading(false); // <-- Add this
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
  if (loading) return <div>Loading profile...</div>;
  if (!user) return null;

  return (
    <div className="container w-50 mt-5">
      <h2>Welcome, {user.name}!</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
    </div>
  );
}

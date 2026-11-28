import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from './utils/auth';

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState({
    type: '',
    text: '',
  });
  const [passwordBusy, setPasswordBusy] = useState(false);
  const [deleteBusy, setDeleteBusy] = useState(false);
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
        const res = await fetch('/api/profile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) {
          setError('Failed to fetch profile. Please login again.');
          localStorage.removeItem('token');
          setLoading(false);
          navigate('/login');
          return;
        }
        const data = await res.json();
        setUser(data.user);
        setLoading(false);
      } catch {
        setError('Network error.');
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  async function handleChangePassword(e) {
    e.preventDefault();
    setPasswordMessage({ type: '', text: '' });

    if (newPassword !== confirmPassword) {
      setPasswordMessage({
        type: 'danger',
        text: 'New passwords do not match.',
      });
      return;
    }

    const token = localStorage.getItem('token');
    setPasswordBusy(true);
    try {
      const res = await fetch(`/api/users/${user.id}/password`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          currentPassword,
          newPassword,
        }),
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        const text =
          (data.errors && data.errors[0] && data.errors[0].msg) ||
          data.error ||
          'Failed to change password.';
        setPasswordMessage({ type: 'danger', text });
        return;
      }

      setPasswordMessage({
        type: 'success',
        text: data.message || 'Password changed successfully.',
      });
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch {
      setPasswordMessage({ type: 'danger', text: 'Network error.' });
    } finally {
      setPasswordBusy(false);
    }
  }

  async function handleDelete() {
    if (
      !window.confirm('Delete your account permanently? This cannot be undone.')
    ) {
      return;
    }

    const token = localStorage.getItem('token');
    setDeleteBusy(true);
    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setError(data.error || 'Failed to delete account.');
        return;
      }

      logout();
      navigate('/login');
    } catch {
      setError('Network error.');
    } finally {
      setDeleteBusy(false);
    }
  }

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

      <hr />

      <h4>Change password</h4>
      {passwordMessage.text && (
        <div className={`alert alert-${passwordMessage.type}`} role="alert">
          {passwordMessage.text}
        </div>
      )}
      <form onSubmit={handleChangePassword}>
        <div className="mb-3">
          <label htmlFor="currentPassword" className="form-label">
            Current password
          </label>
          <input
            id="currentPassword"
            type="password"
            className="form-control"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="newPassword" className="form-label">
            New password (at least 8 characters)
          </label>
          <input
            id="newPassword"
            type="password"
            className="form-control"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm new password
          </label>
          <input
            id="confirmPassword"
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            minLength={8}
            required
          />
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={passwordBusy}
        >
          {passwordBusy ? 'Changing...' : 'Change password'}
        </button>
      </form>

      <hr />

      <h4>Delete account</h4>
      <p className="text-muted">
        Permanently remove your account. This cannot be undone.
      </p>
      <button
        className="btn btn-danger"
        onClick={handleDelete}
        disabled={deleteBusy}
      >
        {deleteBusy ? 'Deleting...' : 'Delete my account'}
      </button>
    </div>
  );
}

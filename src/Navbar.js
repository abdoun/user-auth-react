import { logout } from './utils/auth';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-light px-4">
      <Link className="navbar-brand" to="/">
        User Auth React
      </Link>
      <div className="navbar-nav">
        {!isLoggedIn && (
          <>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </>
        )}
        {isLoggedIn && (
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

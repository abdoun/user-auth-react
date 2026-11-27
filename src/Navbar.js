import { logout } from './utils/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AUTHORS_URL } from './utils/authConfig';

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
        <Link className="nav-link" to="/privacy">
          Privacy policy
        </Link>
        {(() => {
          let url = localStorage.getItem('authorUrl');
          
          if (!url) {
            // Default: use the known domain
            url = AUTHORS_URL;
          } else {
            // If it's an IP, try to map to domain format with :8083
            const isIP = url.match(/^[\d.]+$/);
            if (isIP) {
              url = `http://${url}:8083`;
            }
          }
          
          return (
            <Link 
              className="nav-link" 
              onClick={() => {
                const currentHost = window.location.host;
                localStorage.setItem('authorUrl', currentHost + ':8083');
              }}
            >
              {url.includes(':8083') ? url.replace(/:8083$/, '') : url}
              <i className="bi bi-person-lines-fill"></i>
            </Link>
          );
        })()}
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

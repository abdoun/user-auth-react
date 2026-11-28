import { logout } from './utils/auth';
import { Link, useNavigate } from 'react-router-dom';
import { AUTHORS_URL } from './utils/authConfig';

// When browsing over a plain IP, the authors frontend lives on the sibling
// port (8088); otherwise use the public domain.
function getAuthorsUrl() {
  const host = window.location.hostname;
  const isIP = /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
  const base = isIP ? `http://${host}:8088` : AUTHORS_URL;
  return `${base.replace(/\/+$/, '')}/authors`;
}

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useNavigate();
  const authorsUrl = getAuthorsUrl();

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <header className="App-header">
      <h1 className="App-brand">
        <Link to="/">User Auth React</Link>
      </h1>
      <nav className="App-nav nav nav-pills justify-content-center">
        <div className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </div>
        <div className="nav-item">
          <Link className="nav-link" to="/privacy">
            Privacy policy
          </Link>
        </div>
        <div className="nav-item">
          <a className="nav-link" href={authorsUrl}>
            Authors
          </a>
        </div>
        {!isLoggedIn && (
          <>
            <div className="nav-item">
              <Link className="nav-link" to="/register">
                Register
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/login">
                Login
              </Link>
            </div>
          </>
        )}
        {isLoggedIn && (
          <>
            <div className="nav-item">
              <Link className="nav-link" to="/profile">
                Profile
              </Link>
            </div>
            <div className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </div>
            <div className="nav-item">
              <button className="nav-link" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

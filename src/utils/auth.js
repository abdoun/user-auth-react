import { jwtDecode } from 'jwt-decode';

export function isTokenExpired(token) {
  if (!token) return true;

  try {
    const { exp } = jwtDecode(token);
    if (!exp) return true;
    return Date.now() >= exp * 1000;
  } catch {
    return true;
  }
}

export function logout() {
  localStorage.removeItem('token');
  //window.location.href = '/login';
}

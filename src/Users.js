import React, { useState, useEffect } from 'react';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users?page=${page}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch users');
        return res.json();
      })
      .then((data) => {
        setUsers(data.users);
        setPage(data.page);
        setTotalPages(data.totalPages);
        setError('');
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [page]);

  return (
    <div className="container mt-4">
      <h2>Users</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      {loading ? (
        <p>Loading users...</p>
      ) : (
        <>
          <table className="table table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user) => (
                  <tr key={user.id} style={{ cursor: 'pointer' }}>
                    <td></td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">No users found</td>
                </tr>
              )}
            </tbody>
          </table>

          <nav>
            <ul className="pagination">
              <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <button
                  className="page-link"
                  onClick={() => setPage(page - 1)}
                  disabled={page === 1}
                >
                  Previous
                </button>
              </li>
              {[...Array(totalPages).keys()].map((n) => (
                <li
                  key={n + 1}
                  className={`page-item ${page === n + 1 ? 'active' : ''}`}
                >
                  <button className="page-link" onClick={() => setPage(n + 1)}>
                    {n + 1}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${page === totalPages ? 'disabled' : ''}`}
              >
                <button
                  className="page-link"
                  onClick={() => setPage(page + 1)}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </>
      )}
    </div>
  );
}

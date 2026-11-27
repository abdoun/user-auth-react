export default function Home() {
  return (
    <main className="container mt-5">
      <div className="mx-auto" style={{ maxWidth: '720px' }}>
        <h1 className="mb-3">User Auth React</h1>
        <div className="alert alert-warning" role="alert">
          This is a demo application. Do not enter real or personal data — use
          test data only.
        </div>
        <p className="lead">
          A React frontend sample for user authentication based on React JS
          connects to backend based on Node.js, MySql by express.js. It
          demonstrates registration, login, protected routes, profile access,
          and user listing.
        </p>
        <p>
          <strong>Project started:</strong> August 10, 2025
        </p>
        <a
          className="btn btn-outline-primary"
          href="https://github.com/abdoun/user-auth-react"
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub
        </a>
      </div>
    </main>
  );
}

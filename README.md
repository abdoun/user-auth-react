# User Auth React

A simple user authentication app built with [Create React App](https://github.com/facebook/create-react-app). This project demonstrates basic user authentication flows in React, with a backend powered by Node.js and MySQL.

## Features

- User registration and login
- Protected routes
- Basic form validation
- Responsive UI

## Backend

This project uses a Node.js/MySQL backend for authentication.  
See [user-auth-node-mysql](https://github.com/abdoun/user-auth-node-mysql) for backend setup and API documentation.

- **Frontend runs on:** `http://localhost:3001`
- **Backend runs on:** `http://localhost:3000`
- **Proxy:** API requests from React are proxied to the backend on port 3000.

## Getting Started

### Prerequisites

- Node.js (v16 or above recommended)
- npm

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/user-auth-react.git
cd user-auth-react
npm install
```

### Running the App

Start the development server:

```bash
npm start
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

### Running Tests

```bash
npm test
```

## Project Structure

```
user-auth-react/
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Scripts

- `npm start` — Runs the app in development mode
- `npm test` — Runs tests in watch mode
- `npm run build` — Builds the app for production

## Learn More

- [React Documentation](https://reactjs.org/)
- [Create React App Docs](https://facebook.github.io/create-react-app/docs/getting-started)
- [user-auth-node-mysql Backend](https://github.com/abdoun/user-auth-node-mysql)

## License

This project is licensed under
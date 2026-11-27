# User Auth React

A React frontend sample for user authentication, built with [Create React App](https://github.com/facebook/create-react-app). It demonstrates registration, login, protected routes, and profile access using a Node.js API backed by MySQL.

## Features

- User registration and login
- Protected routes
- Basic form validation
- Responsive UI
- Multilingual (English, Arabic, German, Turkish) privacy policy and cookie notice, with RTL support for Arabic

## Backend

This project uses a Node.js/MySQL backend for authentication.  
See [user-auth-node-mysql](https://github.com/abdoun/user-auth-node-mysql) for backend setup and API documentation.

The JWT is published in a `jwt_token` cookie scoped to `localhost` and shared
with the authors frontend on `localhost:3002`: logging in at either app signs
you in to the other, and logging out at either app clears both. Use `localhost`
rather than `127.0.0.1` for both apps.

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

## Privacy Policy & Cookie Notice

A multilingual privacy policy is available at `/privacy` and linked from the
navbar. It describes the account, session, and preference data handled by this
sample and is available in English, Arabic, German and Turkish (Arabic uses an
RTL layout).

The app uses only strictly necessary storage, so the first-visit notice simply
asks visitors to **Accept** or **Reject** it. No analytics or marketing
categories exist. The answer is remembered in `localStorage` under
`cookieConsent`, and a persistent **Cookie settings** button lets visitors
review it and change their answer at any time.

The selected language is stored under `consentLanguage` and shared between the
notice and the privacy policy. After any answer, a `cookie-consent-change`
window event is dispatched with the new record in `event.detail`:

```js
window.addEventListener('cookie-consent-change', (event) => {
  if (event.detail?.accepted) {
    // visitor accepted the notice
  }
});
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

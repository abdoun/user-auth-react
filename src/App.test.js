import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the home page and navigation brand', () => {
  render(<App />);
  const brand = screen.getByRole('link', { name: 'User Auth React' });
  expect(brand).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'User Auth React' })
  ).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'View on GitHub' })).toHaveAttribute(
    'href',
    'https://github.com/abdoun/user-auth-react'
  );
});

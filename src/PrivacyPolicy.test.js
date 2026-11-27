import { fireEvent, render, screen } from '@testing-library/react';
import PrivacyPolicy from './PrivacyPolicy';

beforeEach(() => {
  localStorage.clear();
});

test('renders the policy in English with its sections', () => {
  render(<PrivacyPolicy />);

  const page = screen.getByRole('main');
  expect(page).toHaveAttribute('lang', 'en');
  expect(page).toHaveAttribute('dir', 'ltr');
  expect(
    screen.getByRole('heading', { level: 1, name: 'Privacy Policy' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Data we collect' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Cookies and local storage' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Passwords and security' })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: 'Limits of this sample' })
  ).toBeInTheDocument();
  expect(
    screen.getByText('jwt_token (cookie)', { selector: 'dt' })
  ).toBeInTheDocument();
  expect(screen.getByText(/first 72 bytes/)).toBeInTheDocument();
});

test('switches language, switches to RTL for Arabic, and remembers it', () => {
  render(<PrivacyPolicy />);

  fireEvent.click(screen.getByRole('button', { name: 'العربية' }));

  const page = screen.getByRole('main');
  expect(page).toHaveAttribute('lang', 'ar');
  expect(page).toHaveAttribute('dir', 'rtl');
  expect(
    screen.getByRole('heading', { level: 1, name: 'سياسة الخصوصية' })
  ).toBeInTheDocument();
  expect(localStorage.getItem('consentLanguage')).toBe('ar');
});

test('supports German and Turkish translations', () => {
  render(<PrivacyPolicy />);

  fireEvent.click(screen.getByRole('button', { name: 'Deutsch' }));
  expect(
    screen.getByRole('heading', { level: 1, name: 'Datenschutzerklärung' })
  ).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: 'Türkçe' }));
  expect(
    screen.getByRole('heading', { level: 1, name: 'Gizlilik Politikası' })
  ).toBeInTheDocument();
  expect(screen.getByRole('main')).toHaveAttribute('dir', 'ltr');
});

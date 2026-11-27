import { fireEvent, render, screen, within } from '@testing-library/react';
import CookieConsent from './CookieConsent';
import {
  CONSENT_EVENT,
  CONSENT_STORAGE_KEY,
  getConsent,
} from './utils/consent';

beforeEach(() => {
  localStorage.clear();
});

test('shows the notice in English and saves acceptance', () => {
  const listener = jest.fn();
  window.addEventListener(CONSENT_EVENT, listener);
  render(<CookieConsent />);

  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveAttribute('lang', 'en');
  expect(dialog).toHaveAttribute('dir', 'ltr');
  expect(
    within(dialog).getByRole('heading', {
      level: 2,
      name: 'Your privacy matters',
    })
  ).toBeInTheDocument();
  expect(
    within(dialog).getByRole('link', { name: 'Privacy policy' })
  ).toHaveAttribute('href', '/privacy');
  expect(within(dialog).queryByRole('checkbox')).not.toBeInTheDocument();

  fireEvent.click(within(dialog).getByRole('button', { name: 'Accept' }));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(getConsent()).toMatchObject({ version: 2, accepted: true });
  expect(listener).toHaveBeenCalledTimes(1);
  expect(
    screen.getByRole('button', { name: 'Cookie settings' })
  ).toBeInTheDocument();

  window.removeEventListener(CONSENT_EVENT, listener);
});

test('switches to Arabic and lays out the dialog right-to-left', () => {
  render(<CookieConsent />);

  fireEvent.click(screen.getByRole('button', { name: 'العربية' }));

  const dialog = screen.getByRole('dialog');
  expect(dialog).toHaveAttribute('lang', 'ar');
  expect(dialog).toHaveAttribute('dir', 'rtl');
  expect(
    within(dialog).getByRole('heading', { name: 'خصوصيتك تهمنا' })
  ).toBeInTheDocument();

  fireEvent.click(within(dialog).getByRole('button', { name: 'قبول' }));
  expect(getConsent().accepted).toBe(true);
});

test.each([
  ['Deutsch', 'de', 'Ihre Privatsphäre ist uns wichtig', 'Akzeptieren'],
  ['Türkçe', 'tr', 'Gizliliğiniz önemli', 'Kabul et'],
])(
  'switches to %s with an LTR layout',
  (buttonName, code, title, acceptLabel) => {
    render(<CookieConsent />);

    fireEvent.click(screen.getByRole('button', { name: buttonName }));

    const dialog = screen.getByRole('dialog');
    expect(dialog).toHaveAttribute('lang', code);
    expect(dialog).toHaveAttribute('dir', 'ltr');
    expect(
      within(dialog).getByRole('heading', { name: title })
    ).toBeInTheDocument();
    expect(localStorage.getItem('consentLanguage')).toBe(code);

    fireEvent.click(within(dialog).getByRole('button', { name: acceptLabel }));
    expect(getConsent().accepted).toBe(true);
  }
);

test('saves a rejection without showing per-category options', () => {
  render(<CookieConsent />);

  fireEvent.click(screen.getByRole('button', { name: 'Reject' }));

  expect(getConsent()).toMatchObject({ version: 2, accepted: false });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('reopens the notice so the answer can be changed later', () => {
  localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify({ version: 2, accepted: false, timestamp: null })
  );
  render(<CookieConsent />);

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Cookie settings' }));

  expect(
    screen.getByRole('heading', { name: 'Your privacy matters' })
  ).toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Accept' }));
  expect(getConsent().accepted).toBe(true);
});

test('ignores outdated consent records from the old category system', () => {
  localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify({ version: 1, necessary: true, analytics: true })
  );
  render(<CookieConsent />);

  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(getConsent()).toBeNull();
});

test('Escape closes the notice without saving an answer', () => {
  render(<CookieConsent />);

  fireEvent.keyDown(document, { key: 'Escape' });

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(getConsent()).toBeNull();
});

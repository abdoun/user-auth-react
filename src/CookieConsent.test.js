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

test('shows the notice in English and saves full consent on accept all', () => {
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

  fireEvent.click(within(dialog).getByRole('button', { name: 'Accept all' }));

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  expect(getConsent()).toMatchObject({
    necessary: true,
    analytics: true,
    preferences: true,
    marketing: true,
  });
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

  fireEvent.click(within(dialog).getByRole('button', { name: 'قبول الكل' }));
  expect(getConsent().analytics).toBe(true);
});

test.each([
  ['Deutsch', 'de', 'Ihre Privatsphäre ist uns wichtig', 'Alle akzeptieren'],
  ['Türkçe', 'tr', 'Gizliliğiniz önemli', 'Tümünü kabul et'],
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
    expect(getConsent().marketing).toBe(true);
  }
);

test('rejects all optional categories', () => {
  render(<CookieConsent />);

  fireEvent.click(screen.getByRole('button', { name: 'Reject non-essential' }));

  expect(getConsent()).toMatchObject({
    necessary: true,
    analytics: false,
    preferences: false,
    marketing: false,
  });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('saves granular preferences with necessary storage locked on', () => {
  render(<CookieConsent />);

  fireEvent.click(screen.getByRole('button', { name: 'Customize' }));
  expect(
    screen.getByRole('heading', { name: 'Cookie preferences' })
  ).toBeInTheDocument();

  const necessary = screen.getByRole('checkbox', {
    name: 'Strictly necessary',
  });
  expect(necessary).toBeChecked();
  expect(necessary).toBeDisabled();
  expect(screen.getByRole('checkbox', { name: 'Analytics' })).not.toBeChecked();

  fireEvent.click(screen.getByRole('checkbox', { name: 'Analytics' }));
  fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));

  expect(getConsent()).toMatchObject({
    necessary: true,
    analytics: true,
    preferences: false,
    marketing: false,
  });
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
});

test('reopens saved preferences so they can be changed later', () => {
  localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify({
      version: 1,
      necessary: true,
      analytics: true,
      preferences: false,
      marketing: false,
    })
  );
  render(<CookieConsent />);

  expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Cookie settings' }));

  expect(
    screen.getByRole('heading', { name: 'Cookie preferences' })
  ).toBeInTheDocument();
  const analytics = screen.getByRole('checkbox', { name: 'Analytics' });
  expect(analytics).toBeChecked();

  fireEvent.click(analytics);
  fireEvent.click(screen.getByRole('button', { name: 'Save preferences' }));
  expect(getConsent().analytics).toBe(false);
});

test('Escape returns from settings to the notice without saving', () => {
  render(<CookieConsent />);

  fireEvent.click(screen.getByRole('button', { name: 'Customize' }));
  fireEvent.keyDown(document, { key: 'Escape' });

  expect(
    screen.getByRole('heading', { name: 'Your privacy matters' })
  ).toBeInTheDocument();
  expect(screen.getByRole('dialog')).toBeInTheDocument();
  expect(getConsent()).toBeNull();
});

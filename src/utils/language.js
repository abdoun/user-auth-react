import { LANGUAGES, RTL_LANGUAGES } from '../cookieConsentText';

export const LANGUAGE_STORAGE_KEY = 'consentLanguage';

export function detectLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    // Storage may be unavailable; fall back to the browser language.
  }

  if (typeof navigator !== 'undefined' && navigator.language) {
    const browserLanguage = navigator.language.split(/[-_]/)[0].toLowerCase();
    if (LANGUAGES.includes(browserLanguage)) return browserLanguage;
  }
  return 'en';
}

export function saveLanguage(language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
  } catch {
    // Ignore storage errors; the choice still applies for this session.
  }
}

export function isRTL(language) {
  return RTL_LANGUAGES.includes(language);
}

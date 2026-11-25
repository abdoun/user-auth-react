export const CONSENT_STORAGE_KEY = 'cookieConsent';
export const CONSENT_EVENT = 'cookie-consent-change';
export const CONSENT_VERSION = 1;

export const OPTIONAL_CATEGORIES = ['analytics', 'preferences', 'marketing'];

function normalize(selection) {
  return {
    version: CONSENT_VERSION,
    necessary: true,
    analytics: Boolean(selection && selection.analytics),
    preferences: Boolean(selection && selection.preferences),
    marketing: Boolean(selection && selection.marketing),
    timestamp: new Date().toISOString(),
  };
}

export function getConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;

    return {
      ...normalize(parsed),
      timestamp: parsed.timestamp || null,
    };
  } catch {
    return null;
  }
}

export function saveConsent(selection) {
  const consent = normalize(selection);
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  return consent;
}

export function clearConsent() {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

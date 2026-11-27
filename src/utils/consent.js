export const CONSENT_STORAGE_KEY = 'cookieConsent';
export const CONSENT_EVENT = 'cookie-consent-change';
// Bumped because the consent record no longer stores per-category choices.
export const CONSENT_VERSION = 2;

function normalize(accepted) {
  return {
    version: CONSENT_VERSION,
    accepted: Boolean(accepted),
    timestamp: new Date().toISOString(),
  };
}

export function getConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (
      !parsed ||
      parsed.version !== CONSENT_VERSION ||
      typeof parsed.accepted !== 'boolean'
    ) {
      return null;
    }

    return {
      ...normalize(parsed.accepted),
      timestamp: parsed.timestamp || null,
    };
  } catch {
    return null;
  }
}

export function saveConsent(accepted) {
  const consent = normalize(accepted);
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
  return consent;
}

export function clearConsent() {
  localStorage.removeItem(CONSENT_STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

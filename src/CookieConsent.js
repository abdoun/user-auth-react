import { useEffect, useRef, useState } from 'react';
import { consentText, LANGUAGES } from './cookieConsentText';
import { getConsent, saveConsent } from './utils/consent';
import './CookieConsent.css';

const LANGUAGE_STORAGE_KEY = 'consentLanguage';
const ALL_ALLOWED = {
  analytics: true,
  preferences: true,
  marketing: true,
};

function detectLanguage() {
  try {
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (LANGUAGES.includes(stored)) return stored;
  } catch {
    // Storage may be unavailable; fall back to the browser language.
  }

  if (
    typeof navigator !== 'undefined' &&
    /^ar([-_]|$)/i.test(navigator.language || '')
  ) {
    return 'ar';
  }
  return 'en';
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(getConsent);
  const [isOpen, setIsOpen] = useState(() => !consent);
  const [language, setLanguage] = useState(detectLanguage);
  const [view, setView] = useState('notice');
  const [draft, setDraft] = useState({});
  const dialogRef = useRef(null);

  const t = consentText[language];
  const dir = language === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Ignore storage errors; the choice still applies for this session.
    }
  }, [language]);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setView((current) => (current === 'settings' ? 'notice' : current));
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), input:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
        )
      );
      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isOpen]);

  function openSettings() {
    setDraft({
      analytics: Boolean(consent && consent.analytics),
      preferences: Boolean(consent && consent.preferences),
      marketing: Boolean(consent && consent.marketing),
    });
    setView('settings');
    setIsOpen(true);
  }

  function commit(selection) {
    const next = saveConsent(selection);
    setConsent(next);
    setView('notice');
    setIsOpen(false);
  }

  function toggleCategory(id, checked) {
    setDraft((current) => ({ ...current, [id]: checked }));
  }

  return (
    <>
      {isOpen && (
        <div className="cc-overlay">
          <section
            ref={dialogRef}
            className="cc-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="cc-title"
            aria-describedby="cc-description"
            dir={dir}
            lang={language}
            tabIndex={-1}
          >
            <div className="cc-topbar">
              <div
                className="cc-language-switch"
                role="group"
                aria-label={t.languageLabel}
              >
                {LANGUAGES.map((code) => (
                  <button
                    key={code}
                    type="button"
                    lang={code}
                    className={`cc-language-button${
                      language === code ? ' is-active' : ''
                    }`}
                    aria-pressed={language === code}
                    onClick={() => setLanguage(code)}
                  >
                    {code === 'en' ? 'English' : 'العربية'}
                  </button>
                ))}
              </div>
              <h2 className="cc-title" id="cc-title">
                {view === 'settings' ? t.settingsTitle : t.title}
              </h2>
            </div>

            <div className="cc-body">
              <p className="cc-intro" id="cc-description">
                {t.intro}
              </p>

              {view === 'notice' ? (
                <ul className="cc-summary">
                  {t.categories.map((category) => (
                    <li key={category.id}>
                      <span className="cc-summary-dot" aria-hidden="true" />
                      <span>{category.name}</span>
                      {category.id === 'necessary' && (
                        <span className="cc-always-active">
                          {t.alwaysActive}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="cc-categories">
                  {t.categories.map((category) => {
                    const titleId = `cc-category-${category.id}-title`;
                    const descriptionId = `cc-category-${category.id}-description`;
                    const isRequired = category.id === 'necessary';

                    return (
                      <div className="cc-category" key={category.id}>
                        <div className="cc-category-copy">
                          <h3 className="cc-category-title" id={titleId}>
                            {category.name}
                          </h3>
                          <p
                            className="cc-category-description"
                            id={descriptionId}
                          >
                            {category.description}
                          </p>
                        </div>
                        <div className="cc-category-control">
                          {isRequired && (
                            <span className="cc-always-active">
                              {t.alwaysActive}
                            </span>
                          )}
                          <label className="cc-switch">
                            <input
                              type="checkbox"
                              checked={
                                isRequired ? true : Boolean(draft[category.id])
                              }
                              disabled={isRequired}
                              aria-labelledby={titleId}
                              aria-describedby={descriptionId}
                              onChange={(event) =>
                                toggleCategory(
                                  category.id,
                                  event.target.checked
                                )
                              }
                            />
                            <span
                              className="cc-switch-track"
                              aria-hidden="true"
                            >
                              <span className="cc-switch-thumb" />
                            </span>
                          </label>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              <p className="cc-note">{t.note}</p>
            </div>

            <div className="cc-actions">
              {view === 'notice' ? (
                <>
                  <button
                    type="button"
                    className="cc-btn cc-btn-ghost"
                    onClick={openSettings}
                  >
                    {t.customize}
                  </button>
                  <button
                    type="button"
                    className="cc-btn cc-btn-outline"
                    onClick={() => commit({})}
                  >
                    {t.rejectNonEssential}
                  </button>
                  <button
                    type="button"
                    className="cc-btn cc-btn-primary"
                    onClick={() => commit(ALL_ALLOWED)}
                  >
                    {t.acceptAll}
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    className="cc-btn cc-btn-ghost"
                    onClick={() => setView('notice')}
                  >
                    {t.back}
                  </button>
                  <button
                    type="button"
                    className="cc-btn cc-btn-outline"
                    onClick={() => commit(ALL_ALLOWED)}
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    type="button"
                    className="cc-btn cc-btn-primary"
                    onClick={() => commit(draft)}
                  >
                    {t.savePreferences}
                  </button>
                </>
              )}
            </div>
          </section>
        </div>
      )}

      {!isOpen && consent && (
        <button
          type="button"
          className="cc-reopen"
          dir={dir}
          lang={language}
          onClick={openSettings}
        >
          <span aria-hidden="true">🍪</span>
          <span>{t.reopen}</span>
        </button>
      )}
    </>
  );
}

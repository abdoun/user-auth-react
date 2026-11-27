import { useEffect, useRef, useState } from 'react';
import { consentText, languageNames, LANGUAGES } from './cookieConsentText';
import { getConsent, saveConsent } from './utils/consent';
import { detectLanguage, isRTL, saveLanguage } from './utils/language';
import './CookieConsent.css';

export default function CookieConsent() {
  const [consent, setConsent] = useState(getConsent);
  const [isOpen, setIsOpen] = useState(() => !consent);
  const [language, setLanguage] = useState(detectLanguage);
  const dialogRef = useRef(null);

  const t = consentText[language];
  const dir = isRTL(language) ? 'rtl' : 'ltr';

  useEffect(() => {
    saveLanguage(language);
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
        setIsOpen(false);
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])'
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

  function commit(accepted) {
    const next = saveConsent(accepted);
    setConsent(next);
    setIsOpen(false);
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
                    {languageNames[code]}
                  </button>
                ))}
              </div>
              <h2 className="cc-title" id="cc-title">
                {t.title}
              </h2>
            </div>

            <div className="cc-body">
              <p className="cc-intro" id="cc-description">
                {t.intro}
              </p>

              <ul className="cc-summary">
                {t.storage.map((item) => (
                  <li key={item}>
                    <span className="cc-summary-dot" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="cc-note">
                {t.note}{' '}
                <a href="/privacy" lang={language}>
                  {t.privacyPolicy}
                </a>
              </p>
            </div>

            <div className="cc-actions">
              <button
                type="button"
                className="cc-btn cc-btn-outline"
                onClick={() => commit(false)}
              >
                {t.reject}
              </button>
              <button
                type="button"
                className="cc-btn cc-btn-primary"
                onClick={() => commit(true)}
              >
                {t.accept}
              </button>
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
          onClick={() => setIsOpen(true)}
        >
          <span aria-hidden="true">🍪</span>
          <span>{t.reopen}</span>
        </button>
      )}
    </>
  );
}

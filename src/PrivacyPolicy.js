import { useEffect, useState } from 'react';
import { languageNames, LANGUAGES } from './cookieConsentText';
import { privacyPolicyText } from './privacyPolicyText';
import { detectLanguage, isRTL, saveLanguage } from './utils/language';
import './PrivacyPolicy.css';

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState(detectLanguage);

  useEffect(() => {
    saveLanguage(language);
  }, [language]);

  const t = privacyPolicyText[language];
  const dir = isRTL(language) ? 'rtl' : 'ltr';

  return (
    <main className="privacy-page container" lang={language} dir={dir}>
      <header className="privacy-header">
        <div
          className="privacy-language-switch"
          role="group"
          aria-label={t.languageLabel}
        >
          {LANGUAGES.map((code) => (
            <button
              key={code}
              type="button"
              lang={code}
              className={`privacy-language-button${
                language === code ? ' is-active' : ''
              }`}
              aria-pressed={language === code}
              onClick={() => setLanguage(code)}
            >
              {languageNames[code]}
            </button>
          ))}
        </div>

        <h1>{t.title}</h1>
        <p className="privacy-updated">{t.updated}</p>
        <p className="privacy-intro">{t.intro}</p>
      </header>

      <div className="privacy-sections">
        {t.sections.map((section) => (
          <section className="privacy-section" key={section.id}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.items && (
              <dl className="privacy-terms">
                {section.items.map((item) => (
                  <div className="privacy-term-group" key={item.term}>
                    <dt>{item.term}</dt>
                    <dd>{item.description}</dd>
                  </div>
                ))}
              </dl>
            )}
          </section>
        ))}
      </div>
    </main>
  );
}

export const LANGUAGES = ['en', 'ar', 'de', 'tr'];
export const RTL_LANGUAGES = ['ar'];

export const languageNames = {
  en: 'English',
  ar: 'العربية',
  de: 'Deutsch',
  tr: 'Türkçe',
};

export const consentText = {
  en: {
    title: 'Your privacy matters',
    intro:
      'We use only strictly necessary storage to keep you signed in, remember your language, and remember your answer to this notice. No analytics or marketing cookies are used.',
    note: 'You can review this notice at any time with the “Cookie settings” button.',
    privacyPolicy: 'Privacy policy',
    languageLabel: 'Choose language',
    accept: 'Accept',
    reject: 'Reject',
    reopen: 'Cookie settings',
    storage: [
      'Sign-in session (jwt_token cookie and token in local storage)',
      'Your language choice',
      'Your answer to this notice',
    ],
  },
  ar: {
    title: 'خصوصيتك تهمنا',
    intro:
      'نستخدم فقط التخزين الضروري تمامًا لإبقائك مسجّل الدخول، وتذكّر لغتك، وتذكّر إجابتك على هذا الإشعار. لا نستخدم كوكيز للتحليلات أو التسويق.',
    note: 'يمكنك مراجعة هذا الإشعار في أي وقت عبر زر «إعدادات الكوكيز».',
    privacyPolicy: 'سياسة الخصوصية',
    languageLabel: 'اختر اللغة',
    accept: 'قبول',
    reject: 'رفض',
    reopen: 'إعدادات الكوكيز',
    storage: [
      'جلسة تسجيل الدخول (كوكي jwt_token وtoken في التخزين المحلي)',
      'لغتك المختارة',
      'إجابتك على هذا الإشعار',
    ],
  },
  de: {
    title: 'Ihre Privatsphäre ist uns wichtig',
    intro:
      'Wir verwenden nur unbedingt erforderliche Speicherung, um Sie angemeldet zu halten, Ihre Sprache und Ihre Antwort auf diesen Hinweis zu merken. Es werden keine Analyse- oder Marketing-Cookies verwendet.',
    note: 'Sie können diesen Hinweis jederzeit über die Schaltfläche „Cookie-Einstellungen“ aufrufen.',
    privacyPolicy: 'Datenschutzerklärung',
    languageLabel: 'Sprache wählen',
    accept: 'Akzeptieren',
    reject: 'Ablehnen',
    reopen: 'Cookie-Einstellungen',
    storage: [
      'Anmeldesitzung (jwt_token-Cookie und token im lokalen Speicher)',
      'Ihre Sprachwahl',
      'Ihre Antwort auf diesen Hinweis',
    ],
  },
  tr: {
    title: 'Gizliliğiniz önemli',
    intro:
      'Sizi oturumda tutmak, dilinizi ve bu bildirime verdiğiniz yanıtı hatırlamak için yalnızca kesinlikle gerekli depolama kullanıyoruz. Analiz veya pazarlama çerezi kullanılmıyor.',
    note: 'Bu bildirimi istediğiniz zaman “Çerez ayarları” düğmesiyle görüntüleyebilirsiniz.',
    privacyPolicy: 'Gizlilik politikası',
    languageLabel: 'Dil seçin',
    accept: 'Kabul et',
    reject: 'Reddet',
    reopen: 'Çerez ayarları',
    storage: [
      'Giriş oturumu (jwt_token çerezi ve yerel depolamada token)',
      'Dil seçiminiz',
      'Bu bildirime verdiğiniz yanıt',
    ],
  },
};

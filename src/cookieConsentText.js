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
    settingsTitle: 'Cookie preferences',
    intro:
      'We use cookies and similar storage to keep you signed in, remember your preferences, and understand how this app is used. You decide what to allow — strictly necessary storage is always on.',
    note: 'You can change your choice at any time with the “Cookie settings” button.',
    languageLabel: 'Choose language',
    alwaysActive: 'Always active',
    allow: 'Allow',
    acceptAll: 'Accept all',
    rejectNonEssential: 'Reject non-essential',
    customize: 'Customize',
    savePreferences: 'Save preferences',
    back: 'Back',
    reopen: 'Cookie settings',
    categories: [
      {
        id: 'necessary',
        name: 'Strictly necessary',
        description:
          'Required for sign-in, security, and remembering your consent choice. These cannot be turned off.',
      },
      {
        id: 'analytics',
        name: 'Analytics',
        description:
          'Helps us see which pages are visited so we can improve the app.',
      },
      {
        id: 'preferences',
        name: 'Preferences',
        description:
          'Remembers choices such as your language and display settings.',
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description:
          'Used to show relevant content and measure campaigns. Off by default.',
      },
    ],
  },
  ar: {
    title: 'خصوصيتك تهمنا',
    settingsTitle: 'تفضيلات الكوكيز',
    intro:
      'نستخدم الكوكيز ووسائل التخزين المشابهة لإبقائك مسجّل الدخول، وتذكّر تفضيلاتك، وفهم طريقة استخدام هذا التطبيق. أنت من يقرر ما يُسمح به، والعناصر الضرورية تعمل دائمًا.',
    note: 'يمكنك تغيير اختيارك في أي وقت عبر زر «إعدادات الكوكيز».',
    languageLabel: 'اختر اللغة',
    alwaysActive: 'مفعّلة دائمًا',
    allow: 'السماح',
    acceptAll: 'قبول الكل',
    rejectNonEssential: 'رفض غير الضروري',
    customize: 'تخصيص',
    savePreferences: 'حفظ التفضيلات',
    back: 'رجوع',
    reopen: 'إعدادات الكوكيز',
    categories: [
      {
        id: 'necessary',
        name: 'ضرورية تمامًا',
        description:
          'مطلوبة لتسجيل الدخول والأمان وتذكّر اختيارك للكوكيز. لا يمكن إيقافها.',
      },
      {
        id: 'analytics',
        name: 'التحليلات',
        description: 'تساعدنا على معرفة الصفحات الأكثر زيارة لتحسين التطبيق.',
      },
      {
        id: 'preferences',
        name: 'التفضيلات',
        description: 'تتذكّر اختياراتك، مثل اللغة وإعدادات العرض.',
      },
      {
        id: 'marketing',
        name: 'التسويق',
        description:
          'تُستخدم لعرض محتوى ذي صلة وقياس فعالية الحملات. متوقّفة افتراضيًا.',
      },
    ],
  },
  de: {
    title: 'Ihre Privatsphäre ist uns wichtig',
    settingsTitle: 'Cookie-Einstellungen',
    intro:
      'Wir verwenden Cookies und ähnliche Speichermechanismen, um Sie angemeldet zu halten, Ihre Einstellungen zu merken und zu verstehen, wie diese App genutzt wird. Sie entscheiden, was erlaubt ist – unbedingt erforderliche Speicherung ist immer aktiv.',
    note: 'Sie können Ihre Auswahl jederzeit über die Schaltfläche „Cookie-Einstellungen“ ändern.',
    languageLabel: 'Sprache wählen',
    alwaysActive: 'Immer aktiv',
    allow: 'Erlauben',
    acceptAll: 'Alle akzeptieren',
    rejectNonEssential: 'Nicht notwendige ablehnen',
    customize: 'Anpassen',
    savePreferences: 'Einstellungen speichern',
    back: 'Zurück',
    reopen: 'Cookie-Einstellungen',
    categories: [
      {
        id: 'necessary',
        name: 'Unbedingt erforderlich',
        description:
          'Erforderlich für Anmeldung, Sicherheit und das Merken Ihrer Auswahl. Diese können nicht deaktiviert werden.',
      },
      {
        id: 'analytics',
        name: 'Analyse',
        description:
          'Hilft uns zu sehen, welche Seiten besucht werden, um die App zu verbessern.',
      },
      {
        id: 'preferences',
        name: 'Einstellungen',
        description:
          'Merkt sich Auswahlen wie Sprache und Anzeigeeinstellungen.',
      },
      {
        id: 'marketing',
        name: 'Marketing',
        description:
          'Wird für relevante Inhalte und zur Messung von Kampagnen verwendet. Standardmäßig deaktiviert.',
      },
    ],
  },
  tr: {
    title: 'Gizliliğiniz önemli',
    settingsTitle: 'Çerez tercihleri',
    intro:
      'Oturumunuzu açık tutmak, tercihlerinizi hatırlamak ve bu uygulamanın nasıl kullanıldığını anlamak için çerezler ve benzeri depolama yöntemleri kullanıyoruz. Neye izin verileceğine siz karar verirsiniz — kesinlikle gerekli depolama her zaman açıktır.',
    note: 'Seçiminizi istediğiniz zaman “Çerez ayarları” düğmesiyle değiştirebilirsiniz.',
    languageLabel: 'Dil seçin',
    alwaysActive: 'Her zaman açık',
    allow: 'İzin ver',
    acceptAll: 'Tümünü kabul et',
    rejectNonEssential: 'Gereksiz olanları reddet',
    customize: 'Özelleştir',
    savePreferences: 'Tercihleri kaydet',
    back: 'Geri',
    reopen: 'Çerez ayarları',
    categories: [
      {
        id: 'necessary',
        name: 'Kesinlikle gerekli',
        description:
          'Oturum açma, güvenlik ve çerez tercihinizi hatırlamak için gereklidir. Kapatılamaz.',
      },
      {
        id: 'analytics',
        name: 'Analiz',
        description:
          'Uygulamayı iyileştirmek için hangi sayfaların ziyaret edildiğini görmemize yardımcı olur.',
      },
      {
        id: 'preferences',
        name: 'Tercihler',
        description: 'Dil ve görüntü ayarları gibi seçimleri hatırlar.',
      },
      {
        id: 'marketing',
        name: 'Pazarlama',
        description:
          'İlgili içeriği göstermek ve kampanyaları ölçmek için kullanılır. Varsayılan olarak kapalıdır.',
      },
    ],
  },
};

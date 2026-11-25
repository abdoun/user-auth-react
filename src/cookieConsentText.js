export const LANGUAGES = ['en', 'ar'];

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
};

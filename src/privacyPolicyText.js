export const privacyPolicyText = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 27 November 2026',
    intro:
      'This policy explains what personal data this sample application handles, why it is used, and what choices you have. It applies to the frontend at localhost:3001, the companion authentication frontend at localhost:3002, and the Node.js/MySQL backend they call.',
    languageLabel: 'Choose language',
    sections: [
      {
        id: 'controller',
        heading: 'Who is responsible',
        paragraphs: [
          'This is a demonstration project maintained by the repository owner. The operator of the deployed app is the data controller. See the Contact section below for how to get in touch.',
        ],
      },
      {
        id: 'collected',
        heading: 'Data we collect',
        items: [
          {
            term: 'Account data',
            description:
              'Your name, email address, and password from the registration form. The password is sent to the backend and is not stored in your browser.',
          },
          {
            term: 'Sign-in data',
            description:
              'The email address and password you enter on the login screen.',
          },
          {
            term: 'Session data',
            description:
              'A JSON Web Token (JWT) issued by the backend after a successful sign-in. It is stored in this browser under localStorage.token and in a cookie named jwt_token.',
          },
          {
            term: 'Preferences',
            description:
              'Your answer to the cookie notice (localStorage.cookieConsent) and the language you selected (localStorage.consentLanguage).',
          },
        ],
        paragraphs: [
          'No analytics, advertising, or other tracking data is collected by this sample.',
        ],
      },
      {
        id: 'purposes',
        heading: 'Why we use it',
        paragraphs: [
          'The data is used to create and authenticate accounts, keep you signed in, protect the profile and users pages, remember your language and your answer to the cookie notice, and keep the app working correctly. We do not sell personal data.',
        ],
      },
      {
        id: 'storage',
        heading: 'Cookies and local storage',
        items: [
          {
            term: 'jwt_token (cookie)',
            description:
              'Strictly necessary. Set on localhost with SameSite=Lax, path /, and an expiry matching the token. It shares one sign-in session between the two local frontends and is removed on logout.',
          },
          {
            term: 'token (localStorage)',
            description:
              'Strictly necessary. Keeps you signed in on this frontend; removed on logout or when the token expires.',
          },
          {
            term: 'cookieConsent (localStorage)',
            description:
              'Strictly necessary. Remembers whether you accepted or rejected the notice so it is not shown again.',
          },
          {
            term: 'consentLanguage (localStorage)',
            description:
              'Strictly necessary. Remembers the language chosen for the notice and this policy.',
          },
        ],
      },
      {
        id: 'sharing',
        heading: 'Sharing and third parties',
        paragraphs: [
          'Account and sign-in data is sent only to the backend API at localhost:3000. The two local frontends share the sign-in cookie described above; no other party receives it.',
          'No analytics, advertising, or other third-party services are integrated in this sample.',
        ],
      },
      {
        id: 'retention',
        heading: 'How long data is kept',
        paragraphs: [
          'The session token expires according to its JWT expiry time and is removed on logout or expiry. The language and notice choices remain in your browser until you clear site data.',
          'Account records are stored in the backend MySQL database and are kept according to that backend configuration.',
        ],
      },
      {
        id: 'rights',
        heading: 'Your choices and rights',
        paragraphs: [
          'You can review the notice and change your answer at any time with the Cookie settings button. Logging out removes your session from this browser, and clearing site data removes all cookies and local storage.',
          'You may ask to access, correct, or delete your account data by contacting the project owner. Depending on where you live, you may also have rights to object to processing or request portability of your data.',
        ],
      },
      {
        id: 'changes',
        heading: 'Changes to this policy',
        paragraphs: [
          'This policy may be updated when the application changes. The date at the top indicates the current version.',
        ],
      },
      {
        id: 'contact',
        heading: 'Contact',
        paragraphs: [
          'For privacy questions, open an issue at github.com/abdoun/user-auth-react/issues.',
        ],
      },
    ],
  },
  ar: {
    title: 'سياسة الخصوصية',
    updated: 'آخر تحديث: 27 نوفمبر 2026',
    intro:
      'تشرح هذه السياسة بيانات الأشخاص التي يعالجها هذا التطبيق النموذجي، والسبب في استخدامها، والخيارات المتاحة لك. تنطبق على الواجهة أمام localhost:3001، وواجهة المصادقة المرافقة على localhost:3002، وخادم Node.js/MySQL الذي تستدعيانه.',
    languageLabel: 'اختر اللغة',
    sections: [
      {
        id: 'controller',
        heading: 'من المسؤول',
        paragraphs: [
          'هذا مشروع توضيحي يديره صاحب المستودع، وهو مشغّل التطبيق المنشور مسؤولاً عن معالجة البيانات. راجع قسم «اتصل بنا» أدناه لمعرفة طريقة التواصل.',
        ],
      },
      {
        id: 'collected',
        heading: 'البيانات التي نجمعها',
        items: [
          {
            term: 'بيانات الحساب',
            description:
              'الاسم وعنوان البريد الإلكتروني وكلمة المرور من نموذج التسجيل. تُرسل كلمة المرور إلى الخادم ولا تُخزّن في متصفحك.',
          },
          {
            term: 'بيانات تسجيل الدخول',
            description:
              'عنوان البريد الإلكتروني وكلمة المرور التي تُدخلها عند الدخول.',
          },
          {
            term: 'بيانات الجلسة',
            description:
              'رمز JSON Web Token (JWT) يصدره الخادم بعد تسجيل الدخول بنجاح. يُخزّن في المتصفح تحت localStorage.token وفي ملف تعريف ارتباط باسم jwt_token.',
          },
          {
            term: 'التفضيلات',
            description:
              'إجابتك على إشعار الكوكيز (localStorage.cookieConsent) واللغة التي اخترتها (localStorage.consentLanguage).',
          },
        ],
        paragraphs: [
          'لا يجمع هذا النموذج أي بيانات تحليلات أو إعلانات أو تتبع أخرى.',
        ],
      },
      {
        id: 'purposes',
        heading: 'لماذا نستخدم البيانات',
        paragraphs: [
          'تُستخدم البيانات لإنشاء الحسابات والمصادقة عليها، وإبقائك مسجّل الدخول، وحماية صفحتي الملف الشخصي والمستخدمين، وتذكّر لغتك وإجابتك على إشعار الكوكيز، وإبقاء التطبيق يعمل بشكل صحيح. لا نبيع البيانات الشخصية.',
        ],
      },
      {
        id: 'storage',
        heading: 'ملفات تعريف الارتباط والتخزين المحلي',
        items: [
          {
            term: 'jwt_token (كوكي)',
            description:
              'ضروري تمامًا. يُضبط على localhost مع SameSite=Lax والمسار / وتاريخ انتهاء مطابق للرمز. يشارك جلسة الدخول بين الواجهتين المحليتين ويُحذف عند تسجيل الخروج.',
          },
          {
            term: 'token (localStorage)',
            description:
              'ضروري تمامًا. يُبقيك مسجّل الدخول في هذه الواجهة، ويُحذف عند الخروج أو انتهاء صلاحية الرمز.',
          },
          {
            term: 'cookieConsent (localStorage)',
            description:
              'ضروري تمامًا. يتذكّر ما إذا قبلت الإشعار أو رفضته حتى لا يظهر مجددًا.',
          },
          {
            term: 'consentLanguage (localStorage)',
            description:
              'ضروري تمامًا. يتذكّر اللغة المختارة للإشعار وهذه السياسة.',
          },
        ],
      },
      {
        id: 'sharing',
        heading: 'المشاركة وأطراف ثالثة',
        paragraphs: [
          'تُرسل بيانات الحساب وتسجيل الدخول إلى واجهة الخادم على localhost:3000 فقط. وتتشارك الواجهتان المحليتان ملف تعريف الدخول المذكور أعلاه، ولا يصل إليه أي طرف آخر.',
          'لا توجد خدمات تحليلات أو إعلانات أو خدمات أخرى من أطراف ثالثة مدمجة في هذا النموذج.',
        ],
      },
      {
        id: 'retention',
        heading: 'مدة الاحتفاظ بالبيانات',
        paragraphs: [
          'تنتهي صلاحية رمز الجلسة وفق تاريخ الانتهاء في JWT، ويُحذف عند تسجيل الخروج أو انتهاء الصلاحية. تبقى اللغة وإجابة الإشعار في متصفحك حتى تمسح بيانات الموقع.',
          'تُحفظ سجلات الحساب في قاعدة بيانات الخادم MySQL وتُحتفظ بها وفق إعدادات ذلك الخادم.',
        ],
      },
      {
        id: 'rights',
        heading: 'خياراتك وحقوقك',
        paragraphs: [
          'يمكنك مراجعة الإشعار وتغيير إجابتك في أي وقت عبر زر «إعدادات الكوكيز». ويؤدي تسجيل الخروج إلى إزالة جلسة الدخول من هذا المتصفح، ومسح بيانات الموقع إلى إزالة جميع الكوكيز والتخزين المحلي.',
          'يمكنك طلب الاطلاع على بيانات حسابك أو تصحيحها أو حذفها بالتواصل مع صاحب المشروع. وقد يكون لك أيضًا الحق في الاعتراض على المعالجة أو طلب نقل بياناتك بحسب بلد إقامتك.',
        ],
      },
      {
        id: 'changes',
        heading: 'تعديلات على هذه السياسة',
        paragraphs: [
          'قد تُحدَّث هذه السياسة عند تغيّر التطبيق. يوضح التاريخ في الأعلى النسخة الحالية.',
        ],
      },
      {
        id: 'contact',
        heading: 'اتصل بنا',
        paragraphs: [
          'لأسئلة الخصوصية، افتح issue على github.com/abdoun/user-auth-react/issues.',
        ],
      },
    ],
  },
  de: {
    title: 'Datenschutzerklärung',
    updated: 'Zuletzt aktualisiert: 27. November 2026',
    intro:
      'Diese Erklärung beschreibt, welche personenbezogenen Daten diese Beispielanwendung verarbeitet, warum sie verwendet werden und welche Auswahlmöglichkeiten Sie haben. Sie gilt für das Frontend unter localhost:3001, das begleitende Authentifizierungs-Frontend unter localhost:3002 und das von beiden genutzte Node.js/MySQL-Backend.',
    languageLabel: 'Sprache wählen',
    sections: [
      {
        id: 'controller',
        heading: 'Verantwortlicher',
        paragraphs: [
          'Dies ist ein Demonstrationsprojekt des Repository-Inhabers. Der Betreiber der bereitgestellten Anwendung ist für die Datenverarbeitung verantwortlich. Kontaktmöglichkeiten finden Sie im Abschnitt Kontakt.',
        ],
      },
      {
        id: 'collected',
        heading: 'Welche Daten wir erfassen',
        items: [
          {
            term: 'Kontodaten',
            description:
              'Name, E-Mail-Adresse und Passwort aus dem Registrierungsformular. Das Passwort wird an das Backend gesendet und nicht im Browser gespeichert.',
          },
          {
            term: 'Anmeldedaten',
            description:
              'Die E-Mail-Adresse und das Passwort, die Sie im Anmeldeformular eingeben.',
          },
          {
            term: 'Sitzungsdaten',
            description:
              'Ein vom Backend nach erfolgreicher Anmeldung ausgestelltes JSON Web Token (JWT). Es wird im localStorage unter token und in einem Cookie namens jwt_token gespeichert.',
          },
          {
            term: 'Einstellungen',
            description:
              'Ihre Antwort auf den Cookie-Hinweis (localStorage.cookieConsent) und die gewählte Sprache (localStorage.consentLanguage).',
          },
        ],
        paragraphs: [
          'Dieses Beispiel erhebt keine Analyse-, Werbe- oder sonstigen Tracking-Daten.',
        ],
      },
      {
        id: 'purposes',
        heading: 'Wofür wir die Daten verwenden',
        paragraphs: [
          'Die Daten werden verwendet, um Konten zu erstellen und zu authentifizieren, Sie angemeldet zu halten, die Seiten Profil und Benutzer zu schützen, Ihre Sprache und Ihre Antwort auf den Cookie-Hinweis zu merken und den Betrieb der App sicherzustellen. Wir verkaufen keine personenbezogenen Daten.',
        ],
      },
      {
        id: 'storage',
        heading: 'Cookies und lokaler Speicher',
        items: [
          {
            term: 'jwt_token (Cookie)',
            description:
              'Unbedingt erforderlich. Für localhost gesetzt mit SameSite=Lax, Pfad / und einer Ablaufzeit entsprechend dem Token. Es teilt eine Anmeldesitzung zwischen den beiden lokalen Frontends und wird beim Logout entfernt.',
          },
          {
            term: 'token (localStorage)',
            description:
              'Unbedingt erforderlich. Hält Sie in diesem Frontend angemeldet; wird beim Logout oder bei Token-Ablauf entfernt.',
          },
          {
            term: 'cookieConsent (localStorage)',
            description:
              'Unbedingt erforderlich. Merkt sich, ob Sie den Hinweis akzeptiert oder abgelehnt haben, damit er nicht erneut erscheint.',
          },
          {
            term: 'consentLanguage (localStorage)',
            description:
              'Unbedingt erforderlich. Merkt sich die gewählte Sprache für den Hinweis und diese Erklärung.',
          },
        ],
      },
      {
        id: 'sharing',
        heading: 'Weitergabe und Drittanbieter',
        paragraphs: [
          'Konto- und Anmeldedaten werden nur an die Backend-API unter localhost:3000 gesendet. Die beiden lokalen Frontends teilen das oben beschriebene Anmelde-Cookie; andere Empfänger gibt es nicht.',
          'Dieses Beispiel enthält keine Analyse-, Werbe- oder sonstigen Dienste von Drittanbietern.',
        ],
      },
      {
        id: 'retention',
        heading: 'Wie lange Daten gespeichert werden',
        paragraphs: [
          'Das Sitzungs-Token läuft gemäß seiner JWT-Ablaufzeit ab und wird beim Logout oder Ablauf entfernt. Sprach- und Hinweiswahl bleiben im Browser, bis Sie die Websitedaten löschen.',
          'Kontodaten werden in der MySQL-Datenbank des Backends gespeichert und entsprechend dessen Konfiguration aufbewahrt.',
        ],
      },
      {
        id: 'rights',
        heading: 'Ihre Auswahl und Rechte',
        paragraphs: [
          'Sie können den Hinweis jederzeit über die Schaltfläche Cookie-Einstellungen aufrufen und Ihre Antwort ändern. Abmelden entfernt Ihre Sitzung aus diesem Browser; das Löschen der Websitedaten entfernt alle Cookies und den lokalen Speicher.',
          'Sie können Auskunft, Berichtigung oder Löschung Ihrer Kontodaten verlangen, indem Sie den Projektinhaber kontaktieren. Je nach Aufenthaltsort haben Sie möglicherweise auch das Recht, der Verarbeitung zu widersprechen oder die Übertragbarkeit Ihrer Daten zu verlangen.',
        ],
      },
      {
        id: 'changes',
        heading: 'Änderungen dieser Erklärung',
        paragraphs: [
          'Diese Erklärung kann bei Änderungen an der Anwendung aktualisiert werden. Das Datum oben kennzeichnet die aktuelle Fassung.',
        ],
      },
      {
        id: 'contact',
        heading: 'Kontakt',
        paragraphs: [
          'Bei Datenschutzfragen eröffnen Sie bitte ein Issue unter github.com/abdoun/user-auth-react/issues.',
        ],
      },
    ],
  },
  tr: {
    title: 'Gizlilik Politikası',
    updated: 'Son güncelleme: 27 Kasım 2026',
    intro:
      'Bu politika, bu örnek uygulamanın hangi kişisel verileri işlediğini, neden kullanıldığını ve hangi seçeneklerinize sahip olduğunuzu açıklar. localhost:3001 arayüzü, localhost:3002 üzerindeki kimlik doğrulama arayüzü ve bunların kullandığı Node.js/MySQL sunucusu için geçerlidir.',
    languageLabel: 'Dil seçin',
    sections: [
      {
        id: 'controller',
        heading: 'Sorumlu kişi',
        paragraphs: [
          'Bu bir demo projedir ve depo sahibi tarafından yürütülür. Yayınlanan uygulamanın işletmecisi veri sorumlusudur. İletişim için aşağıdaki İletişim bölümüne bakın.',
        ],
      },
      {
        id: 'collected',
        heading: 'Topladığımız veriler',
        items: [
          {
            term: 'Hesap bilgileri',
            description:
              'Kayıt formundaki adınız, e-posta adresiniz ve şifreniz. Şifre sunucuya gönderilir, tarayıcınızda saklanmaz.',
          },
          {
            term: 'Giriş bilgileri',
            description: 'Giriş ekranına girdiğiniz e-posta adresi ve şifre.',
          },
          {
            term: 'Oturum verileri',
            description:
              'Başarılı girişten sonra sunucunun verdiği JSON Web Token (JWT). Tarayıcıda localStorage.token ve jwt_token adlı çerezde saklanır.',
          },
          {
            term: 'Tercihler',
            description:
              'Çerez bildirimine verdiğiniz yanıt (localStorage.cookieConsent) ve seçtiğiniz dil (localStorage.consentLanguage).',
          },
        ],
        paragraphs: [
          'Bu örnek analiz, reklam veya başka bir izleme verisi toplamaz.',
        ],
      },
      {
        id: 'purposes',
        heading: 'Verileri neden kullanıyoruz',
        paragraphs: [
          'Veriler hesap oluşturmak ve doğrulamak, sizi oturumda tutmak, profil ve kullanıcılar sayfalarını korumak, dilinizi ve çerez bildirimine verdiğiniz yanıtı hatırlamak ve uygulamanın düzgün çalışmasını sağlamak için kullanılır. Kişisel verileri satmıyoruz.',
        ],
      },
      {
        id: 'storage',
        heading: 'Çerezler ve yerel depolama',
        items: [
          {
            term: 'jwt_token (çerez)',
            description:
              'Kesinlikle gerekli. localhost için SameSite=Lax, / yolu ve belirtecin süresiyle ayarlanır. İki yerel arayüz arasında tek giriş oturumunu paylaşır ve çıkışta silinir.',
          },
          {
            term: 'token (localStorage)',
            description:
              'Kesinlikle gerekli. Bu arayüzde oturumunuzu açık tutar; çıkışta veya süre dolunca silinir.',
          },
          {
            term: 'cookieConsent (localStorage)',
            description:
              'Kesinlikle gerekli. Bildirimi kabul edip etmediğinizi hatırlar, böylece tekrar gösterilmez.',
          },
          {
            term: 'consentLanguage (localStorage)',
            description:
              'Kesinlikle gerekli. Bildirim ve bu politika için seçilen dili hatırlar.',
          },
        ],
      },
      {
        id: 'sharing',
        heading: 'Paylaşım ve üçüncü taraflar',
        paragraphs: [
          'Hesap ve giriş verileri yalnızca localhost:3000 adresindeki sunucu API’sine gönderilir. İki yerel arayüz yukarıda açıklanan giriş çerezini paylaşır; başka bir taraf almaz.',
          'Bu örnekte analiz, reklam veya başka bir üçüncü taraf hizmeti yoktur.',
        ],
      },
      {
        id: 'retention',
        heading: 'Verilerin saklanma süresi',
        paragraphs: [
          'Oturum belirteci JWT süresine göre sona erer ve çıkışta veya süre dolunca silinir. Dil ve bildirim seçimi, site verilerini temizleyene kadar tarayıcınızda kalır.',
          'Hesap kayıtları sunucunun MySQL veritabanında saklanır ve o sunucunun yapılandırmasına göre tutulur.',
        ],
      },
      {
        id: 'rights',
        heading: 'Seçenekleriniz ve haklarınız',
        paragraphs: [
          'Çerez ayarları düğmesiyle bildirimi istediğiniz zaman görüntüleyebilir ve yanıtınızı değiştirebilirsiniz. Çıkış yapmak oturumu bu tarayıcıdan kaldırır; site verilerini temizlemek tüm çerezleri ve yerel depolamayı siler.',
          'Proje sahibiyle iletişime geçerek hesap verilerinize erişebilir, düzeltebilir veya silebilirsiniz. Bulunduğunuz yere bağlı olarak işlemeyi itiraz etme veya verilerinizin taşınabilirliğini isteme hakkınız da olabilir.',
        ],
      },
      {
        id: 'changes',
        heading: 'Bu politikanın değişiklikleri',
        paragraphs: [
          'Uygulama değiştikçe bu politika güncellenebilir. Üstteki tarih güncel sürümü gösterir.',
        ],
      },
      {
        id: 'contact',
        heading: 'İletişim',
        paragraphs: [
          'Gizlilik soruları için github.com/abdoun/user-auth-react/issues adresinde bir issue açın.',
        ],
      },
    ],
  },
};

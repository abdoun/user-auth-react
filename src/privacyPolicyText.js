export const privacyPolicyText = {
  en: {
    title: 'Privacy Policy',
    updated: 'Last updated: 27 November 2026',
    intro:
      'This policy explains what personal data this sample application handles, why it is used, and what choices you have. It applies to this frontend, the companion authentication frontend, and the Node.js/MySQL backend they call.',
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
              'Your name, email address, and password from the registration form. Only a bcrypt hash of the password is stored; the plaintext password is not kept in your browser or in the database.',
          },
          {
            term: 'Sign-in data',
            description:
              'The email address and password you enter on the login screen. The password is checked against its stored hash and is never logged or returned in a response.',
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
        id: 'legal-basis',
        heading: 'Legal basis',
        paragraphs: [
          'Account and sign-in data is processed to provide the service you asked for (performance of a contract, GDPR Art. 6(1)(b)). Security measures, including rate limiting and the strictly necessary storage described below, are based on our legitimate interest in keeping the service safe (Art. 6(1)(f)). We do not rely on consent for strictly necessary storage.',
        ],
      },
      {
        id: 'security',
        heading: 'Passwords and security',
        items: [
          {
            term: 'Password hashing',
            description:
              'Registration hashes passwords with bcrypt at cost 12; login verifies them with bcrypt.compare(). The database stores only the hash in a VARCHAR(255) column, never the plaintext password.',
          },
          {
            term: 'Brute-force protection',
            description:
              'The backend limits requests to 5 login attempts and 10 registration attempts per 15 minutes.',
          },
          {
            term: 'Server logs',
            description:
              'The backend logs only the request method, URL, and Origin. Credentials are not logged.',
          },
        ],
        paragraphs: [
          'Because bcrypt only processes the first 72 bytes of input, please use a password of at most 72 bytes. Secrets such as JWT_SECRET are kept out of the repository and should be strong in a production deployment.',
        ],
      },
      {
        id: 'token',
        heading: 'About your sign-in token',
        paragraphs: [
          'The JWT issued at login contains your name and email address. It is signed, not encrypted, so anyone who obtains the token can read those details. Treat it like a password: do not share it, and log out when you are done.',
          'The cookie is scoped to localhost, uses SameSite=Lax, and expires with the token. Logging out removes the token from this browser and clears the cookie.',
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
          'Account and sign-in data is sent only to the backend API. The two local frontends share the sign-in cookie described above; no other party receives it.',
          'No analytics, advertising, or other third-party services are integrated in this sample.',
        ],
      },
      {
        id: 'retention',
        heading: 'Retention and deletion',
        paragraphs: [
          'The session token expires according to its JWT expiry time and is removed on logout or expiry. The language and notice choices remain in your browser until you clear site data.',
          'This sample has no automatic cleanup schedule for user records. You can request deletion of your account through the users API, and you should not enter real personal data into a demo deployment.',
        ],
      },
      {
        id: 'rights',
        heading: 'Your choices and rights',
        paragraphs: [
          'You can review the notice and change your answer at any time with the Cookie settings button. Logging out removes your session from this browser, and clearing site data removes all cookies and local storage.',
          'The users API supports reading, correcting, and deleting your account record (GET, PUT, and DELETE on /users/:id), which covers access, rectification, and erasure requests. For other requests, contact the project owner. Depending on where you live, you may also have rights to object to processing or request portability of your data.',
        ],
      },
      {
        id: 'limits',
        heading: 'Limits of this sample',
        paragraphs: [
          'This demo is not, on its own, a GDPR-compliant production service. HTTPS enforcement and HSTS must be configured at the reverse proxy or load balancer; the application code does not enforce them.',
          'The MySQL volume in the sample Docker setup is not encrypted at rest. Log files should not be committed to a repository, and a strong JWT_SECRET must be configured before real deployment.',
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
      'تشرح هذه السياسة بيانات الأشخاص التي يعالجها هذا التطبيق النموذجي، والسبب في استخدامها، والخيارات المتاحة لك. تنطبق على هذه الواجهة، وواجهة المصادقة المرافقة، وخادم Node.js/MySQL الذي تستدعيانه.',
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
              'الاسم وعنوان البريد الإلكتروني وكلمة المرور من نموذج التسجيل. يُخزّن من كلمة المرور تجزئة bcrypt فقط، ولا تُحفظ كلمة المرور الصريحة في المتصفح أو في قاعدة البيانات.',
          },
          {
            term: 'بيانات تسجيل الدخول',
            description:
              'عنوان البريد الإلكتروني وكلمة المرور التي تُدخلها عند الدخول. تُقارن كلمة المرور مع التجزئة المخزّنة، ولا تُسجّل أو تُعاد في الاستجابة.',
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
        id: 'legal-basis',
        heading: 'الأساس القانوني',
        paragraphs: [
          'تُعالَج بيانات الحساب وتسجيل الدخول لتقديم الخدمة التي طلبتها (تنفيذ العقد، المادة 6/1/ب من GDPR). وتستند التدابير الأمنية، مثل تحديد عدد المحاولات والتخزين الضروري تمامًا الموضح أدناه، إلى مصلحتنا المشروعة في الحفاظ على أمان الخدمة (المادة 6/1/و). لا نعتمد على الموافقة للتخزين الضروري تمامًا.',
        ],
      },
      {
        id: 'security',
        heading: 'كلمات المرور والأمان',
        items: [
          {
            term: 'تجزئة كلمة المرور',
            description:
              'يستخدم التسجيل تجزئة bcrypt مع معامل تكلفة 12، ويتحقق تسجيل الدخول باستخدام bcrypt.compare(). تخزّن قاعدة البيانات التجزئة فقط في عمود VARCHAR(255)، وليس كلمة المرور الصريحة.',
          },
          {
            term: 'الحماية من التخمين',
            description:
              'يحدّد الخادم الطلبات إلى 5 محاولات دخول و10 محاولات تسجيل كل 15 دقيقة.',
          },
          {
            term: 'سجلات الخادم',
            description:
              'يسجّل الخادم طريقة الطلب وعنوان URL وOrigin فقط، ولا تُسجّل بيانات الدخول.',
          },
        ],
        paragraphs: [
          'لأن bcrypt يعالج أول 72 بايت فقط، يرجى استخدام كلمة مرور لا تتجاوز 72 بايت. تُحفظ الأسرار مثل JWT_SECRET خارج المستودع، ويجب أن تكون قوية في بيئة الإنتاج.',
        ],
      },
      {
        id: 'token',
        heading: 'عن رمز تسجيل الدخول',
        paragraphs: [
          'يتضمن رمز JWT الصادر عند الدخول اسمك وعنوان بريدك الإلكتروني. وهو موقّع وليس مشفّرًا، لذا يمكن لأي شخص يحصل عليه قراءة هذه البيانات. عامل الرمز كلمة مرور: لا تشاركه، وسجّل الخروج عند الانتهاء.',
          'يُضبط الكوكي على localhost مع SameSite=Lax وينتهي مع الرمز. ويؤدي تسجيل الخروج إلى إزالة الرمز من هذا المتصفح ومسح الكوكي.',
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
          'تُرسل بيانات الحساب وتسجيل الدخول إلى واجهة الخادم فقط. وتتشارك الواجهتان المحليتان ملف تعريف الدخول المذكور أعلاه، ولا يصل إليه أي طرف آخر.',
          'لا توجد خدمات تحليلات أو إعلانات أو خدمات أخرى من أطراف ثالثة مدمجة في هذا النموذج.',
        ],
      },
      {
        id: 'retention',
        heading: 'الاحتفاظ بالبيانات وحذفها',
        paragraphs: [
          'تنتهي صلاحية رمز الجلسة وفق تاريخ الانتهاء في JWT، ويُحذف عند تسجيل الخروج أو انتهاء الصلاحية. تبقى اللغة وإجابة الإشعار في متصفحك حتى تمسح بيانات الموقع.',
          'لا يوجد جدول تنظيف تلقائي لسجلات المستخدمين في هذا النموذج. يمكنك طلب حذف حسابك عبر واجهة المستخدمين، ولا تُدخل بيانات شخصية حقيقية في نشر تجريبي.',
        ],
      },
      {
        id: 'rights',
        heading: 'خياراتك وحقوقك',
        paragraphs: [
          'يمكنك مراجعة الإشعار وتغيير إجابتك في أي وقت عبر زر «إعدادات الكوكيز». ويؤدي تسجيل الخروج إلى إزالة جلسة الدخول من هذا المتصفح، ومسح بيانات الموقع إلى إزالة جميع الكوكيز والتخزين المحلي.',
          'تدعم واجهة المستخدمين قراءة سجل حسابك وتعديله وحذفه (GET وPUT وDELETE على /users/:id)، مما يغطي طلبات الاطلاع والتصحيح والحذف. للطلبات الأخرى تواصل مع صاحب المشروع. وقد يكون لك أيضًا الحق في الاعتراض على المعالجة أو طلب نقل بياناتك بحسب بلد إقامتك.',
        ],
      },
      {
        id: 'limits',
        heading: 'حدود هذا النموذج',
        paragraphs: [
          'هذا العرض التوضيحي ليس بحد ذاته خدمة متوافقة مع GDPR في بيئة الإنتاج. يجب تفعيل HTTPS وHSTS على الوكيل العكسي أو موازن التحميل؛ فكود التطبيق لا يفرضهما.',
          'وحدة MySQL في إعداد Docker النموذجي غير مشفّرة أثناء التخزين. ولا ينبغي إيداع ملفات السجلات في المستودع، ويجب ضبط JWT_SECRET قوي قبل أي نشر حقيقي.',
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
      'Diese Erklärung beschreibt, welche personenbezogenen Daten diese Beispielanwendung verarbeitet, warum sie verwendet werden und welche Auswahlmöglichkeiten Sie haben. Sie gilt für dieses Frontend, das begleitende Authentifizierungs-Frontend und das von beiden genutzte Node.js/MySQL-Backend.',
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
              'Name, E-Mail-Adresse und Passwort aus dem Registrierungsformular. Vom Passwort wird nur ein bcrypt-Hash gespeichert; das Klartext-Passwort wird weder im Browser noch in der Datenbank aufbewahrt.',
          },
          {
            term: 'Anmeldedaten',
            description:
              'Die E-Mail-Adresse und das Passwort, die Sie im Anmeldeformular eingeben. Das Passwort wird mit dem gespeicherten Hash verglichen und weder protokolliert noch in einer Antwort zurückgegeben.',
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
        id: 'legal-basis',
        heading: 'Rechtsgrundlage',
        paragraphs: [
          'Konto- und Anmeldedaten werden zur Erbringung der von Ihnen angeforderten Dienstleistung verarbeitet (Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO). Sicherheitsmaßnahmen wie Ratenbegrenzung und die unten beschriebene unbedingt erforderliche Speicherung beruhen auf unserem berechtigten Interesse an einem sicheren Dienst (Art. 6 Abs. 1 lit. f DSGVO). Für unbedingt erforderliche Speicherung holen wir keine Einwilligung ein.',
        ],
      },
      {
        id: 'security',
        heading: 'Passwörter und Sicherheit',
        items: [
          {
            term: 'Passwort-Hashing',
            description:
              'Bei der Registrierung werden Passwörter mit bcrypt und Kostenparameter 12 gehasht; die Anmeldung prüft sie mit bcrypt.compare(). Die Datenbank speichert nur den Hash in einer VARCHAR(255)-Spalte, niemals das Klartext-Passwort.',
          },
          {
            term: 'Schutz vor Brute-Force',
            description:
              'Das Backend begrenzt Anfragen auf 5 Anmelde- und 10 Registrierungsversuche pro 15 Minuten.',
          },
          {
            term: 'Serverprotokolle',
            description:
              'Das Backend protokolliert nur Methode, URL und Origin. Zugangsdaten werden nicht protokolliert.',
          },
        ],
        paragraphs: [
          'Da bcrypt nur die ersten 72 Bytes verarbeitet, verwenden Sie bitte ein Passwort mit höchstens 72 Bytes. Geheimnisse wie JWT_SECRET werden nicht im Repository gespeichert und sollten in einer Produktivumgebung stark sein.',
        ],
      },
      {
        id: 'token',
        heading: 'Über Ihr Anmelde-Token',
        paragraphs: [
          'Das bei der Anmeldung ausgestellte JWT enthält Ihren Namen und Ihre E-Mail-Adresse. Es ist signiert, aber nicht verschlüsselt, sodass jeder, der das Token erhält, diese Daten lesen kann. Behandeln Sie es wie ein Passwort: geben Sie es nicht weiter und melden Sie sich nach Gebrauch ab.',
          'Das Cookie ist auf localhost gesetzt, verwendet SameSite=Lax und läuft mit dem Token ab. Beim Logout wird das Token aus diesem Browser entfernt und das Cookie gelöscht.',
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
          'Konto- und Anmeldedaten werden nur an die Backend-API gesendet. Die beiden lokalen Frontends teilen das oben beschriebene Anmelde-Cookie; andere Empfänger gibt es nicht.',
          'Dieses Beispiel enthält keine Analyse-, Werbe- oder sonstigen Dienste von Drittanbietern.',
        ],
      },
      {
        id: 'retention',
        heading: 'Aufbewahrung und Löschung',
        paragraphs: [
          'Das Sitzungs-Token läuft gemäß seiner JWT-Ablaufzeit ab und wird beim Logout oder Ablauf entfernt. Sprach- und Hinweiswahl bleiben im Browser, bis Sie die Websitedaten löschen.',
          'Dieses Beispiel sieht keine automatische Löschung von Benutzerdaten vor. Sie können die Löschung Ihres Kontos über die Benutzer-API anfordern; geben Sie in einer Demo-Umgebung keine echten personenbezogenen Daten ein.',
        ],
      },
      {
        id: 'rights',
        heading: 'Ihre Auswahl und Rechte',
        paragraphs: [
          'Sie können den Hinweis jederzeit über die Schaltfläche Cookie-Einstellungen aufrufen und Ihre Antwort ändern. Abmelden entfernt Ihre Sitzung aus diesem Browser; das Löschen der Websitedaten entfernt alle Cookies und den lokalen Speicher.',
          'Die Benutzer-API unterstützt das Lesen, Ändern und Löschen Ihres Kontodatensatzes (GET, PUT und DELETE auf /users/:id), womit Auskunft, Berichtigung und Löschung abgedeckt sind. Für andere Anliegen kontaktieren Sie den Projektinhaber. Je nach Aufenthaltsort haben Sie möglicherweise auch das Recht, der Verarbeitung zu widersprechen oder die Übertragbarkeit Ihrer Daten zu verlangen.',
        ],
      },
      {
        id: 'limits',
        heading: 'Grenzen dieses Beispiels',
        paragraphs: [
          'Diese Demo ist für sich genommen kein DSGVO-konformer Produktivdienst. HTTPS-Durchsetzung und HSTS müssen am Reverse Proxy oder Load Balancer konfiguriert werden; der Anwendungscode erzwingt sie nicht.',
          'Das MySQL-Volume der Beispiel-Docker-Konfiguration ist nicht verschlüsselt. Protokolldateien sollten nicht in ein Repository aufgenommen werden, und vor einem echten Einsatz muss ein starkes JWT_SECRET konfiguriert werden.',
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
      'Bu politika, bu örnek uygulamanın hangi kişisel verileri işlediğini, neden kullanıldığını ve hangi seçeneklerinize sahip olduğunuzu açıklar. Bu arayüz, kimlik doğrulama arayüzü ve bunların kullandığı Node.js/MySQL sunucusu için geçerlidir.',
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
              'Kayıt formundaki adınız, e-posta adresiniz ve şifreniz. Şifrenin yalnızca bcrypt özeti saklanır; düz metin şifre ne tarayıcıda ne de veritabanında tutulur.',
          },
          {
            term: 'Giriş bilgileri',
            description:
              'Giriş ekranına girdiğiniz e-posta adresi ve şifre. Şifre saklanan özetle karşılaştırılır; günlüğe kaydedilmez veya yanıtta döndürülmez.',
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
        id: 'legal-basis',
        heading: 'Hukuki dayanak',
        paragraphs: [
          'Hesap ve giriş verileri, talep ettiğiniz hizmeti sunmak için işlenir (sözleşmenin ifası, GDPR Madde 6/1/b). Hız sınırlama ve aşağıda açıklanan kesinlikle gerekli depolama gibi güvenlik önlemleri, hizmeti güvenli tutma konusundaki meşru menfaatimize dayanır (Madde 6/1/f). Kesinlikle gerekli depolama için onayınıza dayanmıyoruz.',
        ],
      },
      {
        id: 'security',
        heading: 'Şifreler ve güvenlik',
        items: [
          {
            term: 'Şifre özetleme',
            description:
              'Kayıt sırasında şifreler bcrypt ile 12 maliyet değerinde özetlenir; girişte bcrypt.compare() ile doğrulanır. Veritabanı yalnızca VARCHAR(255) sütununda özeti saklar, düz metin şifreyi asla değil.',
          },
          {
            term: 'Kaba kuvvet koruması',
            description:
              'Sunucu, 15 dakikada 5 giriş ve 10 kayıt denemesiyle sınırlar.',
          },
          {
            term: 'Sunucu günlükleri',
            description:
              'Sunucu yalnızca istek yöntemini, URL’yi ve Origin’i kaydeder; giriş bilgileri kaydedilmez.',
          },
        ],
        paragraphs: [
          'bcrypt yalnızca ilk 72 baytı işlediğinden, lütfen en fazla 72 baytlık bir şifre kullanın. JWT_SECRET gibi sırlar depoda tutulmaz ve üretim ortamında güçlü olmalıdır.',
        ],
      },
      {
        id: 'token',
        heading: 'Giriş belirteciniz hakkında',
        paragraphs: [
          'Girişte verilen JWT adınızı ve e-posta adresinizi içerir. Belirteç imzalanmıştır, şifrelenmemiştir; bu nedenle onu ele geçiren biri bu bilgileri okuyabilir. Onu bir şifre gibi koruyun: paylaşmayın ve işiniz bitince çıkış yapın.',
          'Çerez localhost için ayarlanmıştır, SameSite=Lax kullanır ve belirteçle birlikte süresi dolar. Çıkış yapmak belirteci bu tarayıcıdan kaldırır ve çerezi siler.',
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
          'Hesap ve giriş verileri yalnızca sunucu API’sine gönderilir. İki yerel arayüz yukarıda açıklanan giriş çerezini paylaşır; başka bir taraf almaz.',
          'Bu örnekte analiz, reklam veya başka bir üçüncü taraf hizmeti yoktur.',
        ],
      },
      {
        id: 'retention',
        heading: 'Saklama ve silme',
        paragraphs: [
          'Oturum belirteci JWT süresine göre sona erer ve çıkışta veya süre dolunca silinir. Dil ve bildirim seçimi, site verilerini temizleyene kadar tarayıcınızda kalır.',
          'Bu örnekte kullanıcı kayıtları için otomatik temizleme takvimi yoktur. Kullanıcılar API’si üzerinden hesabınızın silinmesini isteyebilirsiniz; demo dağıtımına gerçek kişisel veri girmeyin.',
        ],
      },
      {
        id: 'rights',
        heading: 'Seçenekleriniz ve haklarınız',
        paragraphs: [
          'Çerez ayarları düğmesiyle bildirimi istediğiniz zaman görüntüleyebilir ve yanıtınızı değiştirebilirsiniz. Çıkış yapmak oturumu bu tarayıcıdan kaldırır; site verilerini temizlemek tüm çerezleri ve yerel depolamayı siler.',
          'Kullanıcılar API’si hesap kaydınızı okuma, düzeltme ve silmeyi destekler (/users/:id üzerinde GET, PUT ve DELETE); bu erişim, düzeltme ve silme taleplerini kapsar. Diğer talepler için proje sahibiyle iletişime geçin. Bulunduğunuz yere bağlı olarak işlemeyi itiraz etme veya verilerinizin taşınabilirliğini isteme hakkınız da olabilir.',
        ],
      },
      {
        id: 'limits',
        heading: 'Bu örneğin sınırları',
        paragraphs: [
          'Bu demo tek başına GDPR uyumlu bir üretim hizmeti değildir. HTTPS zorunluluğu ve HSTS, ters proxy veya yük dengeleyici üzerinde yapılandırılmalıdır; uygulama kodu bunları zorlamaz.',
          'Örnek Docker kurulumundaki MySQL birimi depolama sırasında şifrelenmemiştir. Günlük dosyaları depoya eklenmemeli ve gerçek dağıtımdan önce güçlü bir JWT_SECRET ayarlanmalıdır.',
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

/* Dark Premium Overrides — injected before Klaro renders */
(function () {
  var s = document.createElement('style');
  s.textContent = [
    /* Banner */
    '.klaro .cookie-notice{background:#161A20!important;border:1px solid rgba(242,244,248,.06)!important;border-radius:16px 16px 0 0!important;',
    'box-shadow:0 -4px 6px -1px rgba(0,0,0,.35),0 -10px 24px -6px rgba(0,0,0,.5)!important;',
    'font-family:"Plus Jakarta Sans",sans-serif!important;padding:24px 28px!important;',
    '-webkit-font-smoothing:antialiased!important;',
    'animation:klaro-up .35s cubic-bezier(.2,0,0,1) both!important;}',

    '@keyframes klaro-up{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}',

    '.klaro .cn-body p{color:#8A95A3!important;font-size:13px!important;line-height:1.6!important;text-wrap:pretty!important;}',
    '.klaro .cn-title{color:#F2F4F8!important;font-size:15px!important;font-weight:600!important;text-wrap:balance!important;margin-bottom:8px!important;}',
    '.klaro .cn-learn-more{color:#4A8FFF!important;transition:color .15s ease!important;}',
    '.klaro .cn-learn-more:hover{color:#F2F4F8!important;}',

    /* Buttons — concentric radius: notice radius 16px, buttons 8px (= 16 - 8 padding) */
    '.klaro .cm-btn{font-family:"Plus Jakarta Sans",sans-serif!important;font-size:11px!important;font-weight:600!important;',
    'letter-spacing:.09em!important;text-transform:uppercase!important;',
    'padding:10px 20px!important;border-radius:8px!important;min-height:40px!important;',
    '-webkit-font-smoothing:antialiased!important;cursor:pointer!important;',
    'transition:background-color .15s ease,transform .08s ease,border-color .15s ease!important;}',
    '.klaro .cm-btn:active{transform:scale(.96)!important;}',

    /* Accept */
    '.klaro .cm-btn.cm-btn-success,.klaro .cm-btn.cm-btn-accept-all{background:#1a56db!important;color:#fff!important;border:none!important;}',
    '.klaro .cm-btn.cm-btn-success:hover,.klaro .cm-btn.cm-btn-accept-all:hover{background:#0e3a9e!important;}',

    /* Decline */
    '.klaro .cm-btn.cm-btn-danger,.klaro .cm-btn.cm-btn-decline{background:transparent!important;color:#8A95A3!important;border:1px solid rgba(242,244,248,.12)!important;}',
    '.klaro .cm-btn.cm-btn-danger:hover,.klaro .cm-btn.cm-btn-decline:hover{color:#F2F4F8!important;border-color:rgba(242,244,248,.28)!important;}',

    /* Info link */
    '.klaro .cm-btn.cm-btn-info{background:transparent!important;color:#4A8FFF!important;border:none!important;}',
    '.klaro .cm-btn.cm-btn-info:hover{color:#F2F4F8!important;}',

    /* Modal */
    '.klaro .cookie-modal{background:rgba(13,15,18,.88)!important;backdrop-filter:blur(8px)!important;}',
    '.klaro .cm-modal{background:#161A20!important;border:1px solid rgba(242,244,248,.06)!important;border-radius:16px!important;',
    'box-shadow:0 4px 6px -1px rgba(0,0,0,.4),0 12px 40px -8px rgba(0,0,0,.65)!important;',
    'font-family:"Plus Jakarta Sans",sans-serif!important;-webkit-font-smoothing:antialiased!important;}',
    '.klaro .cm-modal .cm-header{border-bottom:1px solid rgba(242,244,248,.06)!important;padding:24px 28px 20px!important;}',
    '.klaro .cm-modal .cm-header h1{color:#F2F4F8!important;font-size:20px!important;font-weight:600!important;text-wrap:balance!important;}',
    '.klaro .cm-modal .cm-body{color:#8A95A3!important;font-size:13px!important;line-height:1.6!important;padding:20px 28px!important;}',
    '.klaro .cm-modal .cm-footer{border-top:1px solid rgba(242,244,248,.06)!important;padding:16px 28px!important;}',

    /* Toggles */
    '.klaro .cm-list-input+.cm-list-label .slider{background:rgba(242,244,248,.12)!important;}',
    '.klaro .cm-list-input:checked+.cm-list-label .slider{background:#1a56db!important;}',

    /* Service items */
    '.klaro .cm-service,.klaro .cm-list-item{border-bottom:1px solid rgba(242,244,248,.05)!important;}',
    '.klaro .cm-service .cm-service-title,.klaro .cm-list-title{color:#F2F4F8!important;font-weight:500!important;}',
    '.klaro .cm-service .cm-service-description,.klaro .cm-list-description{color:#5A6472!important;font-size:12px!important;}',

    /* Footer */
    '.klaro .cm-powered-by,.klaro .cm-powered-by a{color:#5A6472!important;font-size:11px!important;}'
  ].join('');
  document.head.appendChild(s);
})();

var klaroConfig = {
  version: 1,
  elementID: 'klaro',
  storageMethod: 'localStorage',
  storageName: 'klaro-jr',
  cookieExpiresAfterDays: 365,
  privacyPolicy: '/kontakt/datenschutzerklaerung/',
  default: false,
  mustConsent: false,
  acceptAll: true,
  hideDeclineAll: false,
  lang: 'de',

  translations: {
    de: {
      consentNotice: {
        description: 'Wir nutzen Google Analytics, um unsere Website zu verbessern. Ihre Einwilligung ist freiwillig und jederzeit widerrufbar.',
        learnMore: 'Datenschutz'
      },
      consentModal: {
        title: 'Datenschutz-Einstellungen',
        description: 'Hier können Sie einsehen und anpassen, welche Daten wir erheben. Ihre Einwilligung ist freiwillig und kann jederzeit widerrufen werden (Art. 7 Abs. 3 DSGVO).'
      },
      acceptAll: 'Alle akzeptieren',
      declineAll: 'Ablehnen',
      acceptSelected: 'Auswahl speichern',
      close: 'Schließen',
      poweredBy: 'Datenschutz',
      purposes: {
        analytics: 'Analyse'
      },
      googleAnalytics: {
        title: 'Google Analytics 4',
        description: 'Ermöglicht uns zu verstehen, wie Besucher unsere Website nutzen. Keine persönlichen Daten werden gespeichert. IP-Adressen werden anonymisiert.'
      }
    }
  },

  services: [
    {
      name: 'googleAnalytics',
      title: 'Google Analytics 4',
      purposes: ['analytics'],
      onAccept: function() {
        gtag('consent', 'update', {
          'analytics_storage': 'granted'
        });
      },
      onDecline: function() {
        gtag('consent', 'update', {
          'analytics_storage': 'denied'
        });
      }
    }
  ]
};

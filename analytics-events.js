(function () {
  'use strict';

  window.dataLayer = window.dataLayer || [];

  // phone_call — alle tel: Links
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a[href^="tel:"]');
    if (el) {
      window.dataLayer.push({
        event: 'phone_call',
        phone_number: el.getAttribute('href').replace('tel:', '')
      });
    }
  });

  // whatsapp_click — WA-FAB + alle wa.me Links
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a[href*="wa.me"], a[href*="whatsapp.com"]');
    if (el) {
      window.dataLayer.push({
        event: 'whatsapp_click',
        click_location: el.dataset.location || el.closest('[id]')?.id || 'page'
      });
    }
  });

  // generate_lead — alle Formulare
  document.addEventListener('submit', function (e) {
    var form = e.target;
    window.dataLayer.push({
      event: 'generate_lead',
      form_type: form.dataset.formType || form.getAttribute('id') || 'contact'
    });
  });

})();

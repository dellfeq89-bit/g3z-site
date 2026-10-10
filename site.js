// G3Z storefront — tiny, no deps
(function(){
  // Set the current year in the footer
  var y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Inventory: 15 slots already in the DOM (server-rendered). Do nothing fancy.

  // Contact form: validate + friendly messages (no network call — text-only stage)
  var form = document.getElementById('contact-form');
  var feedback = null;
  if (form) {
    feedback = form.querySelector('.form-feedback');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var name = (form.querySelector('#name').value || '').trim();
      var email = (form.querySelector('#email').value || '').trim();
      var msg = (form.querySelector('#msg').value || '').trim();
      if (!name || !email || !msg) {
        if (feedback) {
          feedback.textContent = 'Please fill in all three fields before sending.';
          feedback.classList.remove('ok');
        }
        return;
      }
      if (feedback) {
        feedback.textContent = 'Marked for review. We will reply within 24 hours.';
        feedback.classList.add('ok');
      }
      form.reset();
    });
  }
})();

// JavaScript ====================================
/*let email = document.getElementById('email');

email.addEventListener('mouseover', pointer);

function pointer() {
  email.style.cursor = 'pointer';
}

(function() {
  'use strict';

  window.addEventListener('load', function() {
    var form = document.getElementById('needs-validation');
    form.addEventListener('submit', function(event) {
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  }, false);
})();*/

// jQuery ========================================
$("document").ready(function() {
    $('body').scrollspy({ target: '.navbar' });
});

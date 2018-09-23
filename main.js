// JavaScript ====================================
// let email = document.getElementById('email');
//
// email.addEventListener('mouseover', pointer);
//
// function pointer() {
//   email.style.cursor = 'pointer';
// }
//
// (function() {
//   'use strict';
//
//   window.addEventListener('load', function() {
//     var form = document.getElementById('needs-validation');
//     form.addEventListener('submit', function(event) {
//       if (form.checkValidity() === false) {
//         event.preventDefault();
//         event.stopPropagation();
//       }
//       form.classList.add('was-validated');
//     }, false);
//   }, false);
// })();

// jQuery ========================================
$("document").ready(function() {
  $('body').scrollspy({ target: '.navbar' });

  $(".navbar a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {

      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    }

  });

  $('.nav-link').hover(
    function() {
      $(this).addClass('link-enter');
      $(this).removeClass('link-leave');
    },
    function() {
      $(this).removeClass('link-enter');
      $(this).addClass('link-leave');
    }
  );

  $('#skill-icon').hover(
    function () {
      $(this).addClass('spin-class');
      $(this).removeClass('stop-spin-class');
    }, function () {
      $(this).removeClass('spin-class');
      $(this).addClass('stop-spin-class');
    }
  );

  $('#skill-title').hover(
    function () {
      $(this).addClass('jump-out');
      $(this).removeClass('jump-in');
    }, function () {
      $(this).removeClass('jump-out');
      $(this).addClass('jump-in');
    }
  );

  $('.lang-section-title').hover(
    function () {
      $('#lang-icon').addClass('shake-class');
      $('#lang-title').addClass('jump-out');
      $('#lang-title').removeClass('jump-in');
    }, function () {
      $('#lang-icon').removeClass('shake-class');
      $('#lang-title').removeClass('jump-out');
      $('#lang-title').addClass('jump-in');
    }
  );

  $('.proj-section-title').hover(
    function () {
      $('#proj-icon').addClass('rotate-class');
      $('#proj-title').addClass('jump-out');
      $('#proj-title').removeClass('jump-in');
    }, function () {
      $('#proj-icon').removeClass('rotate-class');
      $('#proj-title').removeClass('jump-out');
      $('#proj-title').addClass('jump-in');
    }
  );

  $('.about-section-title').hover(
    function () {
      $('#about-icon').addClass('roll-class');
      $('#about-title').addClass('jump-out');
      $('#about-title').removeClass('jump-in');
    }, function () {
      $('#about-icon').removeClass('roll-class');
      $('#about-title').removeClass('jump-out');
      $('#about-title').addClass('jump-in');
    }
  );

  $('.contact-section-title').hover(
    function () {
      $('#contact-icon').addClass('shake-class');
      $('#contact-title').addClass('jump-out');
      $('#contact-title').removeClass('jump-in');
    }, function () {
      $('#contact-icon').removeClass('shake-class');
      $('#contact-title').removeClass('jump-out');
      $('#contact-title').addClass('jump-in');
    }
  );

  $('.cont-section-title').hover(
    function () {
      $('#cont-icon').addClass('shake-class');
      $('#cont-title').addClass('jump-out');
      $('#cont-title').removeClass('jump-in');
    }, function () {
      $('#cont-icon').removeClass('shake-class');
      $('#cont-title').removeClass('jump-out');
      $('#cont-title').addClass('jump-in');
    }
  );

  $('.proj-pic-left').hover(
    function() {
      $(this).addClass('left-lower');
      $(this).removeClass('left-raise');
    }, function() {
      $(this).removeClass('left-lower');
      $(this).addClass('left-raise');
    }
  );

  $('.proj-pic-right').hover(
    function() {
      $(this).addClass('right-lower');
      $(this).removeClass('right-raise');
    }, function() {
      $(this).removeClass('right-lower');
      $(this).addClass('right-raise');
    }
  );

});

// Lazy Loading ================================

document.addEventListener("DOMContentLoaded", function() {
  let lazyImages = [].slice.call(document.querySelectorAll("img.lazy"));

  if ("IntersectionObserver" in window) {
    let lazyImageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          let lazyImage = entry.target;
          lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          lazyImageObserver.unobserve(lazyImage);
        }
      });
    });

    lazyImages.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage);
    });
  } else {
    console.log("This browser is not compatible with Intersection Observer.");
  }
});

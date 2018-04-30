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

  $('.skill-section-title')
    .on('click', function (event) {
      $('#p-skills').html('As a full-stack developer, I specialize in front-end web developing, as well as back-end web developing. My web apps are responsive and conform to any screen size, I use bootstrap to help build the design of my web apps, and I also use jQuery mainly for functionality and animations.');
    })
    .hover(
      function () {
        $('#skill-icon').addClass('spin-class');
        $('#skill-title').addClass('jump-out');
        $('#skill-title').removeClass('jump-in');
      }, function () {
        $('#skill-icon').removeClass('spin-class');
        $('#skill-title').removeClass('jump-out');
        $('#skill-title').addClass('jump-in');
      }
    );

  $('#skill-1').on('click', function (event) {
    $('#p-skills').html('yeah haha');
  });

  $('#skill-2').on('click', function (event) {
    $('#p-skills').html('yeah haha 2');
  });

  $('#skill-3').on('click', function (event) {
    $('#p-skills').html('yeah haha 3');
  });

  $('#skill-4').on('click', function (event) {
    $('#p-skills').html('yeah haha 4');
  });

  $('#skill-5').on('click', function (event) {
    $('#p-skills').html('yeah haha 5');
  });

  $('.proj-pic-left').hover(
    function() {
      $('.proj-pic-left').addClass('left-lower');
      $('.proj-pic-left').removeClass('left-raise');
    }, function() {
      $('.proj-pic-left').removeClass('left-lower');
      $('.proj-pic-left').addClass('left-raise');
    }
  );

  $('.proj-pic-right').hover(
    function() {
      $('.proj-pic-right').addClass('right-lower');
      $('.proj-pic-right').removeClass('right-raise');
    }, function() {
      $('.proj-pic-right').removeClass('right-lower');
      $('.proj-pic-right').addClass('right-raise');
    }
  );

});

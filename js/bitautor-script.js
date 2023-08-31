(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function () {
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  // MENU
  $('.navbar-collapse a').on('click', function () {
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function () {
    if ($(".navbar").offset().top > 50) {
      $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
      $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });


  // PARALLAX EFFECT
  $.stellar({
    horizontalScrolling: false,
  });


  // SERVICES IMAGE SELECTION
  $(document).ready(function () {
    $('.nav-tabs a').on('shown.bs.tab', function (event) {
      var newImageSrc = $(event.target).data('img-src'); // Get image URL from data-img-src of the clicked tab
      $('#services-image').attr('src', newImageSrc);      // Set the image URL
    });
  });


  // TEAM SLIDER
  $('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    items: 1,
    loop: true,
    autoplayHoverPause: false,
    autoplay: true,
    smartSpeed: 1000,
  });


  // SMOOTHSCROLL
  $(function () {
    $('.custom-navbar a').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });

})(jQuery);

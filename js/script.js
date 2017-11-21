$(window).on('load', function () {

  // =======
  // Preloader
  // =======

  var $preloader = $('#page-preloader');
  $preloader.delay(1000).fadeOut('slow');

});



$(document).ready(function(){
    "use strict";


  // Cache the window object
  var $window = $(window);


  /* ---------------------------------------------
  Parallax background effect
  --------------------------------------------- */


  $('header[data-type="background"], section[data-type="background"]').each(function() {

    var $bgobj = $(this); // assigning the object

    $window.scroll(function() {

      // scroll the background at var speed
      // the yPos is a negative value because we're scrolling it UP!

      var yPos = -($window.scrollTop() / $bgobj.data('speed'));

      // Put together our final background position
      var coords = '50% ' + yPos + 'px';

      // Move the background
      $bgobj.css({
        backgroundPosition: coords
      });

    }); // end window scroll

  });


  /* ---------------------------------------------
  jQuery for page scrolling feature - requires jQuery Easing plugin
  --------------------------------------------- */


  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: ($($anchor.attr('href')).offset().top - 50)
    }, 1250, 'easeInOutExpo');
    event.preventDefault();
  });
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  })
  // Offset for Main Navigation
  $('#mainNav').affix({
    offset: {
      top: 100
    }
  })


  /* ---------------------------------------------
  For the sticky navigation
  --------------------------------------------- */


  $window.scroll(function() {
    var scroll = $window.scrollTop();

    if (scroll >= 200) {
      $("nav").addClass("sticky");
    } else {
      $("nav").removeClass("sticky");
    }
  });


  /* ---------------------------------------------
      Smooth scroll
  --------------------------------------------- */


  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });


  /* ---------------------------------------------
      Counter
  --------------------------------------------- */

  $('.counter').counterUp({
      delay: 10,
      time: 2000
  });





  /* ---------------------------------------------
      Animations
  --------------------------------------------- */

  $('.js--wp-1').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated fadeInUp")
    },
    offset: '90%'
  });

  $('.js--wp-2').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated zoomIn")
    },
    offset: '90%'
  });

  $('.js--wp-3').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated slideInLeft")
    },
    offset: '80%'
  });

  $('.js--wp-4').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated slideInRight")
    },
    offset: '80%'
  });

  $('.js--wp-5').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated flipInY")
    },
    offset: '60%'
  });

  $('.js--wp-6').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated fadeInUpBig")
    },
    offset: '80%'
  });

  $('.js--wp-7').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated fadeInDownBig")
    },
    offset: '80%'
  });

  $('.js--wp-8').addClass('opa-0').waypoint({
    handler: function() {
      $(this.element).addClass("opa-1 animated pulse")
    },
    offset: '80%'
  });




});

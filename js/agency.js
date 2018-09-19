// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // add affix class to nav
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var nav = $('#mainNav');
      console.log('scroll: ', scroll);
      if (scroll >= 100) {
        nav.addClass('affix');
      }
      if (scroll < 100) {
        nav.removeClass('affix');
      }
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

})(jQuery); // End of use strict

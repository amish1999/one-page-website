
  /* pre loader */

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets
  });


  $(document).ready(function() {


    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


    $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
  });

/* parallax */
    function initParallax() {
    $('#home').parallax("100%", 0.1);
    $('#about').parallax("100%", 0.3);
    $('#service').parallax("100%", 0.2);
    $('#experience').parallax("100%", 0.3);
    $('#education').parallax("100%", 0.1);
    $('#quotes').parallax("100%", 0.3);
    $('#contact').parallax("100%", 0.1);
    $('footer').parallax("100%", 0.2);

  }
  initParallax();

    $(function() {
        $('.custom-navbar a, #home a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });

  new WOW({ mobile: false }).init();


  });

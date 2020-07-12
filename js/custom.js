// JavaScript Document
 $(document).ready(function() {
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                $('nav').removeClass('transparent');
				$('nav').addClass('blacknav');
            }

            else {
                  $('nav').removeClass('blacknav');
            }
      })
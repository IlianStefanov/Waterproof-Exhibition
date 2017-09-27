$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function () {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    });

});

$.getScript("https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js", function () {
    particlesJS('particles-js2', {
        "particles": {
            "number": {
                "value": 80,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#ffffff"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "width": 100,
                    "height": 100
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 5,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 150,
                "color": "#ffffff",
                "opacity": 0.4,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 6,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 400,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true,
        "config_demo": {
            "hide_card": false,
            "background_color": "#b61924",
            "background_image": "",
            "background_position": "50% 50%",
            "background_repeat": "no-repeat",
            "background_size": "cover"
        }
    });

});


(function () {
    "use strict";
    var fullscreenmenu = document.querySelector(".fullscreenmenu");
    var strokes = document.querySelectorAll(".strokes"),
        icon = document.querySelector(".menu"),
        fullscreenmenu = document.querySelector(".fullscreenmenu");
    var hamburger_links = document.querySelector(".hamburger_menu");
    var hamburger_links1 = document.querySelector(".hamburger_menu1");
    var hamburger_links2 = document.querySelector(".hamburger_menu2");
    var hamburger_links3 = document.querySelector(".hamburger_menu3");
    var hamburger_links4 = document.querySelector(".hamburger_menu4");
    
    function transformStart() {
        strokes[0].classList.toggle("animate0")
        strokes[1].classList.toggle("hide");
        strokes[2].classList.toggle("animate2");
        fullscreenmenu.classList.toggle("show");
    }
    hamburger_links.addEventListener("click", transformStart);
    hamburger_links1.addEventListener("click", transformStart);
    hamburger_links2.addEventListener("click", transformStart);
    hamburger_links3.addEventListener("click", transformStart);
    hamburger_links4.addEventListener("click", transformStart);
    icon.addEventListener("click", transformStart);
})();

//(function () {
//    "use strict";
//    var hamburger_links = document.querySelector(".hamburger_menu");
//    var close_link = document.querySelector(".fullscreenmenu");
//    
//    function close_popup_afterClick() {
//        close_link.classList.toggle("hide");
//    }
//    
//    hamburger_links.addEventListener("click", close_popup_afterClick);
//
//})();

$(document).ready(function(){

  $('.hidden').css('display','none');

  $( "#filter button" ).each(function() {

    $(this).on("click", function(){

         var filter = $(this).attr('class');         

      if ( $(this).attr('class') == 'all' ) {
         $('.hidden').contents().appendTo('#posts').hide().show('slow');
         $( "#filter button" ).removeClass('active');
         $(this).addClass('active');
         $("#filter button").attr("disabled", false);
         $(this).attr("disabled", true);
      }
      else {
         $('.post').appendTo('.hidden');
         $('.hidden').contents().appendTo('#posts').hide().show('slow');
         $('.post:not(.' + filter + ')').appendTo('.hidden').hide('slow');
         $( "#filter button" ).removeClass('active');
         $(this).addClass('active');
         $("#filter button").attr("disabled", false);
         $(this).attr("disabled", true);
      };
      
      });

  });

});


// typing animation
  (function($) {
    $.fn.writeText = function(content) {
        var contentArray = content.split(""),
            current = 0,
            elem = this;
        setInterval(function() {
            if(current < contentArray.length) {
                elem.text(elem.text() + contentArray[current++]);
            }
        }, 80);
    };
    
  })(jQuery);

// input text for typing animation 
  $("#holder").writeText("FRONT-END DEVELOPER");
//  $("#holder2").writeText("and");
//  $("#holder3").writeText("FRONT-END DEVELOPER");




$(function () {
    $('.textBox').focus(function () {
         if ($(this).val().trim() == "")
         {
            $(this).prev().css({
                top: '-10px',
                fontSize: '0.7em'
            });
         }
         $(this).prev().css({
            color: '#06C7CE'
         });
    })

    $('.textBox').blur(function () {
         if ($(this).val().trim() == "")
         {
            $(this).prev().css({
                top: '12px',
                fontSize: '0.8em'
            });
         }
         $(this).prev().css({
            color: '#AAA'
        });
    }) 
})



;( function( $ ) {
	"use strict";
	
	$( ".bar" ).each( function() {
		
		var $bar = $( this ),
			 $pct = $bar.find( ".pct" ),
			 data = $bar.data( "bar" );
		
		setTimeout( function() {
			
			$bar
				.css( "background-color", data.color )
				.animate({
					"width": $pct.html()
				}, data.speed || 3000, function() {
					
					$pct.css({
						"color": data.color,
						"opacity": 1
					});
				
				});
			
		}, data.delay || 0 );			
		
	});
		
})( jQuery );

$(document).ready(function(){

 

$(".section").eq(0).animate({"opacity":"1"},1500);  //fade the first div.section in on page load

 

$(".section").attrchange({

    trackValues: true, // set to true so that the event object is updated with old & new values

    callback: function(evnt) {

        if(evnt.attributeName == "class") { // which attribute you want to watch for changes

            if(evnt.newValue.search(/active/i) == -1) { // "active" is the class name you search for inside "class" attribute

                $(".section.active").animate({"opacity":"1"},1500); //fade in the section with class active

            }

        }

    }

});

 

}); //end of document ready

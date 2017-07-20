

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








 (function( $ ){

  $.fn.burger_up = function( options ) {  

    var settings = $.extend( {
		'window_size' : '992'
    }, options);

    return this.each(function() {   

            $(this).wrap("<div class='burger-menu-wrapper'></div>");
            $(".burger-menu-wrapper").before("<ul class='burger'></ul>");

            console.log(this);

            for (var i = 2; i >= 0; i--) {
                $(".burger").append("<li class='burger-line'></li>");
            }

        if($(window).width() < settings.window_size) {
            $(".burger").show();
            $(".burger-menu-wrapper").hide();

            $(".burger").on("click", function(){
                $(".burger-menu-wrapper").slideToggle();
            });

        } else{
            $(".burger-menu-wrapper").slideDown();
            $(".burger").hide();
        }
      
    });

  };
})( jQuery );

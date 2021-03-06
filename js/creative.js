/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 var i = 0,
 	j = 0,
 	x = $('.js-switch');

 var startSwap = window.setInterval(function() {
 	setTimeout(function() {

 		if(i < x.length) {
 			//set j as element left of i to switch
 			j = i + 1;

 			if(j === x.length) {
 				j = 0;
 			}

 			//do swap
 			$(x[i]).switchClass('show-tag', 'hide-tag');
 			$(x[j]).switchClass('hide-tag', 'show-tag');

 			if(i === x.length - 1) {
 				i = 0;
 			} else {
 				i++;
 			}

 		}

 		console.log('ran');
 	}, 1000)
}, 5000);

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

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

	//run swap
	startSwap();

})(jQuery); // End of use strict

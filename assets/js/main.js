(function ($) {
"use strict";


// Mobile Menu
$('#my-navigation').iptOffCanvas({

	// base CSS class
	baseClass: 'offcanvas',
  
	// top, right, bottom, left
	type: 'right',
  
	// close other instances when one opens
	single: true,
  
	static: false
	
});



// owlCarousel
$('.slider').owlCarousel({
    loop:true,
    margin:0,
	items:1,
	navText:['<i class="fal fa-arrow-circle-left"></i>','<i class="fal fa-arrow-circle-right"></i>'],
    nav:true,
	dots:false,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:1
        },
        992:{
            items:1
        }
    }
})



})(jQuery);
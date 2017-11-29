$( document ).ready(function() {
    
	setTimeout(function(){
	  $('#instafeed').slick({
	    infinite: true,
	    slidesToShow: 4,
	    slidesToScroll: 3,
	    prevArrow: '<div class="circle previous-instagram"><div class="arrow-previous"></div></div>',
	    nextArrow: '<div class="circle next-instagram"><div class="arrow-next"></div></div>',
	    infinite: false
	  });
	}, 500);

});
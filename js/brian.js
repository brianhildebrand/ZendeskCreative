$( document ).ready(function() {

	var feed = new Instafeed({
	    get: 'user',
	    userId: '5827019264',
	    clientId: '772a6d810cc844a9aee69fe841d40acb',
	    accessToken: '5827019264.772a6d8.7b48f8fac03b4e82aa30378bc45e1216',
	    resolution: 'standard_resolution',
	    template: '<a href="{{link}}" target="_blank" class="col-md-3 instagram-photo"><div class="instagram-watermark social-icon"></div><img src="{{image}}" /></a>',
	    success: instasuccess()
	});
	
	feed.run();
    
	// for (var i = 0; i < elements.length; i++) {
	// 	var svgicon = new svgIcon( elements[i], svgIconConfig );
	// }

	function instasuccess() {
	  console.log("instagrams loaded");
	  setTimeout(function(){
	    $('#instafeed').slick({
	      infinite: true,
	      slidesToShow: 4,
	      slidesToScroll: 4,
	      prevArrow: '<div class="circle previous-instagram"><div class="arrow-previous"></div></div>',
	      nextArrow: '<div class="circle next-instagram"><div class="arrow-next"></div></div>',
	      infinite: false,
	      responsive: [
	          {
	            breakpoint: 576,
	            settings: {
	              slidesToShow: 1,
	              slidesToScroll: 1,
	              dots: false,
	              arrows:false
	            }
	          }
	      ]
	      
	    });
	  }, 500);
	}

});

$(function(){
  $("video").hover(function(){
    this.play();
    },function(){
   this.pause();
  });
});




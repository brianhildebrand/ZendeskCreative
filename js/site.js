$( document ).ready(function() {

	var feed = new Instafeed({
	    get: 'user',
	    userId: '2195345896',
	    clientId: 'd6cec9db6c7d4cc396748d1a517423c8',
	    accessToken: '2195345896.d6cec9d.90df2750ad3c4327be326687796782d9',
	    resolution: 'standard_resolution',
	    template: '<div class="col-md-3"><a href="{{link}}" target="_blank" class=" instagram-photo" style=" background-image: url( {{image}} ); "><div class="instagram-watermark social-icon" ></div></a></div>',
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
	  }, 1000);
	}
});

$(function(){
  $("video").hover(function(){
    this.play();
    },function(){
   this.pause();
  });
});
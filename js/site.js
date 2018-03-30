$( document ).ready(function() {

	var windowHeight 	= $( window ).height(),
		windowWidth 	= $( window ).width(),
		zPositionX		= (windowWidth / 2) - 293,
		zPositionY		= (windowHeight / 2) - 315;

	//$('#site-intro').css('height', windowHeight - 100 );

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
	positionSando();
    
	// for (var i = 0; i < elements.length; i++) {
	// 	var svgicon = new svgIcon( elements[i], svgIconConfig );
	// }

	function positionSando(){
		$('#pbj-triangle-peanutbutter').css('top', windowHeight - 420 );
		$('#pbj-semecircle-02').css('top', windowHeight - 500 );
	}

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

	// Scroll Magic Code

	//var controller = new ScrollMagic.Controller({container:"#-site-intro"});

	var controller = new ScrollMagic.Controller();

	var scene = new ScrollMagic.Scene({
		//offset: 100, // start scene after scrolling for 100px
		//triggerElement: "#article-container",
		triggerElement: "#trigger-element",
		triggerHook: 'onEnter',
		//offset: ( windowHeight / 2 ) + 40,
		//triggerHook: "onLeave",
		duration: 200 // pin the element for 400px of scrolling
	})


	var timeline = new TimelineMax();
	timeline.to('#pbj-semecircle-01', 1, {left: zPositionX + 40, top: zPositionY + 45})
	 		.to('#pbj-semecircle-02', 1, {left: zPositionX + 340, top: zPositionY + 340}, '-=1')
	 		.to('#pbj-triangle-jelly', 1, {left: zPositionX + 320, top: zPositionY + 16}, '-=1')
	 		.to('#pbj-triangle-peanutbutter', 1, {left: zPositionX + 20, top: zPositionY + 206}, '-=1')
	 		.to('#intro-text', 1, {opacity: 0}, '-=1');

	scene.setTween(timeline);
	
	//scene.setPin ('.fixed');
	scene.setPin ('.pinned-container');

	// var tweenA = TweenMax.to('#pbj-semecircle-01'),1, {x: 600};
	// var tweenB = TweenMax.to('#pbj-semecircle-02'),1, {x: 800};

	//scene.setTween(tweenA);
	// scene.setTween(tweenB);
	
	//scene.setTween('#pbj-semecircle-01', {x: 400, y:100, opacity: .1 });
	//scene.setTween('#pbj-semecircle-02', {x: 1000, y:100, opacity: .1 });
	// Add Scene to ScrollMagic Controller
	
	controller.addScene(scene);

});

$(function(){
  $("video").hover(function(){
    this.play();
    },function(){
   this.pause();
  });
});



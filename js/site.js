$( document ).ready(function() {

	var windowHeight 		= $( window ).height(),
		windowWidth 		= $( window ).width(),
		pbjWidthMobile		= 312,
		pbjHeightMobile		= 285,
		pbjWidthDesktop		= 586,
		pbjHeightDesktop	= 630,

		zPositionXDesktop	= (windowWidth / 2) - (pbjWidthDesktop / 2),
		zPositionYDesktop	= (windowHeight / 2) - (pbjHeightDesktop / 2);
		zPositionXMobile	= (windowWidth / 2) - (pbjWidthMobile / 2),
		zPositionYMobile	= (windowHeight / 2) - (pbjHeightMobile / 2);
		
	
	var pbjMobileCoordinates	= {

		semicircleBack : {
			x: 19,
			y: 20
		},
		semicircleFront : {
			x: 170,
			y: 170
		},
		triangleJelly : {
			x: 160,
			y: 5
		},
		trianglePeanutButter : {
			x: 5,
			y: 104
		}
	}

	var pbjDesktopCoordinates	= {

		semicircleBack : {
			x: 40,
			y: 40
		},
		semicircleFront : {
			x: 335,
			y: 360
		},
		triangleJelly : {
			x: 325,
			y: 16
		},
		trianglePeanutButter : {
			x: 20,
			y: 226
		}
	}

	console.log(pbjMobileCoordinates.semicircleBack.x);
	console.log(windowHeight);
	
	$('#site-intro').css('height', windowHeight - 100 );
	$('#site-intro .row').css('height', windowHeight - 100 );

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
    
	function positionSando(){
		if(windowWidth <= 576){
			$('#pbj-triangle-peanutbutter').css('top', windowHeight - 320 );
			$('#pbj-semicircle-back').css('top', windowHeight - 250 );
		}else{
			$('#pbj-triangle-peanutbutter').css('top', windowHeight - 420 );
			$('#pbj-semicircle-back').css('top', windowHeight - 500 );
		}
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

	function createPBJ(){
		
		var controller = new ScrollMagic.Controller();

		var scene = new ScrollMagic.Scene({
			triggerElement: "#trigger-element",
			triggerHook: 'onEnter',
			duration: 200 // pin the element for 400px of scrolling
		});

		var timeline = new TimelineMax();

		if(windowWidth <= 576){
			timeline.to('#pbj-semicircle-back', 1, {left: zPositionXMobile + pbjMobileCoordinates.semicircleBack.x, top: zPositionYMobile + pbjMobileCoordinates.semicircleBack.y})
			 		.to('#pbj-semicircle-front', 1, {left: zPositionXMobile + pbjMobileCoordinates.semicircleFront.x, top: zPositionYMobile + pbjMobileCoordinates.semicircleFront.y}, '-=1')
			 		.to('#pbj-triangle-jelly', 1, {left: zPositionXMobile + pbjMobileCoordinates.triangleJelly.x, top: zPositionYMobile + pbjMobileCoordinates.triangleJelly.y}, '-=1')
			 		.to('#pbj-triangle-peanutbutter', 1, {left: zPositionXMobile + pbjMobileCoordinates.trianglePeanutButter.x, top: zPositionYMobile + pbjMobileCoordinates.trianglePeanutButter.y}, '-=1')
			 		.to('#intro-text', 1, {opacity: 0}, '-=1');
		}else{
			timeline.to('#pbj-semicircle-back', 1, {left: zPositionXDesktop + pbjDesktopCoordinates.semicircleBack.x, top: zPositionYDesktop + pbjDesktopCoordinates.semicircleBack.y})
			 		.to('#pbj-semicircle-front', 1, {left: zPositionXDesktop + pbjDesktopCoordinates.semicircleFront.x, top: zPositionYDesktop + pbjDesktopCoordinates.semicircleFront.y}, '-=1')
			 		.to('#pbj-triangle-jelly', 1, {left: zPositionXDesktop + pbjDesktopCoordinates.triangleJelly.x, top: zPositionYDesktop + pbjDesktopCoordinates.triangleJelly.y}, '-=1')
			 		.to('#pbj-triangle-peanutbutter', 1, {left: zPositionXDesktop+ pbjDesktopCoordinates.trianglePeanutButter.x, top: zPositionYDesktop + pbjDesktopCoordinates.trianglePeanutButter.y}, '-=1')
			 		.to('#intro-text', 1, {opacity: 0}, '-=1');
		}

		scene.setTween(timeline);
		scene.setPin ('.pinned-container');
		controller.addScene(scene);
	}

	createPBJ();

});




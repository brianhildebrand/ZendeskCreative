$(document).ready(function() {

	var instaUrl	= "https://api.instagram.com/v1/users/5827019264/media/recent?access_token=353430169.3d44500.ec01f3a8792442839edc02e283e2a5ec",
		allImages	= [],
		allLinks	= [],
		gramCount	= 6;
	
	function getInstagrams() {
		$.ajax({
			type: "GET",
			dataType: "jsonp",
			cache: false,
			url: instaUrl,
			success: function(data) {
				okLetsBuild(data, nextFunction);
			}
		});
	}
	
	function nextFunction(){
		for(i = 0; i < gramCount; i++){
			$('#instagram-container').append('<a class="instagram span2" href="' + allLinks[i] +'" target="_blank"><img src="' + allImages[i]  + '"></a>');
		}
	}
	
	function okLetsBuild(data, callback){
		
		var instagrams = data;
		
		for(i = 0; i < gramCount; i++){
			allImages.push(instagrams.data[i].images.standard_resolution.url);
			allLinks.push(instagrams.data[i].link);
		}
		
		callback();
	}
	
	getInstagrams()

});
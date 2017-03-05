$(document).ready(function(){

	var channel = 'lirik';
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/channels/" + channel;

	$.ajax( {
	    url: twitchPassThroughAPI,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {

			/*
				Sample Data I'll be using: 

				"logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/hebo-profile_image-6947308654ad603f-300x300.jpeg"
				"url": "https://www.twitch.tv/hebo",
				"status": "Zelda: Breath of The Weeb - Twitter: @LIRIK "
				"display_name": "LIRIK"
				"views": 162090817,
    			"followers": 1587337,

			*/

	    	alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
	    	// alert(data);
	    }
	} );

});
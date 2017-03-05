$(document).ready(function(){

	/* Active Channels: lirik */
	var usernames = ["lirik", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/streams/" + usernames[0];

	$.ajax( {
	    url: twitchPassThroughAPI,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {

			/*
				Sample Data I'll be using: 

				From '/streams/:stream'
				 	"stream": null 
				 	"viewers": 35786,
				 	"created_at": "2017-03-04T17:06:57Z" - Maybe use for time streaming
				 	"preview": { 
				 		"medium": "https://static-cdn.jtvnw.net/previews-ttv/live_user_lirik-320x180.jpg",
				 		"template": "https://static-cdn.jtvnw.net/previews-ttv/live_user_lirik-{width}x{height}.jpg"

				From '/channels/:channel'
					"display_name": "LIRIK"
					"logo": "https://static-cdn.jtvnw.net/jtv_user_pictures/hebo-profile_image-6947308654ad603f-300x300.jpeg"
					"status": "Zelda: Breath of The Weeb - Twitter: @LIRIK ",
					"game": "The Legend of Zelda: Breath of the Wild"
					"url": "https://www.twitch.tv/lirik",
					"views": 162090817,
	    			"followers": 1587337,
			*/

	    	// alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
	    }
	} );

});
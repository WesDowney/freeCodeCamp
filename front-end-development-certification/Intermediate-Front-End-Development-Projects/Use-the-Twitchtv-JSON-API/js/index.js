var streamers = ["dreadztv", "lirik", "freecodecamp", "LCK1", "ESL_SC2"];
// more: "cretetion", "OgamingSC2", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"

function getTwitchStreamerData (streamer, queryType, callback) {
	// queryType can be either 'users', 'channels' or 'streams'
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/" + queryType + "/" + streamer;

	$.ajax( {
	    url: twitchPassThroughAPI,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {
	    	callback(data, streamer);
	    }
	} );
}

/*

Read: promises, and $when
http://stackoverflow.com/questions/3709597/wait-until-all-jquery-ajax-requests-are-done
http://stackoverflow.com/questions/25491757/detecting-when-a-loop-of-ajax-calls-is-done

$.when(getTwitchStreamerData())

*/

$(document).ready(function(){
	var streamerSection = document.getElementById("streamers");

	// Loop through to populate the cards.
	for (var i = 0; i < streamers.length; i++) {
		// Get data from the 'channels' portion of the API and populate the cards
		getTwitchStreamerData(streamers[i],'channels', function(streamerData, streamer) {
			// Populate cards with the channel data
			var card = document.createElement('div');
			card.className = 'card';
			card.id = 'user-' + streamer;

			// Populate the card with streamer data
			card.innerHTML = '<img class="card-img-top" src="' + streamerData.logo + '" alt="Stream Image">\
							  <div class="card-block">\
							  	<h4 class="card-title">' + streamerData.display_name + '</h4>\
								<p class="card-text">' + streamerData.status + '</p>\
								<a href="' + streamerData.url +'" class="btn btn-primary">View</a>\
							  </div>'; 

			// Append the card to the streamer section
			streamerSection.appendChild(card);
		});
	}
	
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
});

$(document).ajaxStop(function () {
	// Loop through to set online or offline
	for (var i = 0; i < streamers.length; i++) {
		// Get data from the 'streams' portion of the API to see if the streamer is online
		getTwitchStreamerData(streamers[i],'streams', function(streamerData, streamer) {
			alert(JSON.stringify(streamerData, null, 4)); // Shows the whole returned object nicely formatted for debugging 
			if (streamerData.stream == null){
				// The streamer is offline. Add the offline class to fade out the card
				alert('Fading:' + streamer);
				$( "#user-" + streamer ).addClass( "offline" );

				// Change the button text to Offline and disable it
			} 
		});
	}
});
/*
	Sample Data I'll be using: 

	Different types of API Calls available: 'users', 'channels' or 'streams'

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

var streamers = ["dreadztv", "lirik", "freecodecamp", "LCK1", "ESL_SC2"];
// more: "cretetion", "OgamingSC2", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"

function populateStreamerCards () {
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/channels/";
	var streamerSection = document.getElementById("streamers");

	// Loop through to populate the cards.
	for (var i = 0; i < streamers.length; i++) {
		// Get data from the 'channels' portion of the API and populate the cards
		$.ajax( {
		    url: twitchPassThroughAPI + streamers[i],
		    dataType: 'jsonp', // jsonp helps with cross origin error
		    type: 'GET',
		    headers: { 'Twitch API App': 'v.1' }, 
		    success: function(data) {
		    	alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
		    	// Populate cards with the channel data
				var card = document.createElement('div');
				card.className = 'card';
				card.id = 'user-' + data.display_name;

				// Populate the card with streamer data
				card.innerHTML = '<img class="card-img-top" src="' + data.logo + '" alt="Stream Image">\
								  <div class="card-block">\
								  	<h4 class="card-title">' + data.display_name + '</h4>\
									<p class="card-text">' + data.status + '</p>\
									<a href="' + data.url +'" class="btn btn-primary">View</a>\
								  </div>'; 

				// Append the card to the streamer section
				streamerSection.appendChild(card);
		    }
		});
	}
}

$.when( populateStreamerCards() ).done(function() {
	alert('Now it is time to check if they are online');
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/streams/";

	// Loop through to fade the cards of offline streamers
	for (var i = 0; i < streamers.length; i++) {
		
		$.ajax( {
		    url: twitchPassThroughAPI + streamers[i],
		    dataType: 'jsonp', // jsonp helps with cross origin error
		    type: 'GET',
		    headers: { 'Twitch API App': 'v.1' }, 
		    success: function(data) {
				if (data.stream == null){
					// The streamer is offline. Add the offline class to fade out the card
					$( "#user-" + data.display_name ).addClass( "offline" );

					// Change the button text to Offline and disable it
				} 
		    }
		});
			
	}
});

/*
$(document).ready(function(){
	populateStreamerCards();
});
*/
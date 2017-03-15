var streamers = ["dreadztv", "lirik", "freecodecamp", "LCK1", "ESL_SC2"];
// more: "cretetion", "OgamingSC2", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"

function populateStreamerCards (i) {
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/channels/";
	var streamerSection = document.getElementById("streamers");

	// Get data from the 'channels' portion of the API and populate the cards
	return $.ajax( {
	    url: twitchPassThroughAPI + streamers[i],
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {
	    	alert(data.display_name + ' Function 1');
	    	// alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
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

// Loop through to populate the cards.
for (var i = 0; i < streamers.length; i++) {
	Promise.all([populateStreamerCards(i)]).then(function(data) {
		alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
		// alert(i + ' Function 2');
	}, function() {
	  // one or more failed
	});
}

/*
// Loop through to fade the cards of offline streamers
for (var i = 0; i < streamers.length; i++) {
}
*/
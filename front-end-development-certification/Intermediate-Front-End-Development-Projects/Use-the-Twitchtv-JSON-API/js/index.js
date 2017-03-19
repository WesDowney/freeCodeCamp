var streamers = ["dreadztv", "lirik", "freecodecamp", "LCK1", "ESL_SC2", "olofmeister", "brunofin", "comster404", "curse"];

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
	    	// Populate cards with the channel data
			var card = document.createElement('div');

			// Check to see if it returned a 404 error
			if (data.status == 404) {
				// The user either closed their account or it never existed
				card.className = 'card offline';
				card.id = 'card-404';

				card.innerHTML = '<img class="card-img-top" src="img/Glitch_Purple.png" alt="Channel 404">\
								  <div class="card-block">\
									<p class="card-text">' + data.message + ' or has been closed</p>\
									<a href="#" class="btn btn-primary disabled" id="button-404">Channel Error</a>\
								  </div>'; 
	    	} else {
				// API Returned Streamer data correctly. Populate the card with streamer data

				card.className = 'card';
				card.id = 'card-' + data.display_name;
				card.innerHTML = '<img class="card-img-top" src="' + data.logo + '" alt="Stream Image">\
								  <div class="card-block">\
								  	<h4 class="card-title">' + data.display_name + '</h4>\
									<p class="card-text">' + data.status + '</p>\
									<a href="' + data.url +'" class="btn btn-primary" id="button-' + data.display_name + '">View Stream</a>\
								  </div>'; 
	    	}

			// Append the card to the streamer section
			streamerSection.appendChild(card);
	    }
	});
}

function fadeOfflineCards(streamer) {
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/streams/";

	// Get data from the streams API to see if they are online or not
	$.ajax( {
	    url: twitchPassThroughAPI + streamer,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {
	    	alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging
	    	if (data.stream == null){ 
				// The streamer is offline. Add the offline class to fade out the card
				$( '#card-' + streamer ).addClass( 'offline' );

				// Change the button text to Offline and disable it
				$( '#button-' + streamer ).text('Offline');
			} 
	    }
	});
}

// Loop through to populate the cards.
for (var i = 0; i < streamers.length; i++) {
	Promise.all([populateStreamerCards(i)]).then(function(data) {
		// Card was created and AJAX response data was returned
		// Check to see if the streamer is online and fade the card if not
		fadeOfflineCards(data[0].display_name);
	}, function() {
		alert('Error displaying the Twitch Streamers.')
	});
}
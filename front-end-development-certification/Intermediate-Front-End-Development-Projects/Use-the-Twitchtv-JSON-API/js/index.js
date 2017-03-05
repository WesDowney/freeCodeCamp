$(document).ready(function(){

	var channel = 'hebo';
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/channels/" + channel;

	$.ajax( {
	    url: twitchPassThroughAPI,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {
	    	alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
	    	// alert(data);
	    }
	} );

});
/***********************************************************************\
	Working example of using a promise to wait for async to finish
************************************************************************/

var streamers = ["dreadztv", "lirik", "freecodecamp", "LCK1", "ESL_SC2"];

function function1(){
	var twitchPassThroughAPI = "https://wind-bow.gomix.me/twitch-api/channels/";

	return $.ajax( {
	    url: twitchPassThroughAPI + streamers[0],
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'Twitch API App': 'v.1' }, 
	    success: function(data) {
	    	alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
	    }
	});
}

function function2(){
	alert('Function 2');
}

Promise.all([function1(), function2()]).then(function() {
  alert('Both are done.');
}, function() {
  // one or more failed
});
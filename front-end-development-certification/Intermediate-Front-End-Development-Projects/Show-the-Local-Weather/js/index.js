$( document ).ready(function() {

    $.get("//ipinfo.io", function(location) {
    	// Display user's location
  		document.getElementById("location").innerHTML = location.city + ", " + location.region;

  		// Split response's latitude and longitude into an array.
  		location.loc = location.loc.split(',');

  		$.get("//api.openweathermap.org/data/2.5/weather?lat=" + location.loc[0] + "&lon=" + location.loc[1] + "&APPID=326b00a90b7281cb02b6f79e3284673c", function(response) {
			alert(JSON.stringify(response, null, 4));
		}, "jsonp")
	}, "jsonp")

});


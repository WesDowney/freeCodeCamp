$( document ).ready(function() {

    $.get("//ipinfo.io", function(location) {
    	// Display user's location
  		document.getElementById("location").innerHTML = location.city + ", " + location.region;

  		// Split response's latitude and longitude into an array.
  		location.loc = location.loc.split(',');
	}, "jsonp")

});


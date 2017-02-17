$( document ).ready(function() {

	// Query the IPInfo API with the current user's IP address to display their location
    $.get("//ipinfo.io", function(location) {
    	// Display user's location
  		document.getElementById("location").innerHTML = location.city + ", " + location.region;

  		// Split response's latitude and longitude into an array.
  		location.loc = location.loc.split(',');

  		// Query the OpenWeatherMap API to return weather data based on the user's location
  		$.get("//api.openweathermap.org/data/2.5/weather?lat=" + location.loc[0] + "&lon=" + location.loc[1] + "&APPID=326b00a90b7281cb02b6f79e3284673c", function(response) {
			// Convert the returned temperature from Kelvin to Fahrenheit and display it. 
			document.getElementById("temp").innerHTML = Math.round((response.main.temp * (9/5)) - 459.67) + " F";
			document.getElementById("condition").innerHTML = toTitleCase(response.weather[0].description);
			// alert(JSON.stringify(response, null, 4)); // Shows the whole returned object nicely formatted for debugging 
		}, "jsonp")
	}, "jsonp")

});

// http://stackoverflow.com/questions/196972/convert-string-to-proper-case-with-javascript/196991#196991
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

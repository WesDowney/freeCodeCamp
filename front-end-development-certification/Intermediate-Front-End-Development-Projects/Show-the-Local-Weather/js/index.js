var Fahrenheit = 0;
var Celsius = 0;

$( document ).ready(function() {

	// Query the IPInfo API with the current user's IP address to display their location
    $.get("//ipinfo.io", function(location) {
    	// Display user's location
  		document.getElementById("location").innerHTML = location.city + ", " + location.region;

  		// Split response's latitude and longitude into an array.
  		location.loc = location.loc.split(',');

  		// Query the OpenWeatherMap API to return weather data based on the user's location
  		$.get("//api.openweathermap.org/data/2.5/weather?lat=" + location.loc[0] + "&lon=" + location.loc[1] + "&APPID=326b00a90b7281cb02b6f79e3284673c", function(response) {
			// alert(JSON.stringify(response, null, 4)); // Shows the whole returned object nicely formatted for debugging 

			// Convert the returned temperature from Kelvin to Fahrenheit and display it. 
			Fahrenheit = Math.round((response.main.temp * (9/5)) - 459.67);
			Celsius = Math.round((Fahrenheit - 32) * (5/9));
			displayFahrenheit();
			document.getElementById("condition").innerHTML = toTitleCase(response.weather[0].description);

			// Set the background image depending on weather condition. http://openweathermap.org/weather-conditions
			// All images free to use personal/commercial from pexels.com and pixabay.com
			switch(response.weather[0].main) {
				case "Clear": 
					$('body').css('background', 'url(img/clear.jpg) no-repeat center center fixed'); 
					break;
				case "Clouds":
					$('body').css('background', 'url(img/clouds.jpeg) no-repeat center center fixed');
					break;
				case "Rain":
					$('body').css('background', 'url(img/rain.jpeg) no-repeat center center fixed');
					break;
				case "Thunderstorm":
					$('body').css('background', 'url(img/lightning.jpg) no-repeat center center fixed');
					break;
				case "Snow":
					$('body').css('background', 'url(img/snow.jpg) no-repeat center center fixed');
					break;
			}		
		}, "jsonp")
	}, "jsonp")

});

function displayFahrenheit(){
	document.getElementById("temp").innerHTML = Fahrenheit + " °<a href='#' onclick='displayCelsius()'>F</a>";
}

function displayCelsius(){
	document.getElementById("temp").innerHTML = Celsius + " °<a href='#' onclick='displayFahrenheit()'>C</a>";
}

// http://stackoverflow.com/questions/196972/convert-string-to-proper-case-with-javascript/196991#196991
function toTitleCase(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

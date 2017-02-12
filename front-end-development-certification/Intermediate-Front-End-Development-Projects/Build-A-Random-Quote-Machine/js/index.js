// Colors: [Background, Quote box Background, Text, Buttons, Buttons Hover]
// Color Combinations from: https://designschool.canva.com/blog/100-color-combinations/
// http://www.hexcolortool.com - Used to generate 10% lighter color for button hover
var colors = [
	["#444C5C","#CE5A57","#78A5A3","#E1B16A", "#FBCB84"],
	["#90AFC5","#336B87","#2A3132","#763626", "#905040"], // Subdued & Professional
	["#46211A","#693D3D","#BA5536","#A43820", "#BE523A"], // Dark & Earthy
	["#505160","#68829E","#AEBD38","#598234", "#739C4E"], // Crisp & Dramatic
	["#2E4600","#486B00","#A2C523","#7D4427", "#975E41"], // Outdoorsy & Natural
	["#375E97","#FB6542","#FFBB00","#3F681C", "#598236"], // Primary Colors With a Vibrant Twist
	["#F4CC70","#DE7A22","#20948B","#6AB187", "#84CBA1"], // Surf & Turf
	["#8D230F","#1E434C","#9B4F0F","#C99E10", "#E3B82A"], // Autumn in Vermont
	["#011A27","#063852","#F0810F","#E6DF44", "#FFF95E"], // Day & Night
	["#0F1B07","#ffffff","#5C821A","#C6D166", "#E0EB80"]  // Modern & Crisp
];

var colorIndex = 0;

window.onload = function WindowLoad(event) {
    getQuote();
}

function getQuote() {
	// Get a quote from Famous Quotes API on MashApe
	$.ajax({
	    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
	    type: 'GET', // The HTTP Method, can be GET POST PUT DELETE etc
	    data: {}, // Additional parameters here
	    dataType: 'json',
	    success: function(data) {
	       	document.getElementById("quote-text").innerHTML = data.quote; 
	       	document.getElementById("quote-author").innerHTML = data.author; 
	    },
	    error: function(err) { 
	    	alert("Error: " + err.status + ". " + err.responseText);	
	    },
	    beforeSend: function(xhr) {
	    xhr.setRequestHeader("X-Mashape-Authorization", "e1wdzgHAD2mshnZlaKpZkmJF33lNp1AonJFjsnfA0zY6PiYl3E"); // Enter here your Mashape key
	    }
	});

	changeColors();
}

function changeColors() {
	// Pick a random color group
	colorIndex = Math.floor(Math.random() * colors.length);

	// Set the colors
	document.body.style.backgroundColor = colors[colorIndex][0];
	document.getElementById("quotes").style.backgroundColor = colors[colorIndex][1];
	document.getElementById("quote-text").style.color = colors[colorIndex][2];
	document.getElementById("quote-author").style.color = colors[colorIndex][2];
	document.getElementById("new-quote-button").style.background = colors[colorIndex][3];
	document.getElementById("tweet-button").style.background = colors[colorIndex][3];
}

$("button").hover(function(){
    $(this).css("background-color", colors[colorIndex][4]);
    }, function(){
    $(this).css("background-color", colors[colorIndex][3]);
});

function shareTweet() {
	window.open('http://twitter.com/share?text=' + '"' + document.getElementById("quote-text").innerHTML + '"' + ' - ' + document.getElementById("quote-author").innerHTML,'','scrollbars=no,menubar=no,height=300,width=650,resizable=yes,toolbar=no,location=no,status=no');
	// + '&url='+ window.location.href
}
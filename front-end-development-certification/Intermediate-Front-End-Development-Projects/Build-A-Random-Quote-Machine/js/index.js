function getQuote() {
	document.getElementById("quote-text").innerHTML = "<i class=\"fa fa-refresh fa-spin fa-3x fa-fw\"></i><span class=\"sr-only\">Loading...</span>";
	document.getElementById("quote-author").innerHTML = "";

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
	// [Background, Quote box Background, Text, Buttons] - https://designschool.canva.com/blog/100-color-combinations/
	var colors = [
		["#444C5C","#CE5A57","#78A5A3","#E1B16A"],
		["#90AFC5","#336B87","#2A3132","#763626"], // Subdued & Professional
		["#46211A","#693D3D","#BA5536","#A43820"], // Dark & Earthy
		["#505160","#68829E","#AEBD38","#598234"], // Crisp & Dramatic
		["#2E4600","#486B00","#A2C523","#7D4427"], // Outdoorsy & Natural
		["#375E97","#FB6542","#FFBB00","#3F681C"], // Primary Colors With a Vibrant Twist
		["#F4CC70","#DE7A22","#20948B","#6AB187"], // Surf & Turf
		["#8D230F","#1E434C","#9B4F0F","#C99E10"], // Autumn in Vermont
		["#011A27","#063852","#F0810F","#E6DF44"], // Day & Night
		["#0F1B07","#ffffff","#5C821A","#C6D166"]  // Modern & Crisp
	];

	// Pick a random color group
	var index = Math.floor(Math.random() * colors.length);

	// Set the colors
	document.body.style.backgroundColor = colors[index][0];
	document.getElementById("quotes").style.backgroundColor = colors[index][1];
	document.getElementById("quote-text").style.color = colors[index][2];
	document.getElementById("quote-author").style.color = colors[index][2];
	document.getElementById("new-quote-button").style.background = colors[index][3];
	document.getElementById("tweet-button").style.background = colors[index][3];
}

function shareTweet() {
	window.open('http://twitter.com/share?text=' + '"' + document.getElementById("quote-text").innerHTML + '"' + ' - ' + document.getElementById("quote-author").innerHTML,'','scrollbars=no,menubar=no,height=300,width=650,resizable=yes,toolbar=no,location=no,status=no');
	// + '&url='+ window.location.href
}

window.onload = function WindowLoad(event) {
    getQuote();
}
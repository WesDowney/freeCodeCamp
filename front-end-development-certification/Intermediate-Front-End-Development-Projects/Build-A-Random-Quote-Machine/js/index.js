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

}

window.onload = getQuote();
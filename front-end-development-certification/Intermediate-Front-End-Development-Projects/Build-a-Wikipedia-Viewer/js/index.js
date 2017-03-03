var searchButton = document.getElementById('searchButton');


function searchWikipedia() {
	
	var searchTerm = document.getElementById("searchQuery").value;
	var remoteUrlWithOrigin = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm;

	// Query the Wikipedia API
	$.ajax( {
	    url: remoteUrlWithOrigin,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'FCC Wikipedia Viewer App': 'v.1' }, // Wikipedia API requires custom user agent
	    success: function(data) {
	    	// alert(JSON.stringify(data, null, 4)); // Shows the whole returned object nicely formatted for debugging 
	    	/* 
	    		API Data Response:
			    	data[1] are titles
			    	data[2] are descriptions
			    	data[3] are links
		    */ 

	    	// Change the search box to align to vertically align top
	    	var container = document.getElementById("container");
			container.className = "flexbox-container vert-align-top";

			// Create the new div that will hold the search results
			var searchResults = document.createElement('div');
			searchResults.id = 'searchResults';
			// searchResults.className = "flexbox-container vert-align-top";

			// Append the search results div to body below the search box
			document.getElementsByTagName('body')[0].appendChild(searchResults);

			// Create an inner divs for each article
			for (var i = 0; i < data[1].length; i++) {
				var article = document.createElement('div');
				article.className = 'article';

				// Add the title, description and link
				article.innerHTML = '<a href="' + data[3][i] +'"><h3>' + data[1][i] + '</h3>\
									<p>' + data[2][i] + '</p></a>';

				// Append the article to the search results div
				searchResults.appendChild(article);
			}
	    }
	} );

}

$(document).ready(function(){
	var searchBoxOpen = false;

    $("#searchButton").click(function(){
    	if (searchBoxOpen == false) {
    		$("#searchQuery").animate({
            	width: 'toggle'
        	});
        	searchBoxOpen = true;
    	} else if (document.getElementById("searchQuery").value.length == 0) {
    		// The search box is open but the value is empty. Close the search box.
    		$("#searchQuery").animate({
            	width: 'toggle'
        	});
        	searchBoxOpen = false;
    	} else {
    		searchWikipedia();
    	}
    });

    // If the user presses the enter button while typing in the search box, submit the search button
    $("#searchQuery").keyup(function(event){
	    if(event.keyCode == 13){
	        $("#searchButton").click();
	    }
	});
});
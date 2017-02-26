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
		    	data[1] are titles
		    	data[2] are descriptions
		    	data[3] are links
		    */ 
	    	alert(data[3][0]);

	    	// Change the search box to align to vertically align top
	    	var container = document.getElementById("container");
			container.className += " vert-align-top";
	    }
	} );

}

searchButton.onclick = searchWikipedia;
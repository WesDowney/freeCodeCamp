var searchButton = document.getElementById('searchButton');

function searchWikipedia() {
	
	var searchTerm = document.getElementById("searchQuery").value;
	var remoteUrlWithOrigin = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=' + searchTerm;

	// Query the Wikipedia API
	$.ajax( {
	    url: remoteUrlWithOrigin,
	    dataType: 'jsonp', // jsonp helps with cross origin error
	    type: 'GET',
	    headers: { 'FCC Wikipedia Viewer App': 'v.1' },
	    success: function(data) {
	       alert(data);
	    }
	} );

}

searchButton.onclick = searchWikipedia;
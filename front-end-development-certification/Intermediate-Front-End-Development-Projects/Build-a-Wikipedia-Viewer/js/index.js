function searchWikipedia(){
	alert("About to search");
	$.ajax( {
	    url: 'https://en.wikipedia.org/w/api.php?action=opensearch&search=',
	    data: document.getElementById("searchQuery").value,
	    dataType: 'json',
	    type: 'POST', 
	    headers: { 'Api-User-Agent': 'FCC Wikipedia Viewer/1.0' },
	    success: function(data) {
	    	alert("It works");
	       alert(data);
	    }
	} );
}

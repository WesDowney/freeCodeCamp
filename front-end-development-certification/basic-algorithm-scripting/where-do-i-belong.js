function getIndexToIns(arr, num) {
	// Find my place in this sorted array.

	// Sorts [1, 2, 3] ...
	arr.sort(function(a,b){return a - b});

	for (var i = 0; i < arr.length; i++) {
		if (num == arr[i]) {
			return i;
		}
		if ((i == arr.length-1) && (num > arr[i])) {
			// The number fits at the end of the array
			return i + 1;
		}
		if ((num > arr[i]) && (num < arr[i+1])) {
			// The number fits between these indexes. 
			return i + 1;
		}
    }
}

document.write("Results: " + getIndexToIns([2, 5, 10], 15));
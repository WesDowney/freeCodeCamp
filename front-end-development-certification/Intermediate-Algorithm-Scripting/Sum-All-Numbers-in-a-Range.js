
function sumAll(arr) {
	var min = Math.min(arr[0], arr[1]);
	var max = Math.max(arr[0], arr[1]);
	
	// Adding the smallest number to a new array. 
	var numbers = [min];
	for (var i = min + 1; i < max; i++) {
		// Add all the numbers in between min and max
		numbers.push(i);
	}
	// Add max as well. 
	numbers.push(max);

	// Add up all the numbers in the array
	var sum = numbers.reduce(function (a, b) {
	  return a + b;
	}, 0);

	return sum;
}

document.write("Results: " + sumAll([1, 4]));
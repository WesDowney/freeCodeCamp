// Removes all the values mentioned after the first array
function destroyer(arr) {
	var args = Array.from(arguments);

	var scrubbedArray = args[0];
	args.shift();
	var blacklist = args;

	function scrubber(value) {
		// If the value is not in the blacklist, it will be filtered out.
		return blacklist.indexOf(value) == -1; 
	}

	return scrubbedArray.filter(scrubber);
}

document.write("Results: " + destroyer([1, 2, 3, 1, 2, 3], 2, 3));
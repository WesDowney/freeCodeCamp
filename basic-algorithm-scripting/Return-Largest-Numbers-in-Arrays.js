function largestOfFour(arr) {
  largestNumbers = [];
  
  for (var i = 0; i < arr.length; i++) {
    largestNumbers.push(0);
    for (var z = 0; z < arr[i].length; z++) {
      if (arr[i][z] > largestNumbers[i]) {
        largestNumbers[i] = arr[i][z];
      }  
    }
  }
  
  return largestNumbers;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
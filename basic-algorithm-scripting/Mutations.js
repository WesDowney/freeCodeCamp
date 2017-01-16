function mutation(arr) {
  
  // Format each in the same case to compare and turn the second string into an array
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase().split('');
  
  // Check for the existance of each letter of arr[1] in arr[0]
  for(var i = 0; i < arr[1].length; i++){
    if (arr[0].indexOf(arr[1][i]) === -1) {
      return false; // Letter wasn't found
    }
  }
 
  // All letters were found
  return true;
}

mutation(["hello", "hey"]);
function chunkArrayInGroups(arr, size) {
  if (arr.length > size) {
    var chunkedArray = [];
    var chunkedIndex = 0;
    chunkedArray[chunkedIndex] = [];
    
    for (var i = 0; i < arr.length; i++) {
      if (chunkedArray[chunkedIndex].length === size) {
        chunkedIndex++;
        chunkedArray[chunkedIndex] = [];
      }
      chunkedArray[chunkedIndex].push(arr[i]);
    }
  }
  return chunkedArray;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
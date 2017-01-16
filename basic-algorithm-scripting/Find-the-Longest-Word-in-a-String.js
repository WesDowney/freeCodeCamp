function findLongestWord(str) {
  var wordArray = [];
  wordArray = str.split(' ');
  var longestWord = "";
  
  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].length > longestWord.length) {
      longestWord = wordArray[i];
    }
  }
  
  return longestWord.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
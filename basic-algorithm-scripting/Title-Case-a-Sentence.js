function titleCase(str) {
  var wordArray = [];
  wordArray = str.split(' ');
  var word = [];
  
  for (var i = 0; i < wordArray.length; i++) {
    word = wordArray[i].split('');
    for (var z = 0; z < word.length; z++){
      if (z === 0) {
        word[0] = word[0].toUpperCase();
      } else {
        word[z] = word[z].toLowerCase();
      }
    }
    word[0] = word[0].toUpperCase();
    wordArray[i] = word.join('');
  }
  
  str = wordArray.join(' ');
  
  return str;
}

titleCase("I'm a little tea pot");
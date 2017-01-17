function rot13(str) { // LBH QVQ VG!
  // Convert each letter 13 letters backwards in the alphabet to decode
  var decodedString = "";
  var charCode = 0;

  for (var i = 0; i < str.length; i++) {
  	charCode = str.charCodeAt(i);

  	// A char code is 65. Z char code is 90
  	if (charCode >= 65 && charCode <= 90) {
  		charCode -= 13;

  		if (charCode >= 65) {
  			decodedString += String.fromCharCode(charCode);
  		} else {
  			// Bring the character code back into A to Z range
  			decodedString += String.fromCharCode(91 - (65 - charCode));
  		}  		
  	} else {
  		// Not A-Z. Append it
  		decodedString += str[i];
  	}
  }

  return decodedString;
}

// Change the inputs below to test
document.write("Results: " + rot13("SERR PBQR PNZC!"));

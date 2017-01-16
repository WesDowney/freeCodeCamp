function repeatStringNumTimes(str, num) {
  
  if (num > 0){
    var fullString = "";
    var i = 0;
    
    while (i < num) {
      fullString += str;
      i++;
    } 
    
    return fullString;
  } else {
    return "";
  }
}

repeatStringNumTimes("abc", 3);
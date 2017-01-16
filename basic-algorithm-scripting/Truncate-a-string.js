function truncateString(str, num) {
  if (str.length > num) {
    if (num >= 3) {
      str = str.slice(0,-(str.length - (num - 3)));  
    } else {
      str = str.slice(0,-(str.length - num));  
    }
    str += "...";
  }
  return str;
}

truncateString("A-", 1);
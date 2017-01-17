// Goal: Read a file and print the number of new lines (\n) it contains to the console.

// Filesystem library
var fs = require('fs');

// Reads user provided file argument into a buffer object, converts it to a string and then splits it into an array of lines
var file = fs.readFileSync(process.argv[2]).toString().split(/\n/);

console.log(file.length - 1);
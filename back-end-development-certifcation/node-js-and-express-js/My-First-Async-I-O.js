/*
  Write a program that uses a single asynchronous filesystem operation to  
  read a file and print the number of newlines it contains to the console  
  (stdout), similar to running cat file | wc -l.  
   
  The full path to the file to read will be provided as the first  
  command-line argument. 
 */

// Filesystem library
var fs = require('fs')
var file = undefined

fs.readFile(process.argv[2], function doneReading(err, fileContents) {
    file = fileContents.toString().split(/\n/)

    console.log(file.length - 1)
})
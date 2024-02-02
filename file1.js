// var fs = require('fs')                                                             
// console.log("Opening a file")
// fs.open("test.txt","r+",function(err,data){
//     if (err) {
//         // return console.error(err)
//         throw err
//     }
//     console.log(data.toString)
//     console.log("file opened successfully")
// })      

//Printing the contents of the file
var fs = require('fs')
var data = fs.readFileSync('test.txt','utf8');
console.log(data)
console.log("Reading the contents of the file")
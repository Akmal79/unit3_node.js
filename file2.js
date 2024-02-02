//Code to wirte into a file
var fs = require('fs');
console.log("writing into a  file")
fs.writeFile("test1.txt","hello world",function(err,data){
    if (err) {
        throw err
    }
    console.log("file written successfully")
})
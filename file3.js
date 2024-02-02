//deleting a file
var fs = require('fs');
fs.unlink("data1.txt",function(){
    console.log("file deleted successfully")
})
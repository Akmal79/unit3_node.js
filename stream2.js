//create a file named data.txt and print "I like node.js" into it
const { error } = require('console');
var fs = require('fs');
var data ="I like Node.js";//writing data into file
var ws =fs.createWriteStream('data.txt');//new non-existing file else it overwrites the content
ws.write(data,'utf-8');
ws.end();
//handles events=> finish
ws.on('finish',function()
{
    console.log("Write is completed");
})
ws.on('error',function(err)
{
    console.log(error.stack);
})
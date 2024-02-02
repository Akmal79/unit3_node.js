const {error} = require('console');
var fs = require('fs');
var data = ''
var rs = fs.createReadStream('test.txt');
rs.setEncoding('utf8');

rs.on('data', function (chunk) {
    data += chunk;
});

rs.on('end', function (chunk) {
    console.log(data);
});

rs.on('err', (chunk)=> {
    console.log(err.stack) 
})
//decompressing the file 'data.txt' into 'data1.txt'
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('data.txt.gz') // reading  the content of data.txt
.pipe(zlib.createGunzip())
.pipe(fs.createWriteStream('data1.txt'))
console.log("file decompressed")
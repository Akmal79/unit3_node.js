//Transfrom compress and uncompress
var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('data.txt') // reading  the content of data.txt

.pipe(zlib.createGzip()) //used for compressing  the file
.pipe(fs.createWriteStream('data.txt.gz'))
console.log("file is compressed")



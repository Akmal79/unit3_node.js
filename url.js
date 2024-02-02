var url = require('url');
var http = require('http');
var adr = 'http://localhost:4000/pesu.html?year=2028&month=september';

var q = url.parse(adr, true)
http.createServer(function (req, res) {
// Display different components of the URL
console.log('Host:', q.host);        // Output: localhost:8080
console.log('Pathname:', q.pathname); // Output: /pesu.html
console.log('Search:', q.search);     // Output: ?year=2028&month=september

// Access query parameters
var qdata = q.query;
console.log('Month:', qdata.month);   // Output: september
}).listen(4000)
console.log("server listening on port 4000")
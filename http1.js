
var http = require('http');
var port = 5000
var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('Hello World\n');
    res.end();
}).listen(port)
console.log("server listening on port " + port)
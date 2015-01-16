var http = require('http');
var server = http.createServer(function (req, res) {
   res.writeHead(400, {'Content-Type': 'text/plain'});
   res.end('Hallo Welt 2!');
});
server.listen(8085);


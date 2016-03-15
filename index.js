
var http = require('http');
var fs = require('fs');

var requestListener = function (req, res) {
	res.writeHead(200);	
	fs.readFileSync(__dirname + '/fundstarter.html')
}

var server = http.createServer(requestListener);
server.listen(8080);
console.log('Server running on port: 8080');

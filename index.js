var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	response.end(fs.readFileSync(__dirname + '/fundstarter.html'),'utf8');
}).listen(8080);

console.log('Server running on port: 8080');

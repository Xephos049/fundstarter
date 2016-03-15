
var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	fs.readFile('fundstarter.html', function(error, content) {
		if (error) {
			response.writeHead(500);
			response.end();
		}
		else {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.end(content, 'utf-8');
		}
	});
}).listen(8080);

console.log('Server running on port: 8080');

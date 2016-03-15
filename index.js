var http = require('http');
var fs = require('fs');

http.createServer(function (request, response) {
	response.end(fs.readFileSync(__dirname + '/fundstarter.html'),'utf8');
}).listen(process.env.PORT || 8080);


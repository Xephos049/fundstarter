
var http = require('http');
var fs = require('fs');



http.createServer(function (request, response) {
fs.open('fundstarter.html', 'r', function(err, fd) {
   fs.stat('fundstarter.html', function(err, stats) {
     var bufferSize=stats.size,
           chunkSize=512,
           buffer=new Buffer(bufferSize),
           bytesRead = 0;



       while (bytesRead < bufferSize) {
           if ((bytesRead + chunkSize) > bufferSize) {
              chunkSize = (bufferSize - bytesRead);
          }
           fs.read(fd, buffer, bytesRead, chunkSize, bytesRead);
           bytesRead += chunkSize;
       }
       //console.log(buffer.toString('utf8', 0, bufferSize));
       buffer.toString('utf8',0,bufferSize);
	response.end(buffer);
	fs.close(fd);
   });
});
}).listen(process.env.PORT || 8080);


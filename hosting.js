var http = require('http');// include the http module ,require() function with the name of the module
var fs = require('fs');//To include the File System module
//create a server object:
http.createServer(function (req, res) {
     //Open a file on the server and return its content:
    fs.readFile('testm.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});//method is the status code, 200 means that all is OK, the second argument is an object containing the response headers
        res.write(data);////write a response to the client
        return res.end();//end the response
    });
}).listen(8080); //the server object listens on port 8080
var app = require('express')();
var path = require('path');
var http = require('http');

// Serve index and styles.css
app.get('/', function(req, res) {
  res.sendFile(path.resolve('./src/index.html'))
});
app.get('/styles/styles.css', function(req, res) {
  res.sendFile(path.resolve('./src/styles/styles.css'))
});

var server = http.createServer(app);
// Set port to 80 so that www.aquilavr.com will direct properly instead of www.aquilavr.com:8080
// Needs super user permission to run
var port = 80;
server.listen(port);
console.log('Aquila server listening on port ' + port);

var args = process.argv
var portNumber = args[2]
var http = require('http')
var map = require('through2-map')
var server = http.createServer(function (request, response) {
  var method = request.method;
  if (method === 'POST') {
    request.pipe(map(function(chunk){
      return chunk.toString().toUpperCase()
    })).pipe(response)
  }

})
server.listen(portNumber)

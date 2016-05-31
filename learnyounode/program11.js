var args = process.argv
var portNumber = args[2]
var filePath = args[3]
var http = require('http')
var fs = require('fs')
var strftime = require('strftime')
var server = http.createServer(function (request, response) {
  var readStream = fs.createReadStream(filePath)
  readStream.pipe(response)
})
server.listen(portNumber)

var args = process.argv;
var url = args[2]
var http = require('http')
http.get(url, function(response) {
  response.setEncoding('utf8')
  response.on('data', function(data) {
    console.log(data)
  })
  response.on('error', console.error)
}).on('error', console.error)

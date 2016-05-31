var args = process.argv
var portNumber = args[2]
var http = require('http')
function addJsonToResponse(data, response) {
  response.writeHead(200, {'Content-Type':'application/json'})
  response.end(JSON.stringify(data))
}
function parseTime(date) {
  return {
    "hour" : date.getHours(),
    "minute" : date.getMinutes(),
    "second" : date.getSeconds()
  }
}
function unixtime(date) {
  return { "unixtime" : date.getTime() }
}
function getIsoDate(urlObject) {
  return urlObject.query.substring(4)
}
var server = http.createServer(function (request, response) {
  var url = require('url')
  var urlObject = url.parse(request.url, true)
  var date = new Date(urlObject.query.iso)
  switch (urlObject.pathname) {
    case '/api/parsetime':
      addJsonToResponse(parseTime(date), response)
      break;
    case '/api/unixtime':
      addJsonToResponse(unixtime(date), response)
      break;
  }
})
server.listen(portNumber)

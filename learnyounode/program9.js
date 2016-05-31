var args = process.argv;
var urls = args.filter(function(element, index) {
  return index > 1;
})
urls.forEach(function (url) {
  processUrl(url)
})
function processUrl(url) {
  var http = require('http')
  var bl = require('bl')
  http.get(url, function(response) {
    response.pipe(bl(function(err, data){
      if (err) console.error(err)
      else {
        var dataString = data.toString();
        console.log(dataString)
      }
    }))
    response.on('error', console.error)
  }).on('error', console.error)

}

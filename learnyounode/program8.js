var args = process.argv;
var url = args[2]
var http = require('http')
var bl = require('bl')
http.get(url, function(response) {
  response.pipe(bl(function(err, data){
    if (err) console.error(err)
    else {
      var dataString = data.toString();
      console.log(dataString.length + '\n' + dataString)
    }
  }))
  response.on('error', console.error)
}).on('error', console.error)

var file = process.argv[2]
var fs = require('fs')
fs.readFile(file, 'utf8', function(error, text){
  if (!error) {
    //var text = buf.toString()
    var arrayLines = text.split('\n')
    console.log(arrayLines.length - 1)
  }
})

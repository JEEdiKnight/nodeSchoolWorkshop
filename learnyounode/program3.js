var file = process.argv[2]
var fs = require('fs')
var buf = fs.readFileSync(file)
var text = buf.toString()
var arrayLines = text.split('\n')
console.log(arrayLines.length - 1)

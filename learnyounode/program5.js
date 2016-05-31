var args = process.argv;
var folderPath = args[2]
var extension = '.' + args[3]
var fs = require('fs')
var pathUtil = require('path');
fs.readdir(folderPath, function(error, files){
  if (!error) {
    var extensionFiles = files.filter(function(file) {
      return pathUtil.extname(file) === extension;
    }).reduce(function(acum, extensionFile) {
      return acum + extensionFile + '\n';
    }, "")
    console.log(extensionFiles)
  }
})

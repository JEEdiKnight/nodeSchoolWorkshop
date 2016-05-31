module.exports = function (folderPath, extension, callback) {
  extension = '.' + extension
  var fs = require('fs')
  var pathUtil = require('path');
  fs.readdir(folderPath, function(error, files){
    if (error) return callback(error)
    var extensionFiles = files.filter(function(file) {
      return pathUtil.extname(file) === extension;
    })
    callback(null, extensionFiles)
  })
}

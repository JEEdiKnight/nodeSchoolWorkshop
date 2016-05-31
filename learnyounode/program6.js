var args = process.argv;
var folderPath = args[2]
var extension = args[3]
var util = require('./program6Module.js');
util(folderPath, extension, function(error, filteredFiles) {
  if (error) console.log(error)
  else {
    var result = filteredFiles.reduce(function(acum, extensionFile) {
      return acum + extensionFile + '\n';
    }, "")
    console.log(result)
  }
})

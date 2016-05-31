var array = process.argv;
var sum = array.reduce(function(acum, currentArg, index) {
  return (index < 2) ?  acum : (acum + Number(currentArg));
}, 0);
console.log(sum);

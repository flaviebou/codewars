function moveZeros(arr) {
  var result = arr.filter(function (x){return x!==0});
  var zero = arr.filter(function (x){return x===0}); 
  return result.concat(zero)
}

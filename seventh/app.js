var N = 100; 
var check = Array.apply(null, {length: N}).map(Number.call, Number);
var primeArray = [];

check.forEach(function(c){
  primeArray.push(check[0])
  if(c % 2 == 0){
    check.splice((check.indexOf(c)), 1)
  }
});

console.log("check is " + check);
console.log("prime array is " + primeArray);

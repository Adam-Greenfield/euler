var N = 100; 
var check = Array.apply(null, {length: N}).map(Number.call, Number);
check.splice(0,2)
var primeArray = [];

check.forEach(function(c){
  primeArray.push(check[0])
  if(c % (check[0]) == 0){
    check.splice((check.indexOf(c)), 1)
  }
});

console.log("check is " + check);
console.log("prime array is " + primeArray);

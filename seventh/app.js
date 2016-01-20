var N = 100; 
var check = Array.apply(null, {length: N}).map(Number.call, Number);
var primeArray = [];

check.forEach(function(c){
  if(c % 2 == 0){
    check.splice((check.indexOf(c)), 1)
  }
})
check.splice(0, 1);
console.log(check);

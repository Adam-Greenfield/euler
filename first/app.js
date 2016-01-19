var total = 0

sumMults = function(n){
  if((n % 3 == 0) || (n % 5 == 0)){
    return n
  }
  else return 0
}

for( x = 1; x < 1000; x ++){
  total = total + sumMults(x);
}

console.log(total)
console.log(23 * (24) / 2);
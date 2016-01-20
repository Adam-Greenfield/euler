var squareOfSums = 0
var sumOfSquares = 0
var sums = 0

for(n = 1; n <= 100; n ++){
  sumOfSquares = sumOfSquares + Math.pow(n, 2)
}

for(n = 1; n <= 100; n++){
  sums = sums + n
}

squareOfSums = Math.pow(sums, 2)

var result = squareOfSums - sumOfSquares;
console.log(result)


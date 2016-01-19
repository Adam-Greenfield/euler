var totalSum = 2
var fib = 0
var current = 0
var pre = 2
var doublePre = 1

sumUp = function(){
  if(fib <= 4000000){
    fib = pre + doublePre
    console.log(fib)
    doublePre = pre
    pre = fib
    if(fib % 2 == 0){
      totalSum = totalSum + fib
    } else return 0
  }
}

while(fib <= 4000000){
  sumUp()
}

console.log("total sum is" + totalSum)




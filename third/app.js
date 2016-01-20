var finalNum = 600851475143
range = []


for(n = 1; n < finalNum/2; n += 2 ){
  var isNotPrime = false
  if(finalNum % n == 0){
    for(x = 3; x < n/2; x += 2){
      if(n % x == 0){
        isNotPrime = true
      }
    }
    if(isNotPrime == false){
      range.push(n) 
    }
  }
}
console.log(range)
console.log(range[range.length - 1])
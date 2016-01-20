var finalNum = 600851475143
range = []


// if(finalNum % 3 == 0 ){
  var newNum = finalNum / ( 71 )
  for(n = 1; n < newNum /2; n += 2 ){
    var isNotPrime = false
    if(newNum % n == 0){
      for(x = 3; x < n/2; x += 2){
        if(n % x == 0){
          isNotPrime = true
        }
      }
      if(isNotPrime == false){
        range.push(n)
        console.log(n)
      }
    }
  }
  console.log(range)
  console.log(range[range.length - 1])
// }
// else console.log("no dice")

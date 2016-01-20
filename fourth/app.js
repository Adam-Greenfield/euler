var palis = []

for(x = 100; x < 1000; x++){
  for(y = 100; y < 1000; y++){
    var test = x * y
    var array = test.toString().split("")
    var isPali = 1
    for(i = 0; i <= 2; i++){
      if(array[i] != array[array.length - (1 + i)]){
         isPali = 2
      }
    }
    if(isPali == 1){
      var newArray = parseInt(array.join(""));
      palis.push(newArray)
    }
  }
}
palis.sort(function(a, b){
  return a - b;
})
console.log(palis[palis.length - 1]);
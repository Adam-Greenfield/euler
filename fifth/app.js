var nums = []
var NumsFalse = false
var check = []

for(n = 2520; n <= 1000000000; n += 2520){
  console.log(n)
  NumsFalse = false
  check = [];
  for(x = 1; x <= 20; x ++){
    check.push(n % x);
  }
  for(i = 0; i < 20; i++){
    if(check[i] != 0){
      NumsFalse = true
    }
  }
  if(NumsFalse == false){
    nums.push(n)
  }
}

console.log(nums[0]);
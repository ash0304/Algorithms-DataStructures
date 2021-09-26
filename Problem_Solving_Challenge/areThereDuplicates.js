// Write a function called areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the mutiple pointers pattern.
// required -> Time complexity O (n), Space complexity O (n)

// frequency counter pattern solution
// 解題思路 - 利用ES6解構賦值拆分參數物件為陣列, 透過物件特性紀錄出現次數
// 若篩選到有出現過的, 代表有重複, 回傳 true, 反之回傳 false

function areThereDuplicates(arg1, arg2, arg3) {
  let lookup = {};
  let argArr = [...arguments];
  for (let val of argArr) {
    if (lookup[val]) {
      return true;
    } else {
      lookup[val] = 1;
    }
  }
  return false;
}

const result = areThereDuplicates(1, 1, 3);
console.log(result);

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

// mutiple pointers pattern solution
// 解題思路 - 用兩個 pointers 的方式去倆倆比對, 過程中遇到卡很久的問題出在sort()這個原型方法
// 因為給定測驗的 input 中有字串, 原寫法: sort((a, b) => a - b) 指對數字生效排序, 字串 input: 'a', 'b', 'c', 'a' 卻不生效, 導致卡了很久
// 後來只能使用 default 的 sort() 不加參數, 完成正常的由小到大排列

function areThereDuplicates1(arg1, arg2, arg3) {
  let argArr = Array.from(arguments).sort();
  let i = 0;
  for (let j = 1; j < argArr.length; j++) {
    if (argArr[i] === argArr[j]) {
      return true;
    }
    i++;
  }
  return false;
}

const result1 = areThereDuplicates1('a', 'b', 'c', 'a');
console.log(result1);

// 一行解法
// 解題思路 - 自己一開始知道的方法, 透過 Set 的資料不會有重複的特性去解決問題
// Set特性中屬性為唯一, 所以使用 Set 的 size 來與 arguments 的 length 做比較, 如果不同 -> 代表有重複, 回傳 true, 反之回傳 false

function areThereDuplicates2(arg1, arg2, arg3) {
  return new Set(arguments).size !== arguments.length;
}

const result2 = areThereDuplicates2('a', 'b', 'c', 'a');
console.log(result2);

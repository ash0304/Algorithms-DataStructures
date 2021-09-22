// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Step 1. Understand the problem -> 編寫一函式名為same, 給定兩陣列為參數, 如果每個 陣列 1 的"值的二次方"存在於 陣列 2, 該函式會回傳true, 否則回傳false
// 解題思路: 先判斷兩陣列長度是否相等, 若不相等基本上不可能符合題目條件, 可先排除, 透過遍歷 陣列 1 比對 陣列2 的值是否有 陣列1的值二次方 -> 採用indexOf,
// 若沒找到直接回傳false, 有找到則再進行一次迴圈時, 移除 陣列2 中已被找過的目標 -> 採用splice (會改變陣列)

// Native Solution  -> Time Complexity - N^2 (for回圈內還使用idnexOf)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let findTarget = arr2.indexOf(arr1[i] ** 2);
    // 沒找到會回傳 -1
    if (findTarget === -1) return false;
    // 有找到會回傳該目標位置index, 透過splice 可以使用目標index指定位置, 並用第二個參數決定刪除數量
    arr2.splice(findTarget, 1);
  }
  return true;
}

let result = same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result);

// Refactored - Time complexity - O(n)
// 解題思路: 透過物件特性去紀錄兩陣列元素出現次數，兩物件各自透過遍歷陣列賦值，最後退過遍歷 物件1 的key來排除不符合情況 
// 核心 -> value in object 可以直接確定該值是否為物件中的一個鍵, 也就不用使用indexOf去遍歷
// 核心2 -> 透過比對兩物件鍵的值, 確定兩物件的對應二次方值出現次數一至, 也就不用使用splice去移除元素

function same2(arr1, arr2) {
  // 一樣先排除長度不同的狀況
  if (arr1.length !== arr2.length) return false;
  // 透過物件來解題
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // for of 寫法取值, 透過物件給值紀錄陣列元素出現次數, 皆為單層迴圈
  for (let val of arr1) {
    // 賦值 & 次數 (有出現過次數加 1)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    // 賦值 & 次數 (有出現過次數加 1)
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // for in 寫法取物件的 key
  for (let key in frequencyCounter1) {
    // 若 物件1 的 key二次方 不存在於 物件2 -> 不符回傳false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 比對 陣列1 與 陣列2 內部元素出現次數 -> eg. arr1中 2 出現兩次 arr2 中 4 就要出現兩次
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

let result2 = same2([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result2);

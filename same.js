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

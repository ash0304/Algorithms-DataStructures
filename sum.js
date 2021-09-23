// Multiple Pointers Pattern

// Write a function called sumZero which accepts a sorted array of intergers.
// The function should find the first pair where the sum is 0.
// Return an array that includes both values that sum to zero or undefined if a pair doesn't exist.

// Step 1. Understand Problem -> 編寫一函式名為 sumZero , 接受一個排列好的整數陣列為參數, 此函式會回傳第一組相加總和為 0 的配對
// 回傳格式微陣列, 包含兩者的值, 若配對不存在回傳undefined

// 解題思路 - 暴力解法 -> 透過兩層for迴圈遍歷陣列, 一一配對找出符合條件的組合
// Time complexity O(n^2) & Space complexity O(1)
function sumZero(sortArr) {
  for (let i = 0; i < sortArr.length; i++) {
    for (let j = i + 1; j < sortArr.length; j++) {
      if (sortArr[i] + sortArr[j] === 0) {
        return [sortArr[i], sortArr[j]];
      }
    }
  }
}

const result = sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);
console.log(result);

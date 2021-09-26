// Divide And Conquer Pattern

// Given a sorted array of intergers, write a function called search,
// that accepts a value and returns the index where the value passed to the function is located.
// If the value is not found, return -1.

// Brute force - 暴力解法 -> 直接把排列好的陣列遍歷一遍, 找到匹配的值, 直接回傳當下 i 即為 index
// Linear Search - Time complexity O(n)

function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

const result = search([1, 2, 3, 4, 5, 6], 4);
console.log(result);

// Binary Search - Time complexity Log(n)
// 解題思路 - 二分搜尋法 -> 透過定義首尾index, 每次做切半去靠近目標的index, (start + end) / 2 可以算出中間的index
// 因為陣列為排列好, 一定是有小而大, 若當前中間的值比目標value大, 則尾部須往內縮減, 反之則首部需往內遞增
// 此解法的時間複雜度只有Log(n), 優於線性查詢

function binarySearch(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid > val]) {
      end--;
    } else {
      start++;
    }
  }
  return -1;
}

const result1 = binarySearch([1, 2, 3, 4, 5, 6], 4);
console.log(result1);

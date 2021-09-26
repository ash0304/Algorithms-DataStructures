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
}

const result = search([1, 2, 3, 4, 5, 6], 4);
console.log(result);

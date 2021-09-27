// Given an array of integers and a number, write a function called maxSubarraySum,
// which finds the maximum sum of a subarray with the length of the number passed to the function.
// Note that a subarray must consist of consecutive elements from the original array,
// In the first example below, [100, 200, 300] is subarray of the original array, but [100, 300] is not.
// example 1: maxSubarraySum([100, 200, 300, 400], 2) //700

// require: Time complexity - O(n), Space complexity - O(1)

// 理解問題 -> 給定一個數字陣列和數字作為參數, 寫一函示找到陣列內長度n的片段的最大總和並回傳, 註記: 找到的片段組合在原始陣列中需要為連續的元素不能跳著配對
// 解題思路 -> 透過Sliding Window(滑動視窗)的概念解題, 視窗長度為n, 先用 for 迴圈算出不含視窗尾部的總和 -> 暫時總和
// 透過去頭加尾的方式, 比較每一段視窗大小, 此法就不用每次重新算每個長度n的視窗總和, 透過每次去頭加尾後比較大小並刷新當前最大值, 最後的最大值即為符合條件的答案

function maxSubarraySum(arr, n) {
  let tempMax = 0;
  let resultMax = 0;
  if (n > arr.length) return null;
  for (let i = 0; i < n; i++) {
    tempMax += arr[i];
  }
  resultMax = tempMax;
  for (let i = n; i < arr.length; i++) {
    tempMax = tempMax - arr[i - n] + arr[i];
    resultMax = Math.max(resultMax, tempMax);
  }
  return resultMax;
}

const result = maxSubarraySum([100, 200, 300, 400], 2); //700
console.log(result);

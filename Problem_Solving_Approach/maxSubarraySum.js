// Sliding Window Pattern

// Write a function called maxSubArraySum which accepts an array of intergers and a number call n.
// The function should calculate the maximun sum of n consecutive elements in the array.

// Step 1. Understand Problem -> 編寫一函式 maxSubArraySum 接受兩個參數, 第一個參數為數字陣列arr, 第二個函數為數字n
// 該函式需回傳數字陣列arr內 連續 n 個數字的總和最大值

// 解題思路 -> 以Sliding Window概念解題, 預設有一個視窗(Winodw), 起點為0, 長度為n, 先算出到 n 前相加的最大值, 後面再以減去頭, 增加尾的方式比較每個Window的大小
// 這樣就不用煩惱每次都要做相加的動作 e.g 條件為 arr = [2, 6, 9, 2], n = 3, 先算出 n = 3 位置前的總和, 2 + 6 = 8, 往後移動視窗只需要 - 2  然後 + 9 就能算出下
// 個視窗的總和, 每次算出來後比大小, 就能得出在此陣列中, 總和最大的組合

function maxSubArraySum(arr, n) {
  // 建立視窗範圍
  let maxSum = 0;
  let tempSum = 0;

  // 先算出 n 前的總和
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  // 先把當前總和指向暫時總和用以處理後續去頭加尾
  tempSum = maxSum;
  // 從 "n" 開始處理每個視窗的總和, 並刷新當前最大總和值
  for (let i = n; i < arr.length; i++) {
    // 去頭加尾, i - n 為當前視窗首位位置
    tempSum = tempSum - arr[i - n] + arr[i];
    // 刷新當前最大總和
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

const result = maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
console.log(result);
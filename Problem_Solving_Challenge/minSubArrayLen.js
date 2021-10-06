// Write a function call minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer
// passed to the function. If there isn't one return 0 instead.

// require: Time complexity - O(n), Space complexity - O(1)

// 理解問題 -> 給定一個函式, 傳入兩參數, 分別為一包含正整數的陣列arr及一個正整數參數sum, 此函式需回傳在"連續"元素總和大於等於sum的"最小"元素長度
// 如果沒有符合條件的結果, 則回傳0替代

// 解題思路 -> 想不出來答案, 參考題解, 是透過 Sliding Window 概念解題, 設定兩個 pointer 在同一個位置, 及一個total紀錄當前總於, 與另一個minLen紀錄當前最短長度
// pointer 起始位置都為0, 預設總和 total 為 0, 最小長度 minLen 預設為 Infinity, 透過 while loop 做資料篩選, 條件為 start pointer 需要小於陣列長度, 一旦超過
// 則跳出迴圈, 迴圈內部根據題目要求編寫判斷, 分別為總和 total 尚未大於等於 sum 的狀況 , 及已經符合大於等於 sum 的狀況, 及找不到任何符合的情況, 如果不符合 ->
// 持續累加total, 使用當前 total 不斷累加 end pointer 位置的數值, 並移動 end pointer 來記錄, 直到符合條件, 符合條件後, 比對當下最小長度並記錄 minLen (end - start)
// 紀錄完畢後, 去除當前 start pointer 位置以縮小視窗(Window)來確認有無可能有更短距離 -> 因為縮減後可能仍符合條件 or 不符合條件(繼續累加end pointer) 
// 直到所有可能都遍歷過後, 跳出迴圈 , 當下 minLen 除非找不到結果仍為 Infinity 需要回傳0, 否則該結果就是最短距離

function minSubarrayLen(arr, sum) {
  // 當前總和
  let total = 0;
  // 視窗起點
  let start = 0;
  // 視窗終點
  let end = 0;
  // 最小長度
  let minLen = Infinity;

  // 由while迴圈遍歷, 條件為視窗起點不能大於陣列長度, 因為最小視窗長度能為1, 即一個元素就滿足題目條件
  while (start < arr.length) {
    // 如果當前總和還比目標少, 且視窗終點仍小於陣列長度(不然視窗會超出陣列大小)
    if ((total < sum) & (end < arr.length)) {
      // 計算當前總和, 累加上去
      total += arr[end];
      // 並擴張視窗大小, 遞增終點
      end++;
    } else if (total >= sum) {
      // 滿足條件時, 大於或剛好等於時
      // 計算當前長度,(end - start) 且與目前最小長度做比較, 取最小
      minLen = Math.min(minLen, end - start);
      // 去頭, 收縮視窗大小, 如果去頭後當前總和不滿足了, 回到另一個判定使視窗規模擴大
      total -= arr[start];
      // 收縮大小, 視窗起點遞增
      start++;
    } else {
      // 其他狀況, 如: 到底端了或者已找不到匹配內容, 跳出迴圈
      break;
    }
    // 回傳判斷最小是否為無限, 若是回傳 0 , 不是則回傳當前最小值為答案
    return minLen === Infinity ? 0 : minLen;
  }
}

const result = minSubarrayLen([2, 3, 1, 2, 4, 3], 7); //2

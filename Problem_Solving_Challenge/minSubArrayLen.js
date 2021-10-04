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

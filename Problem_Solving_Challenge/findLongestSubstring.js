// Write a function call findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinsct characters.

// require: Time Complexity - O(n)

// 理解題目 -> 給一函式, 可傳入一字串當作參數, 需回傳長度最長的字串, 且該字串內的元素不可重複, 若為空字串, 則回傳0

// 解題思路 -> 使用 Sliding Winodw 概念解題, 用Set的資料結構來記錄(因為Set內不會有重複元素), 先處理空字串情況, 回傳0, 正常情況則透過while loop處理資料,
// 如果mySet中沒有該筆資料紀錄, 則紀錄, 代表在遇到重複元素之前都會被記錄近mySet中, 透過遞增 j 擴展視窗(Window)長度, 透過j - i + 1 紀錄當前長度
// 並且持續更新最長長度, 一但遇到重複元素, while loop 從mySet中從視窗頭部 i 端開始刪除紀錄在mySet中的元素, 遞增 i , 直到沒有重複, 並跳出迴圈
// 最後回傳maxLen即為最常長度的不重複元素字串  

function findLongestSubstring(str) {
  let start = 0;
  let end = 0;
  let mySet = new Set();
  let maxLen = 0;

  if (!str) return 0;

  while (end < str.length) {
    let c = str[end];
    while (mySet.has(c)) {
      mySet.delete(str[start]);
      start++;
    }
    mySet.add(c);
    maxLen = Math.max(maxLen, end - start + 1);
    end++;
  }
  return maxLen;
}

const result = findLongestSubstring('rithmschool');
console.log(result);

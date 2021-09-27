// Write a function called isSubsequence which takes in two strings and checks whether
// the characters in the firest string form a subsequence of the characters in the second string.
// In other words, the function should check whether the characters in the first string appear somewhere in the second string,
// without their order changing.
// require: Time Complexity O(n + m), Space Complexity O(1)

// 理解問題 -> 給定兩個字串, 寫一個函式判斷字串2是否包含字串1在內回傳 true 或 false, 字串11的元素可以分散到字串2中組成, 但是出現順序需要與字串1相同
// 解題思路 -> 定義兩個 pointer , 一個用來定位字串1, 一個用來定義字串2, 透過 while 迴圈字串2的方式來判斷 pointers 的移動
// 若字串1的 i 位置值與字串2的 j 位置值相等 -> 代表有找到 -> 有找到 i 就移動到下個要找的位置 i++, j 則不管有無找到都要往下個位置移動 j++
// 如果 i++ 後相等於字串1的長度 -> 代表已經是字串1的最後一位了, 全部找完都符合條件, 回傳 true
// 若迴圈跑完都沒有觸發 i 等於字串1的長度, 代表會找到字串2的最後一位為止才會跳出迴圈, 代表 i 已經超過字串1本身的長度了 -> 跳出迴圈後不符合條件, 回傳 fasle

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1.length) return true;
  while (j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    if (i === str1.length) return true;
    j++;
  }
  return false;
}

// const result = isSubsequence('abc', 'abracadabra');
const result = isSubsequence(
  'Thqckbrwnfxjmpdvrthlzydg',
  'The quick brown fox jumped over the lazy dog'
);
// const result = isSubsequence('abc', 'acb');
console.log(result);

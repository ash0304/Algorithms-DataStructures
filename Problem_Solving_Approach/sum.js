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

// Refactor - Time Complexity O(N) & Space Complexity O(1)

// 解題思路 -> 透過設定首尾兩個 pointer 來定位, 使用 while 迴圈次次遍歷往內縮小範圍, 因為陣列式已經排列好的形式, 左至右一定是小到大
// 若剛好相加等於 0 則回傳兩個 pointer 再陣列中各自代表的值(陣列形式)
// 若不符合, 以 sum 的值作為判斷:
// sum 大於 0 -> 代表右邊 pointer(right) 的值太大了相加仍大於 0 需要遞減
// sum 小於 0 -> 代表左邊 pointer(right) 的值太小了相加仍小於 0 需要遞增

function sumZero2(sortArr) {
  // 定義兩個pointer座標index
  let left = 0;
  let right = sortArr.length - 1;
  // 透過while迴圈判斷
  while (left < right) {
    // 建立總和變數, 方便判斷
    let sum = sortArr[left] + sortArr[right];
    if (sum === 0) {
      return [sortArr[left], sortArr[right]];
    } else if (sum > 0) {
      // 透過總和大小判斷左右兩個pointer需要往內縮 eg. left++ or right--
      right--;
    } else {
      left++;
    }
  }
}

const result2 = sumZero2([-4, -3, -2, -1, 0, 1, 2, 5]);
console.log(result2);

// Challenge - countUniqueValues (自解) Time complexity - O(n) & Space complexity O(1)

// implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
// There can be negative numbers in the array, but it will always be sorted.

// Understand Problem -> 編寫一個函式, 接受一個排列好的陣列做為參數, 接受負數為陣列元素, 但仍需要為排列好的陣列, 回傳總共出現幾個獨特數字的次數
// 解題思路 -> 以 Two Pointers 方式解題, 設第一點為首點 i, 第二點為鄰近的下一點 j, 先排除空陣列的情況回傳 0, 透過 while 迴圈遍歷整個排列好的陣列
// 固定 i 點、 j 點, 根據兩個位置的值相不相同來決定要移動的點, 若相同 -> j 遞增 i 不動, 若不同 -> i 遞增並將目前 i 點位置的值替換為目前 j 點位置的值
// 最後因為有經過替換, 則從最開始到 i 點目前的陣列為排列好的陣列且不重複, 題目答案需要獨特數字出現的"次數", 這邊只要回傳 i + 1 就可以得到該次數

// 範例:

//  i
// [1, 1, 2, 3]
//     j

//  i
// [1, 1, 2, 3]
//        j

//     i
// [1, 2, 2, 3]
//        j

//     i
// [1, 2, 2, 3]
//           j

//        i
// [1, 2, 3, 3]
//           j

// 因為 j 到陣列尾部了, 當前 i 的 index 為 2 則計算目前 i + 1 即可以得出總共出現幾個獨特數字次數

function countUniqueValues(sortArr) {
  // 先排除無元素
  if (!sortArr.length) return 0;
  // 先確定兩個 pointers
  let i = 0;
  let j = 1;
  // 一點固定, 第二點往前遍歷
  while (j < sortArr.length) {
    // 碰到一樣的數字, 讓 j 點繼續移動
    if (sortArr[i] === sortArr[j]) {
      j++;
    } else {
      // 碰到不一樣的數字, 讓 i 點往前一格
      i++;
      // 並將這格替換為目前 j 點目前的值
      sortArr[i] = sortArr[j];
    }
  }
  // 回傳目前 i 的位置加1, 因為 i 為 index 從 0 開始算
  return i + 1;
}

const result3 = countUniqueValues([-1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
console.log(result3);

// Challenge - countUniqueValues (題解) Time complexity - O(n) & Space complexity O(1)
// 解題思路 -> 基本上一樣差別在於我原本使用while跑迴圈, 題解使用for迴圈, 且不須多寫一個判斷, 解題核心沒變

function countUniqueValues1(sortArr) {
  // 先排除無元素
  if (!sortArr.length) return 0;
  // 設i點
  let i = 0;
  // j點設置for迴圈內, 一樣的條件 -> 小於陣列長度
  for (let j = 1; j < sortArr.length; j++) {
    // 若遇不相同, 一樣i遞增且替換i點目前的值為j點目前的值, 不相等的情況j會自己再for回圈內遞增
    if (sortArr[i] !== sortArr[j]) {
      i++;
      sortArr[i] = sortArr[j];
    }
  }
  // 回傳目前 i 的位置加1, 因為 i 為 index 從 0 開始算
  return i + 1;
}

const result4 = countUniqueValues1([-1, 1, 1, 2, 3, 3, 4, 4, 5, 6]);
console.log(result4);
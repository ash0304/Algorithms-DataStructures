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

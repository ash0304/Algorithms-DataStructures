// Write a function called sameFrequency. Given two positive integers, find out if the numbers have the same frequency of digits.
// required -> Time complexity O (n)

// 解題思路: frequency counter pattern -> 將兩數字轉字串, 利用物件特性紀錄字串元素出現次數, 最後比對是否出現次數相符

function sameFrequency(num1, num2) {
  let frequency1 = {};
  let frequency2 = {};
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  for (let val of str1) {
    frequency1[val] ? (frequency1[val] += 1) : (frequency1[val] = 1);
  }
  for (let val of str2) {
    frequency2[val] ? (frequency2[val] += 1) : (frequency2[val] = 1);
  }

  for (let val of str1) {
    if (frequency1[val] !== frequency2[val]) return false;
  }
  return true;
}

const result = sameFrequency(182, 281);
console.log(result);

// 優化寫法 - 只用一個物件紀錄

function sameFrequency1(num1, num2) {
  let lookup = {};
  let str1 = num1.toString();
  let str2 = num2.toString();

  if (str1.length !== str2.length) return false;

  for (let val of str1) {
    lookup[val] ? (lookup[val] += 1) : (lookup[val] = 1);
  }

  for (let val of str2) {
    if (!lookup[val]) {
      return false;
    } else {
      lookup[val] = --lookup[val];
    }
  }
  return true;
}

const result1 = sameFrequency1(222, 222);
console.log(result1);

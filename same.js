// Write a function called same, which accepts two arrays.
// The function should return true if every value in the array has it's corresponding value squared in the second array.
// The frequency of values must be the same.

// Step 1. Understand the problem -> 編寫一函式名為same, 給定兩陣列為參數, 如果每個 陣列 1 的"值的二次方"存在於 陣列 2, 該函式會回傳true, 否則回傳false
// 解題思路: 先判斷兩陣列長度是否相等, 若不相等基本上不可能符合題目條件, 可先排除, 透過遍歷 陣列 1 比對 陣列2 的值是否有 陣列1的值二次方 -> 採用indexOf,
// 若沒找到直接回傳false, 有找到則再進行一次迴圈時, 移除 陣列2 中已被找過的目標 -> 採用splice (會改變陣列)

// Native Solution  -> Time Complexity - N^2 (for回圈內還使用idnexOf)

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    let findTarget = arr2.indexOf(arr1[i] ** 2);
    // 沒找到會回傳 -1
    if (findTarget === -1) return false;
    // 有找到會回傳該目標位置index, 透過splice 可以使用目標index指定位置, 並用第二個參數決定刪除數量
    arr2.splice(findTarget, 1);
  }
  return true;
}

let result = same([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result);

// Refactored - Time complexity - O(n)
// 解題思路: 透過物件特性去紀錄兩陣列元素出現次數，兩物件各自透過遍歷陣列賦值，最後退過遍歷 物件1 的key來排除不符合情況
// 核心 -> value in object 可以直接確定該值是否為物件中的一個鍵, 也就不用使用indexOf去遍歷
// 核心2 -> 透過比對兩物件鍵的值, 確定兩物件的對應二次方值出現次數一至, 也就不用使用splice去移除元素

function same2(arr1, arr2) {
  // 一樣先排除長度不同的狀況
  if (arr1.length !== arr2.length) return false;
  // 透過物件來解題
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  // for of 寫法取值, 透過物件給值紀錄陣列元素出現次數, 皆為單層迴圈
  for (let val of arr1) {
    // 賦值 & 次數 (有出現過次數加 1)
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    // 賦值 & 次數 (有出現過次數加 1)
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  // for in 寫法取物件的 key
  for (let key in frequencyCounter1) {
    // 若 物件1 的 key二次方 不存在於 物件2 -> 不符回傳false
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    // 比對 陣列1 與 陣列2 內部元素出現次數 -> eg. arr1中 2 出現兩次 arr2 中 4 就要出現兩次
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

let result2 = same2([1, 2, 3, 2], [9, 1, 4, 4]);
console.log(result2);

function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  const lookup = {};

  for (let val of arr2) {
    lookup[val] = lookup[val] ? ++lookup[val] : 1;
  }

  for (let val of arr1) {
    if (!lookup[val ** 2]) {
      return false;
    } else {
      lookup[val ** 2] = --lookup[val ** 2];
    }
  }
  return true;
}

let result5 = same3([1, 2, 3, 2], [9, 1, 4, 4]);
console.log('challange solution', result5);

// Challenge - Anagrams (自解) Time complexity - O(n)
// Given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Step 1. Understand Problem -> 編寫一個函式, 該函式有兩個字串為參數, 判斷 字串2 是否為 字串1 打亂後的字謎

// 解題思路: 先判斷兩字串長度是否相等, 若不相等基本可以先排除, 利用物件紀錄兩字串內元素出現的次數, 透過遍歷比對兩物件, 判斷兩物件再相同鍵下的值是否相同

function anagrams(str1, str2) {
  let frequency1 = {};
  let frequency2 = {};

  for (let value of str1) {
    frequency1[value] = (frequency1[value] || 0) + 1;
  }
  for (let value of str2) {
    frequency2[value] = (frequency2[value] || 0) + 1;
  }
  for (let key in frequency1) {
    if (!(key in frequency2)) return false;

    if (frequency1[key] !== frequency2[key]) return false;
  }
  return true;
}

let result3 = anagrams('awesome', 'emosewa');
console.log(result3);

// 題解 - Time complexity - O(n)

// 核心解法相同，同樣運用物件特性來記錄與比對, 但這邊其實只用了一個物件就能達成比對的功能, 占用較少的記憶體資源
// 第一題same其實也可以用此法來寫

function validAnagrams(first, second) {
  // 先排除兩字串不同的狀況
  if (first.length !== second.length) return false;
  // 建立一物件用於紀錄
  const lookup = {};

  for (let val of first) {
    // 紀錄數值於 lookup 物件, 並計算次數
    lookup[val] = lookup[val] ? ++lookup[val] : 1;
  }
  // 遍歷 second 比對 first 紀錄的值
  for (let val of second) {
    // 若比對不成, 直接回傳false
    if (!lookup[val]) {
      return false;
    } else {
      // 計算過的, 次數需要減 1
      lookup[val] = --lookup[val];
    }
  }
  return true;
}

let result4 = validAnagrams('awesome', 'emosewa');
console.log(result4);

// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals the target average.
// There may be more than one pair that matches the average target.
// Require: Time complexity O(n), Space complexity O(1)

// Mutiple Pointers
// 理解問題 -> 給定一個"已排列"的陣列, 跟一個目標值, 求判定該陣列內是否存在一對或多對以上的配對, 且配對的平均值等於目標值
// 解題思路 -> 定義首尾兩個 pointer , 透過兩者相加除以2取得平均值, 根據平均值與目標值的大小比較, 來判定需要遞增首部 pointer 還是遞減尾部 pointer
// 理想情況下是直接找到就不做往內縮小範圍的動作

function averagePair(arr, target) {
  // 先排除空陣列
  if (!arr.length) return false;
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let average = (arr[start] + arr[end]) / 2;
    if (average === target) {
      return true;
    } else if (average > target) {
      end--;
    } else {
      start++;
    }
  }
  return false;
}

const result = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
console.log(result);

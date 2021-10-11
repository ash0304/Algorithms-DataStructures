var threeSum = function (nums) {
  // sort first
  nums.sort((a, b) => a - b);
  const result = [];
  // loop nums
  for (let i = 0; i < nums.length - 3; i++) {
    // duplicates
    if (nums[i] === nums[i - 1]) continue;
    // left pointer
    let left = i + 1;
    // right pointer
    let right = nums.length - 1;
    // while loop measure two pointer's sum
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      // equals to 0
      if (sum === 0) {
        // push answer to result
        result.push([nums[i], nums[left], nums[right]]);
        // get rid of duplicates
        while (nums[left] === nums[left + 1]) left++;
        // get rid of duplicates
        while (nums[right] === nums[right - 1]) right--;
        // our pointers are still duplicate, so move one more time
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};
// [-4, -1, -1, 0, 1, 2]
const result = threeSum([-1, 0, 1, 2, -1, -4]);
console.log(result);

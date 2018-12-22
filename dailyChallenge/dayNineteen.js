// Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
//
// You may assume no duplicates in the array.
//
// Example 1:
//
// Input: [1,3,5,6], 5
// Output: 2
// Example 2:
//
// Input: [1,3,5,6], 2
// Output: 1
// Example 3:
//
// Input: [1,3,5,6], 7
// Output: 4
// Example 4:
//
// Input: [1,3,5,6], 0
// Output: 0

let searchInsert = (nums, target) => {
  let first = 0;
  let last = nums.length - 1;
  let i = Math.floor((last - first) / 2) + first;

  if (target > nums[nums.length-1]) {
    i = nums.length;
  }
  else {
    while (first < last) {
      let value = nums[i];
      if (value === target) {
        result = i;
        break;
        }
      else if (target < value) {
        last = i;
      }
      else {
        first = i + 1;
      }
      i = Math.floor((last - first) / 2) + first;
    }
  }
  return i;
};

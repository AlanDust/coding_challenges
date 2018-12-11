// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

let isPalindrome = (integer) => {
  let output = false;
  if(integer < 0) {
    return output;
  }
  let toString = integer.toString();
  let array = toString.split("");
  let backwardsIntegerArray = [];
  let backwardsInteger = "";
  array.forEach((number) => {
    backwardsIntegerArray.unshift(number);
  });
  backwardsIntegerArray.forEach((number) => {
    backwardsInteger += number;
  });
  let backwardsIntegerAsNumber = parseInt(backwardsInteger);
  if(backwardsIntegerAsNumber === integer) {
    output = true;
  }
  return output;
};

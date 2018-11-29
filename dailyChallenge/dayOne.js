// Instructions:
// review a sequence of digits (your puzzle input)
// and find the sum of all digits that match the
// next digit in the list. The list is circular,
// so the digit after the last digit is the first digit in the list.

// 1122 produces a sum of 3 (1 + 2) because the first digit (1) matches the second digit and the third digit (2) matches the fourth digit.
// 1111 produces 4 because each digit (all 1) matches the next.
// 1234 produces 0 because no digit matches the next.
// 91212129 produces 9 because the only digit that matches the next one is the last digit, 9.

let dayOne = (num) => {
  let string = num.toString()
  let array = string.split("");
  let counter = 0;
  let newSum = 0;
  let lastNum = array.length - 1

  if(array[0] === array[lastNum]) {
    newSum += parseInt(array[0])
  }

  array.forEach((number) => {
    n = parseInt(number);
    c = counter - 1
    if(n === parseInt(array[c])) {
      newSum += n;
    }
    counter ++;
  });
  return newSum;
};

// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output: 321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21

let reverseDigitsOfInteger = (number) => {
  let toString = number.toString();
  let array = toString.split("");
  let negative = false;
  let newArray = [];
  let answer = "";
  if(array[0] === "-"){
    negative = true;
    array.shift();
  }
  while(array[array.length-1] === "0"){
    array.pop();
  }
  array.forEach((number) => {
    newArray.unshift(number);
  });
  if(negative === true){
    newArray.unshift("-");
  }
  newArray.forEach((number) => {
    answer += number;
  });
  number = parseInt(answer);
  let realAnswer;
  if(number > 65535) {
    realAnswer = 0;
  } else {
    realAnswer = number;
  }
  return realAnswer;
};

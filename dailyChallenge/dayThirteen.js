// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.
//
// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, two is written as II in Roman numeral, just two one's added together. Twelve is written as, XII, which is simply X + II. The number twenty seven is written as XXVII, which is XX + V + II.
//
// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:
//
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer. Input is guaranteed to be within the range from 1 to 3999.
//
// Example 1:
//
// Input: "III"
// Output: 3
// Example 2:
//
// Input: "IV"
// Output: 4
// Example 3:
//
// Input: "IX"
// Output: 9
// Example 4:
//
// Input: "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 5:
//
// Input: "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

let romanToInt = (string) => {
  let count = 0;
  let array = string.split("");
  let total = 0;
  while (count < array.length) {
    let letter = array[count];
    if(letter === "I") {
      if(array[count+1] === "V"){
        total += 4;
        count += 2;
      }else if(array[count+1] === "X"){
        total += 9;
        count += 2;
      } else {
        total += 1;
        count ++;
      }
    }
    if(letter === "X") {
      if(array[count+1] === "L"){
        total += 40;
        count += 2;
      }else if(array[count+1] === "C"){
        total += 90;
        count += 2;
      } else {
        total += 10;
        count ++;
      }
    }
    if(letter === "C") {
      if(array[count+1] === "D"){
        total += 400;
        count += 2;
      }else if(array[count+1] === "M"){
        total += 900;
        count += 2;
      } else {
        total += 100;
        count ++;
      }
    }
    if(letter === "V"){
      total += 5;
      count ++;
    } else if(letter === "L"){
      total += 50;
      count ++;
    } else if(letter === "D"){
      total += 500;
      count ++;
    } else if(letter === "M"){
      total += 1000;
      count ++;
    }
  }
  return total;
};

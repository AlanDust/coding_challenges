// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.

let longestCommonPrefix = (array) => {
  let count = 0;
  let answer = "";
  let nextWordArray;
  if(array.length > 0){
    nextWordArray = array[0].split("");
    while (count < array.length - 1) {
      let nextWordLength = nextWordArray.length;
      let commonPrefix = [];
      let countPlusOne = (count + 1);
      let lettersArray = [];
      if(array[countPlusOne] !== undefined){
        lettersArray = array[countPlusOne].split("");
        let letterIndex = 0;
        if (letterIndex < nextWordArray.length){
          while (lettersArray[letterIndex] === nextWordArray[letterIndex]){
            commonPrefix.push(lettersArray[letterIndex]);
            letterIndex ++;
          }
        }
      }
      nextWordArray = commonPrefix;
      count ++;
    }
    if(nextWordArray !== []){
      nextWordArray.forEach((letter) =>{
        answer += letter;
      });
    } else {
      answer = "";
    }
  }
  return answer;
};

// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
//
// An input string is valid if:
//
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.
//
// Example 1:
//
// Input: "()"
// Output: true
// Example 2:
//
// Input: "()[]{}"
// Output: true
// Example 3:
//
// Input: "(]"
// Output: false
// Example 4:
//
// Input: "([)]"
// Output: false
// Example 5:
//
// Input: "{[]}"
// Output: true

let isValid = (string) => {
  let valid;
  let array = string.split("");
  let index = 0;
  if(string !== ''){
    valid = false;
    if(array[0] === ")" || array[0] === "}" || array[0] === "]") {
      valid = false;
    } else {
      let backwardsBrackets = [];
      let fullArray = [];
      array.forEach((p) => {
        if(p === "(") {
          fullArray.splice(index, 0, p);
          fullArray.splice(index+1, 0, ")");
          index ++;
        } else if(p === "[") {
          fullArray.splice(index, 0, p);
          fullArray.splice(index+1, 0, "]");
          index ++;
        } else if(p === "{"){
          fullArray.splice(index, 0, p);
          fullArray.splice(index+1, 0, "}");
          index ++;
        } else {
          index ++;
        }
      });
      let word = "";
      fullArray.forEach((paren) =>{
        word += paren;
      });
      if(word === string){
        valid = true;
      } else {
        valid = false;
      }
    }
  } else {
    valid = true;
  }
  return valid;
};

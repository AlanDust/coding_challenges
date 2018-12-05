// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

let lengthOfShortestWord = (string) => {
  let array = string.split(" ");
  let length = array[0].length;
  array.forEach((word) => {
    if(word.length === 1) {
      return length;
    } else {
      if(word.length < length) {
        length = word.length;
      }
    }
  });
  console.log(length);
};

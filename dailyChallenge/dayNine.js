// Given an array, find the int that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

let oddNumberCount = (array) => {
  let length = array.length;
  let sortedArray = array.slice("").sort();
  let counter = {};

  sortedArray.forEach(function(i) {
    counter[i] = (counter[i] || 0) + 1;
  });

  for (var key in counter) {
    if (counter.hasOwnProperty(key)) {
      if (counter[key] % 2 !== 0) {
        return Number(key);
      }
    }
  }
  console.log(Number(key));
};

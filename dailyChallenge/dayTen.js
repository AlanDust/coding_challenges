// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

function lowestSumIndices(array, target) {
  let hash = {};

  let indexCounter = 0;
  array.forEach((number) => {
    let hashNumber = array[indexCounter];
    hash[hashNumber] = indexCounter;
    indexCounter ++;
  });

  let counter = 0;
  let answer;
  array.forEach((number) => {
    let difference = target - array[counter];
    if(hash.hasOwnProperty(difference) && hash[difference] !== counter) {
      answer = [counter, hash[difference]];
      sortedAnswer = answer.sort();
    }
    counter ++;
  });
  return sortedAnswer;
}

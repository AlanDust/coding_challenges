// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.
//
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.
//
// [10, 343445353, 3453445, 3453545353453] should return 3453455.


let sumOfTwoLowestPositiveNumbers = (array) => {
  let placeInArray = 0;
  let sortedArray = array.sort();
  let sumArray = [];
  sortedArray.forEach((number)=> {
    if(number < 0) {
      placeInArray ++;
    } else {
      if(sumArray.length < 2) {
        sumArray.push(number);
      }
    }
  });
  let sum = 0;
  sumArray.forEach((num) => {
    sum += num;
  });
}

// As you walk through the door, a glowing humanoid shape yells in your direction. "You there! Your state appears to be idle. Come help us repair the corruption in this spreadsheet - if we take another millisecond, we'll have to display an hourglass cursor!"
//
// The spreadsheet consists of rows of apparently-random numbers. To make sure the recovery process is on the right track, they need you to calculate the spreadsheet's checksum. For each row, determine the difference between the largest value and the smallest value; the checksum is the sum of all of these differences.
//
// For example, given the following spreadsheet:
//
// 5 1 9 5
// 7 5 3
// 2 4 6 8
// The first row's largest and smallest values are 9 and 1, and their difference is 8.
// The second row's largest and smallest values are 7 and 3, and their difference is 4.
// The third row's difference is 6.
// In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.
//
// What is the checksum for the spreadsheet in your puzzle input?

let spreadsheet = [
[157, 564, 120, 495, 194, 520, 510, 618, 244, 443, 471, 473, 612, 149, 506, 138],
[1469, 670, 47, 604, 1500, 238, 1304, 1426, 54, 749, 1218, 1409, 60, 51, 1436, 598],
[578, 184, 2760, 3057, 994, 167, 2149, 191, 2913, 2404,	213, 1025, 1815, 588,	2421,	3138],
[935, 850, 726, 155, 178, 170, 275, 791, 1028, 75, 781, 138, 176, 621, 773, 688]
];

let spreadsheetTwo = [
[1, 9, 2, 6],
[2, 4, 6, 8],
[1, 3, 5, 7, 9]
];

let findChecksum = (array) => {
  let checksum = 0;

  array.forEach((line) => {
    let lowestNum = line[0];
    let highestNum = line[0];
    let difference = 0;
    line.forEach((num) => {
      if(num < lowestNum){
        lowestNum = num;
      }
      if(num > highestNum) {
        highestNum = num;
      }
    });
    difference = (highestNum - lowestNum);
    checksum += difference;
  });
  return checksum;
};

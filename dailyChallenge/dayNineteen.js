// Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
//
// Example 1:
//
// Input: a = 1, b = 2
// Output: 3
// Example 2:
//
// Input: a = -2, b = 3
// Output: 1

let getSum = (a, b) => {
  if(a === 0 && b === 0){
    return 0
  }
  if(a === 0){
    return b
  }else if(b === 0) {
    return a
  }

  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }

  return a;
};

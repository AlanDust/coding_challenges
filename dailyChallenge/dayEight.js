// Usually when you buy something, you're asked whether your credit card number,
// phone number or answer to your most secret question is still correct.
// However, since someone could look over your shoulder, you don't want that
// shown on your screen. Instead, we mask it.
//
// Your task is to write a function maskify, which changes all but the last
// four characters into '#'.

let shownCharacters = "";

let lastFour = (array) => {
  let last1;
  let last2;
  let last3;
  let last4;
  if(array.length === 1) {
    last1 = array.pop();
    shownCharacters = last1;
  } else if(array.length === 2) {
    last1 = array.pop();
    last2 = array.pop();
    shownCharacters = last2.concat(last1);
  } else if(array.length === 3) {
    last1 = array.pop();
    last2 = array.pop();
    last3 = array.pop();
    shownCharacters = last3.concat(last2, last1);
  } else if(array.length > 3) {
    last1 = array.pop();
    last2 = array.pop();
    last3 = array.pop();
    last4 = array.pop();
    shownCharacters = last4.concat(last3, last2, last1);
  }
  return shownCharacters;
};

let maskify = (string) => {
  shownCharacters = "";
  let array = string.split("");
  let newArray = [];
  let octothorpes = "";
  let answer = "";
  lastFour(array);
  array.forEach((letter) => {
    newArray.push("#");
  });
  newArray.forEach((letter) => {
    octothorpes += letter;
  });
  answer = octothorpes.concat(shownCharacters);
  console.log(answer);
  shownCharacters = "";
};

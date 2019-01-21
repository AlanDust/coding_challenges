let onlyCapital = (string) => {
  string = "djro.vm285fVaor-5Q!$P621f5q97b0f95f&#";
  let noLowerCase = string.replace(/([a-z])/g, '');
  let noNumbers = noLowerCase.replace(/([\d-])/g, '');
  let allUpperCase = noNumbers.replace(/([\W])/g, '');
  return allUpperCase;
};

let nonLetterOrNumber = (string) => {
  string = "djro.vm285fVaor-5Q!$P621f5q97b0f95f&#";
  let noLowerCase = string.replace(/([a-z])/g, '');
  let noNumbers = noLowerCase.replace(/([\d-])/g, '');
  let noUpperCase = noNumbers.replace(/([A-Z])/g, '');
  return noUpperCase;
};

let johnDoe = () => {
  let string = "Hello my John name is Doe not";
  let john = string.match(/John/);
  let stringJohn = john[0];
  let doe = string.match(/Doe/);
  let stringDoe = doe[0];
  return (john + ' ' + doe);
};

let onlyLowercaseWords = () => {
  let string = "Hello my John name is Doe not";
  let hasCapital = /[A-Z][a-zA-Z]*\s*/;
  while(hasCapital.test(string) === true) {
    string = string.replace(/[A-Z][a-zA-Z]*\s*/, '');
  }
  return string;
};


let isATacoASandwich = () => {
  let isHeldWithHand = true;
  let isPortable = true;
  let hasSomethingForFilling = true;
  let includesTwoSlicesOfBreadWhichByDefinitionIsWhatMakesASandwich = false;

  if(isHeldWithHand === true && isPortable === true && hasSomethingForFilling === true && includesTwoSlicesOfBreadWhichByDefinitionIsWhatMakesASandwich == true) {
    return "A Taco Is Most Definitely A Sandwich";
  } else {
    return "A Taco Is DEFINITELY NOT A Sandwich!!";
  }
};


let dayOfTheWeek = (days, weeks, weekday) => {
  let wd = weekday.toLowerCase();
  while( days >=7 ){
    weeks ++;
    days = days - 7;
  }
  if(wd === "monday"){
    if(days === 0){
      return "Monday";
    } else if(days == 1){
      return "Tuesday";
    }else if(days == 2){
      return "Wednesday";
    } else if(days == 3){
      return "Thursday";
    } else if(days == 4){
      return "Friday";
    } else if(days == 5){
      return "Saturday";
    } else if(days == 6){
      return "Sunday";
    }
  } else if(wd === "tuesday"){
    if(days === 0){
      return "Tuesday";
    }else if(days === 1){
      return "Wednesday";
    } else if(days == 2){
      return "Thursday";
    } else if(days == 3){
      return "Friday";
    } else if(days == 4){
      return "Saturday";
    } else if(days == 5){
      return "Sunday";
    } else if(days == 6){
      return "Monday";
    }
  } else if(wd === "wednesday"){
    if(days === 0){
      return "Wednesday";
    }else if(days === 1){
      return "Thursday";
    } else if(days == 2){
      return "Friday";
    } else if(days == 3){
      return "Saturday";
    } else if(days == 4){
      return "Sunday";
    } else if(days == 5){
      return "Monday";
    } else if(days == 6){
      return "Tuesday";
    }
  } else if(wd === "thursday"){
    if(days === 0){
      return "Thursday";
    }else if(days === 1){
      return "Friday";
    } else if(days == 2){
      return "Saturday";
    } else if(days == 3){
      return "Sunday";
    } else if(days == 4){
      return "Monday";
    } else if(days == 5){
      return "Tuesday";
    } else if(days == 6){
      return "Wednesday";
    }
  } else if(wd === "friday"){
    if(days === 0){
      return "Friday";
    }else if(days === 1){
      return "Saturday";
    } else if(days == 2){
      return "Sunday";
    } else if(days == 3){
      return "Monday";
    } else if(days == 4){
      return "Tuesday";
    } else if(days == 5){
      return "Wednesday";
    } else if(days == 6){
      return "Thursday";
    }
  }
  else if(wd === "saturday"){
   if(days === 0){
     return "Saturday";
   }else if(days === 1){
     return "Sunday";
   } else if(days == 2){
     return "Monday";
   } else if(days == 3){
     return "Tuesday";
   } else if(days == 4){
     return "Wednesday";
   } else if(days == 5){
     return "Thursday";
   } else if(days == 6){
     return "Friday";
   }
 } else if(wd === "sunday"){
    if(days === 0){
      return "Sunday";
    }else if(days === 1){
      return "Monday";
    } else if(days == 2){
      return "Tuesday";
    } else if(days == 3){
      return "Wednesday";
    } else if(days == 4){
      return "Thursday";
    } else if(days == 5){
      return "Friday";
    } else if(days == 6){
      return "Saturday";
    }
  }
};

let howManyCharacters = () => {
  let characterCount = [
    {"a": 0}, {"b": 0}, {"c": 0}, {"d": 0}, {"e": 0}, {"f": 0}, {"g": 0}, {"h": 0}, {"i": 0}, {"j": 0}, {"k": 0},
    {"l": 0}, {"m": 0}, {"n": 0}, {"o": 0}, {"p": 0}, {"q": 0}, {"r": 0}, {"s": 0}, {"t": 0}, {"u": 0}, {"v": 0},
    {"w": 0}, {"x": 0}, {"y": 0}, {"z": 0}, {"!": 0}, {".": 0}, {"'": 0}, {" ": 0}
  ];
  let string = "It is important to us that all members of the team are able to utilize javascript in many ways! Whether it is a snippet running on a client's site or the page mappings we run on all clients pages. Javascript is the driving force to what Evergage does on a daily basis. We mostly rely on vanilla javascript and jQuery to ensure that the code we run is valid on all browsers. A great way to show us some of your javascript skills would be to help us with something now.";
  let downcaseString = string.toLowerCase();
  let characterArray = downcaseString.split("");
  let letterCount = 0
  characterArray.forEach((letter) => {
    for (var i=0; i<30; i++) {
      characterCount[i][letter] ++;
    }
  });
  return characterCount;
};

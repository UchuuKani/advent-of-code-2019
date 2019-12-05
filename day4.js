const {day4} = require("./inputsForDays");
let [lowerBound, upperBound] = day4;

const intsTogether = numberStr => {
  for (let i = 0; i < numberStr.length - 1; i++) { //check up to second to last char only
    let currentInt = numberStr[i];
    let scout = numberStr[i + 1];

    if (currentInt === scout) {
      return true;
    }
  }

  return false;
}

const criteriaMatcher = (lower, upper) => {
  let count = 0;

  for (let i = lower; i <= upper; i++) {
    const currentNumStr = String(i); //str rep of current

    if (intsTogether(currentNumStr) === true) {
      for (let j = 1; j < currentNumStr.length; j++) {
        const currentInt = currentNumStr[j];

        if (currentInt < currentNumStr[j - 1]) {
          continue;
        }

        if (j === 5) {
          console.log(currentNumStr);
          count += 1;
        }
      }

 
    }
  }

  return count;
}

// console.log(criteriaMatcher(lowerBound, upperBound));
console.log(criteriaMatcher(lowerBound, lowerBound + 100));
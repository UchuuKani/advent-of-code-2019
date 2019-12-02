const {day2: {intCodeList}} = require("./inputsForDays");

const inputWithChanges = [...intCodeList];
inputWithChanges[1] = 12;
inputWithChanges[2] = 2;

const gravityAssist = inputArr => {
  let idx = 0;

  while (idx < inputArr.length) {
    const currentElement = inputArr[idx];
    const firstIdx = inputArr[idx + 1];
    const secondIdx = inputArr[idx + 2];
    const thirdIdx = inputArr[idx + 3];

    if (currentElement === 1) {
      inputArr[thirdIdx] = inputArr[firstIdx] + inputArr[secondIdx];
    } else if (currentElement === 2) {
      inputArr[thirdIdx] = inputArr[firstIdx] * inputArr[secondIdx];
    } else if (currentElement === 99) {
      return inputArr;
    }

    idx += 4;
  };

  return inputArr;
}

console.log(gravityAssist(inputWithChanges)[0]);

// const test1 = [1,0,0,0,99];
// const test2 = [2,3,0,3,99];
// const test3 = [2,4,4,5,99,0];
// const test4 = [1,1,1,4,99,5,6,0,99];

// console.log("Test 1", gravityAssist(test1));
// console.log("Test 2", gravityAssist(test2));
// console.log("Test 3", gravityAssist(test3));
// console.log("Test 4", gravityAssist(test4));

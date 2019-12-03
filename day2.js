const {day2: {intCodeList}} = require("./inputsForDays");

const inputWithChanges = [...intCodeList];
inputWithChanges[1] = 82;
inputWithChanges[2] = 50;

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

const findThePair = intArr => {
  for (let i = 0; i < 100; i++) {
    const firstCopy = [...intArr];

    firstCopy[1] = i;

    for (let j = 0; j < 100; j++) {
      const secondCopy = [...firstCopy];

      secondCopy[2] = j;

      if (gravityAssist(secondCopy)[0] === 19690720) {
        return [i, j];
      }
    }
  }

  return "oh no...";
}

const [noun, verb] = findThePair([...intCodeList]);

const result = gravityAssist(inputWithChanges)[0];

console.log(`${result} equals 19690720 is ${result === 19690720} and 100 * noun + verb is ${100 * noun + verb}`);

// const test1 = [1,0,0,0,99];
// const test2 = [2,3,0,3,99];
// const test3 = [2,4,4,5,99,0];
// const test4 = [1,1,1,4,99,5,6,0,99];

// console.log("Test 1", gravityAssist(test1));
// console.log("Test 2", gravityAssist(test2));
// console.log("Test 3", gravityAssist(test3));
// console.log("Test 4", gravityAssist(test4));

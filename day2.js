const input = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,5,19,23,1,6,23,27,1,27,10,31,1,31,5,35,2,10,35,39,1,9,39,43,1,43,5,47,1,47,6,51,2,51,6,55,1,13,55,59,2,6,59,63,1,63,5,67,2,10,67,71,1,9,71,75,1,75,13,79,1,10,79,83,2,83,13,87,1,87,6,91,1,5,91,95,2,95,9,99,1,5,99,103,1,103,6,107,2,107,13,111,1,111,10,115,2,10,115,119,1,9,119,123,1,123,9,127,1,13,127,131,2,10,131,135,1,135,5,139,1,2,139,143,1,143,5,0,99,2,0,14,0];
const inputWithChanges = [...input];
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

console.log(gravityAssist(inputWithChanges));

// const test1 = [1,0,0,0,99];
// const test2 = [2,3,0,3,99];
// const test3 = [2,4,4,5,99,0];
// const test4 = [1,1,1,4,99,5,6,0,99];

// console.log("Test 1", gravityAssist(test1));
// console.log("Test 2", gravityAssist(test2));
// console.log("Test 3", gravityAssist(test3));
// console.log("Test 4", gravityAssist(test4));

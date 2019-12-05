const {day5} = require("./inputsForDays");

const airConInputs = [...day5];

const inputValue = 1;

//only causes a mutation, returns null
const opCode3 = opIdx => { //handles opcode3 instructions
  const position = airConInputs[opIdx + 1];
  airConInputs[position] = inputValue;

  return null; //only causes a mutation
}

//only causes a mutation, returns null
const opCode4 = (inputArr, arg1) => { //handles opcode4 instructions

  return null; //only causes a mutation
}

const fixTheAirConditioning = inputArr => { //related to day2
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

  return airConInputs;
}
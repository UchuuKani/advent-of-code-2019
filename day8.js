const {day8} = require("/mnt/c/users/Ed Yi/Desktop/projects/advent-of-code/inputsForDays.js");

const readImage = (encodedImage, width = 25, height = 6) => { //encodedImage is a string of ints
  const finalImage = []; //takes in a string of integers, and returns array of arrays of str ints ([str[]] or str[][]?)
  let layer = []; //inner arrays are of length width * height

  for (let i = 0; i < encodedImage.length; i++) {
    const currentDigit = encodedImage[i];

    if (layer.length === (width * height)) {
      finalImage.push(layer);
      layer = [];
      layer.push(currentDigit);
    } else {
      layer.push(currentDigit);
    }
  }
  
  finalImage.push(layer);
  return finalImage;
}

const findInts = int => row => { //given a desired int and array of str ints (str (int) []), returns count of desired str int in the array
  return row.reduce((acc, curr) => {
    if (curr === `${int}`) {
      acc += 1;
    }
    return acc;
  }, 0);
}

const findZeroes = findInts(0); //finds count of 0s
const findOnes = findInts(1); //finds count of 1s
const findTwos = findInts(2); //finds counts of 2s

const leastZeroesMatrix = imgArr => { //finds the row (array) where the smallest occurrence of a desired int is
  let leastIdx = 0;
  let leastCount = Infinity;

  for (let i = 0; i < imgArr.length; i++) {
    const currentRow = imgArr[i];

    const intCount = findZeroes(currentRow);

    if (intCount < leastCount) {
      leastCount = intCount;
      leastIdx = i;
    }
  }

  const leastRow = imgArr[leastIdx];
  console.log([leastCount, leastRow, leastIdx, findOnes(leastRow), findTwos(leastRow)]);
  return findOnes(leastRow) * findTwos(leastRow);
}

console.log(leastZeroesMatrix(readImage(day8)));




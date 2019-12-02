const {day1: {fuels}} = require("./inputsForDays");

const calcFuel = fuelInt => Math.floor(fuelInt / 3) - 2;

const furtherFuel = totalFuel => {
  let requiredFuel = calcFuel(totalFuel);

  if (requiredFuel <= 0) {
    return 0;
  } else {
    requiredFuel += furtherFuel(requiredFuel);
  }

  return requiredFuel;
}

const calculateFuel = fuelArr => { // day1, part1 solution
  return fuelArr.reduce((acc, curr) => {
    let firstCalc = calcFuel(curr);
    acc += firstCalc + furtherFuel(firstCalc);
    return acc;
  }, 0);
}

console.log(calculateFuel(fuels));

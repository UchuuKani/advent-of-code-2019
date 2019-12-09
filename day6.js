const {day6} = require("./inputsForDays.js");

const orbits = day6.map(orbit => {
  return orbit.split(")");
});

console.log(orbits[orbits.length - 1]);

/** @type {string} */
const input = require("./input.js");

function executeMultiplyInstruction(multiplyInstruction = "") {
  const [aString, bString] = multiplyInstruction
    .split("mul(")[1]
    .split(")")[0]
    .split(",");

  return Number(aString) * Number(bString);
}

const regex = /mul\([0-9]*,[0-9]*\)/g;
const mulInstructions = input.match(regex);

const total = mulInstructions.reduce(
  (total, mulInstruction) => total + executeMultiplyInstruction(mulInstruction),
  0,
);

console.log(total);

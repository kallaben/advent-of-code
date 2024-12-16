/** @type {string} */
const input = require("./input.js");

function executeMultiplyInstruction(multiplyInstruction = "") {
  const [aString, bString] = multiplyInstruction
    .split("mul(")[1]
    .split(")")[0]
    .split(",");

  return Number(aString) * Number(bString);
}

const instructionsWithoutDonts = input.replace(/don't\(\).*?do\(\)/gs, "");

const mulInstructions = instructionsWithoutDonts.match(/mul\([0-9]*,[0-9]*\)/g);
const total = mulInstructions.reduce(
  (total, mulInstruction) => total + executeMultiplyInstruction(mulInstruction),
  0,
);

console.log(total);

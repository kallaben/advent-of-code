/** @type {string} */
const input = require("./input.js");

const lines = input.split("\n");
const MAS = "MAS";
const SAM = "SAM";

function getElement(lines, i, j) {
  if (i < 0 || j < 0) {
    return "";
  }

  if (lines.length <= i) {
    return "";
  }

  if (lines[i].length <= j) {
    return "";
  }

  return lines[i][j];
}

let count = 0;
const get = (i, j) => getElement(lines, i, j);

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    if (lines[i][j] !== "A") {
      continue;
    }

    const first = get(i - 1, j - 1) + get(i, j) + get(i + 1, j + 1);
    const second = get(i + 1, j - 1) + get(i, j) + get(i - 1, j + 1);
    if (
      (first === MAS || first === SAM) &&
      (second === MAS || second === SAM)
    ) {
      count++;
    }
  }
}

console.log(count);

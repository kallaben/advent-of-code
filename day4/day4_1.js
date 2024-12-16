/** @type {string} */
const input = require("./input.js");

const lines = input.split("\n");
const XMAS = "XMAS";

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
    if (lines[i][j] !== "X") {
      continue;
    }

    const up = get(i, j) + get(i - 1, j) + get(i - 2, j) + get(i - 3, j);
    const down = get(i, j) + get(i + 1, j) + get(i + 2, j) + get(i + 3, j);
    const left = get(i, j) + get(i, j - 1) + get(i, j - 2) + get(i, j - 3);
    const right = get(i, j) + get(i, j + 1) + get(i, j + 2) + get(i, j + 3);
    const upLeft =
      get(i, j) + get(i - 1, j - 1) + get(i - 2, j - 2) + get(i - 3, j - 3);
    const downLeft =
      get(i, j) + get(i + 1, j - 1) + get(i + 2, j - 2) + get(i + 3, j - 3);
    const upRight =
      get(i, j) + get(i - 1, j + 1) + get(i - 2, j + 2) + get(i - 3, j + 3);
    const downRight =
      get(i, j) + get(i + 1, j + 1) + get(i + 2, j + 2) + get(i + 3, j + 3);

    count += [
      up,
      down,
      left,
      right,
      upLeft,
      downLeft,
      upRight,
      downRight,
    ].reduce((matches, word) => (word === XMAS ? matches + 1 : matches), 0);
  }
}

console.log(count);

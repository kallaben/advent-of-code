/** @type {number[][]} */
const input = require("./input.js");

function isReportSafe(report) {
  if (report.length < 2) {
    return true;
  }

  const firstDiff = report[0] - report[1];

  if (firstDiff === 0) {
    return false;
  }

  const firstOrder = firstDiff > 0 ? "desc" : "asc";

  for (let i = 0; i < report.length - 1; i++) {
    const left = report[i];
    const right = report[i + 1];

    const diff = left - right;
    const absDiff = Math.abs(diff);
    if (absDiff === 0 || absDiff > 3) {
      return false;
    }

    const order = diff > 0 ? "desc" : "asc";
    if (order !== firstOrder) {
      return false;
    }
  }

  return true;
}

const totalSafeReports = input.reduce((totalSafeReports, report) => {
  if (isReportSafe(report)) {
    return totalSafeReports + 1;
  }

  for (let i = 0; i < report.length; i++) {
    const reportPermutation = report.toSpliced(i, 1);

    if (isReportSafe(reportPermutation)) {
      return totalSafeReports + 1;
    }
  }

  return totalSafeReports;
}, 0);

console.log(totalSafeReports);

import { pageInput, ruleInput } from "./input";

const rules = ruleInput
  .split("\n")
  .map((rule) => rule.split("|").map((num) => Number(num)));

const sortMap = rules.reduce((map, [small, large]) => {
  if (!map.has(small)) {
    map.set(small, new Map());
  }

  if (!map.has(large)) {
    map.set(large, new Map());
  }

  const innerMapSmall = map.get(small);
  const innerMapLarge = map.get(large);

  innerMapSmall!.set(large, 1);
  innerMapLarge!.set(small, -1);
  return map;
}, new Map<number, Map<number, -1 | 1>>());

const pages = pageInput
  .split("\n")
  .map((line) => line.split(",").map((num) => Number(num)));

const sortedPages = pages.filter(
  (page) =>
    JSON.stringify(page) ===
    JSON.stringify([...page].sort((a, b) => sortMap.get(b)?.get(a) ?? 0)),
);

const sumOfMiddleNumbers = sortedPages.reduce(
  (sum, page) => sum + page[Math.floor((page.length - 1) / 2)],
  0,
);

console.log(sumOfMiddleNumbers);

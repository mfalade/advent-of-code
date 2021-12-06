import input from "./index";
import logger from "../../lib/logger";

const colCounts = input[0]
  .split("")
  .map((_) => ({ zerosCount: 0, onescount: 0 }));

for (const bit of input) {
  for (let i = 0; i < bit.length; i++) {
    const currVal = bit[i];
    if (currVal == "0") {
      colCounts[i].zerosCount += 1;
    } else {
      colCounts[i].onescount += 1;
    }
  }
}

const gammaRate = colCounts
  .map((item) => {
    if (item.onescount > item.zerosCount) {
      return "1";
    } else {
      return "0";
    }
  })
  .join("");

const epsilonRate = colCounts
  .map((item) => {
    if (item.onescount > item.zerosCount) {
      return "0";
    } else {
      return "1";
    }
  })
  .join("");

const runSolution = (input: string[]): any => {
  return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
};

const solution = runSolution(input);
logger.logSolution(solution);

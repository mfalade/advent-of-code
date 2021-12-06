import input from "./index";
import logger from "../../lib/logger";

const sum = (arrayOfNumbers: number[]): number => {
  return arrayOfNumbers.reduce((current, accumulator) => {
    return current + accumulator;
  }, 0);
};

const solve = (measurements: number[]): number => {
  let count: number = 0;

  for (let i = 0; i < measurements.length - 3; i++) {
    const firstSet = measurements.slice(i, i + 3);
    const secondSet = measurements.slice(i + 1, i + 4);

    if (sum(firstSet) < sum(secondSet)) {
      count++;
    }
  }

  return count;
};

const runSolution = (input: string[]): any => {
  const allMeasurements = input.map(Number);
  return solve(allMeasurements);
};

const solution = runSolution(input);
logger.logSolution(solution);

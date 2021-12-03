import input from "./index";

const inputNumber: number[] = input.map(Number);

const sum = (arrayOfNumbers: number[]): number => {
  return arrayOfNumbers.reduce((current, accumulator) => {
    return current + accumulator;
  }, 0);
};

const getCount = (measurements: number[]): number => {
  let count: number = 0;

  for (let i = 0; i < measurements.length - 3; i++) {
    const firstSet = measurements.slice(i, i + 3);
    const secondSet = measurements.slice(i + 1, i + 4);

    console.log({ firstSet, secondSet });

    if (sum(firstSet) < sum(secondSet)) {
      count++;
    }
  }

  return count;
};

console.log(getCount(inputNumber));

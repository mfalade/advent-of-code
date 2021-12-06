const sum = (arrayOfNumbers: number[]): number => {
  return arrayOfNumbers.reduce((current, accumulator) => {
    return current + accumulator;
  }, 0);
};

const solve = (measurements: number[]): number => {
  let count: number = 0;
  const offset = 3;

  for (let i = 0; i < measurements.length - offset; i++) {
    const firstSet = measurements.slice(i, i + offset);
    const secondSet = measurements.slice(i + 1, i + 1 + offset);

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

export default runSolution;

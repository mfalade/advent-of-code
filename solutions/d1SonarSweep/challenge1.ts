import input from "./index";

const allMeasurements = input.map(Number);

const getNumberOfLargerMeasurements = (measurements: number[]): number => {
  let count: number = 0;

  for (let i = 0; i < measurements.length; i++) {
    const currentMeasurement: number = measurements[i];
    const nextElement: number = measurements[i + 1];

    if (currentMeasurement < nextElement) {
      count++;
    }
  }

  return count;
};

console.log(getNumberOfLargerMeasurements(allMeasurements));

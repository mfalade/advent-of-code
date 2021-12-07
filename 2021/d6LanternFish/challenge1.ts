/** Autogenerated template. */

const runSolution = (input: string[]): any => {
  /** Solution goes here */

  const result: number[] = input[0].split(",").map(Number);

  let numDays: number = 80;

  while (numDays > 0) {
    numDays--;
    for (const i in result) {
      const fishAge = result[i];

      if (fishAge == 0) {
        result.push(8);
        result[i] = 6;
      } else {
        result[i] = fishAge - 1;
      }
    }
  }

  return { input, result: result.length };
};

export default runSolution;

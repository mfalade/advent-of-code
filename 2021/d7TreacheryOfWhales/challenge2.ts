/** Autogenerated template. */

const sortAsc = (arrayOfNumbers: number[]): number[] =>
  [...arrayOfNumbers].sort((a, b) => a - b);

const getFuelCostToTargetPosition = ({
  targetPosition,
  currCrabPosition,
}: {
  targetPosition: number;
  currCrabPosition: number;
}): number => {
  const [startPos, endPos] =
    currCrabPosition < targetPosition
      ? [currCrabPosition, targetPosition]
      : [targetPosition, currCrabPosition];

  let result = 0;

  for (let i = startPos; i <= endPos; i++) {
    const increment = i - startPos;
    result += increment;
  }

  return result;
};

const runSolution = (input: string[]): any => {
  /** Solution goes here */
  const crabPositions: number[] = input[0].split(",").map(Number);
  const sortedCrabPositions: number[] = sortAsc(crabPositions);

  const fuelCosts: number[] = [];

  for (
    let i = sortedCrabPositions[0];
    i < sortedCrabPositions[sortedCrabPositions.length - 1] + 1;
    i++
  ) {
    let targetPosition: number = i;
    let totalFuelCostToTargetPos: number = 0;

    for (let j = 0; j < crabPositions.length; j++) {
      const currCrabPosition: number = crabPositions[j];
      const fuelCostToPosition: number = getFuelCostToTargetPosition({
        targetPosition,
        currCrabPosition,
      });
      totalFuelCostToTargetPos += fuelCostToPosition;
    }

    fuelCosts.push(totalFuelCostToTargetPos);
  }

  const sortedListOfFuelCosts: number[] = sortAsc(fuelCosts);
  return sortedListOfFuelCosts[0];
};

export default runSolution;
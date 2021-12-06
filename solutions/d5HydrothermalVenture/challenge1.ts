import input from "./index";
import logger from "../../lib/logger";

type Axis = "x" | "y";

export const getAxisValueFromCoordinate = (
  coordinate: string,
  axis: Axis
): number => {
  const axes = coordinate.split(",");
  if (axis === "x") {
    return Number(axes[0]);
  }
  return Number(axes[1]);
};

export const doPointsBelongOnSameAxis = ([
  startCoord,
  endCoord,
]: string[]): boolean =>
  getAxisValueFromCoordinate(startCoord, "x") ===
    getAxisValueFromCoordinate(endCoord, "x") ||
  getAxisValueFromCoordinate(startCoord, "y") ===
    getAxisValueFromCoordinate(endCoord, "y");

const computeCounts = (lines: string[][]) => {
  const counts: any = {};

  for (const line of lines) {
    const _xStart = getAxisValueFromCoordinate(line[0], "x");
    const _xStop = getAxisValueFromCoordinate(line[1], "x");
    const _yStart = getAxisValueFromCoordinate(line[0], "y");
    const _yStop = getAxisValueFromCoordinate(line[1], "y");

    const [xStart, xStop] =
      _xStart < _xStop ? [_xStart, _xStop] : [_xStop, _xStart];
    const [yStart, yStop] =
      _yStart < _yStop ? [_yStart, _yStop] : [_yStop, _yStart];

    for (let i = xStart; i <= xStop; i++) {
      for (let j = yStart; j <= yStop; j++) {
        const key = `${i},${j}`;
        if (counts[key] !== undefined) {
          counts[key]++;
        } else {
          counts[key] = 1;
        }
      }
    }
  }

  return counts;
};

const runSolution = (input: string[]): any => {
  // Solution goes here..
  const relevantLines = input
    .map((value) => value.split("->").map((coordinate) => coordinate.trim()))
    .filter(doPointsBelongOnSameAxis);

  const counts = computeCounts(relevantLines);

  console.log(counts);

  let result = 0;

  for (const key in counts) {
    if (counts[key] > 1) {
      result++;
    }
  }

  return result;
};

const solution = runSolution(input);
logger.logSolution(solution);

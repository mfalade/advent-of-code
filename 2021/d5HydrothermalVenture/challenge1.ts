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

  for (const [startCoord, stopCoord] of lines) {
    const _xStart = getAxisValueFromCoordinate(startCoord, "x");
    const _yStart = getAxisValueFromCoordinate(startCoord, "y");
    const _xStop = getAxisValueFromCoordinate(stopCoord, "x");
    const _yStop = getAxisValueFromCoordinate(stopCoord, "y");

    const [xStart, xStop] =
      _xStart < _xStop ? [_xStart, _xStop] : [_xStop, _xStart];
    const [yStart, yStop] =
      _yStart < _yStop ? [_yStart, _yStop] : [_yStop, _yStart];

    for (let i = xStart; i <= xStop; i++) {
      for (let j = yStart; j <= yStop; j++) {
        if (xStart === xStop || yStart === yStop) {
          const key = `${i},${j}`;
          if (counts[key] !== undefined) {
            counts[key]++;
          } else {
            counts[key] = 1;
          }
        }
      }
    }
  }

  return counts;
};

const runSolution = (input: string[]): any => {
  // Solution goes here..
  const lines = input.map((value) =>
    value.split("->").map((coordinate) => coordinate.trim())
  );

  const counts = computeCounts(lines);

  let result = 0;

  for (const key in counts) {
    if (counts[key] > 1) {
      result++;
    }
  }

  return result;
};

export default runSolution;

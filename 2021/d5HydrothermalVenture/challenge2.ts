type Axis = "x" | "y";

export const getAxisValue = (coordinate: string, axis: Axis): number => {
  const axes = coordinate.split(",");
  return axis === "x" ? Number(axes[0]) : Number(axes[1]);
};

const computeGrid = (lines: string[][]): number[][] => {
  const gridSize = 10;
  const grid: any = Array.from({ length: gridSize }).map((_) =>
    Array(gridSize).fill(0)
  );

  for (const [startCoord, stopCoord] of lines) {
    const _xStart = getAxisValue(startCoord, "x");
    const _yStart = getAxisValue(startCoord, "y");
    const _xStop = getAxisValue(stopCoord, "x");
    const _yStop = getAxisValue(stopCoord, "y");

    const [xStart, xStop] =
      _xStart < _xStop ? [_xStart, _xStop] : [_xStop, _xStart];
    const [yStart, yStop] =
      _yStart < _yStop ? [_yStart, _yStop] : [_yStop, _yStart];

    for (let i = xStart; i <= xStop; i++) {
      for (let j = yStart; j <= yStop; j++) {
        if (xStart === xStop || yStart === yStop) {
          grid[j][i]++;
        }
      }
    }
  }

  return grid;
};

const runSolution = (input: string[]): any => {
  // Solution goes here..
  const lines = input.map((value) =>
    value.split("->").map((coordinate) => coordinate.trim())
  );

  const grid: number[][] = computeGrid(lines);

  return grid
    .reduce((accumulator, row) => accumulator.concat(row), [])
    .reduce((count, current) => (current > 1 ? count + 1 : count), 0);
};

export default runSolution;

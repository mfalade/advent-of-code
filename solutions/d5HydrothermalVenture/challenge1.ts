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

const getCoordinates = (lines: any) => {
  return input
    .map((value) => value.split("->").map((coordinate) => coordinate.trim()))
    .map((line) => {
      const startCoord = line[0];
      const endCoord = line[1];
      return {
        start: {
          x: getAxisValueFromCoordinate(startCoord, "x"),
          y: getAxisValueFromCoordinate(startCoord, "y"),
        },
        end: {
          x: getAxisValueFromCoordinate(endCoord, "x"),
          y: getAxisValueFromCoordinate(endCoord, "y"),
        },
      };
    });
};
const runSolution = (input: string[]): any => {
  // Solution goes here..

  const coordinates = getCoordinates(input);

  const knownGradients = [];

  for (const { start, end } of coordinates) {
    const dy = end.y - start.y;
    const dx = end.x - start.x;
    console.log({ start, end });
    const gradient = Math.abs(dy / dx);
    knownGradients.push(gradient);
  }

  return knownGradients;
};

const solution = runSolution(input);
logger.logSolution(solution);

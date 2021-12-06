import input from "./index";
import logger from "../../lib/logger";

const removeItemsNotMatchingPassValue = (
  bits: string[],
  targetIndex: number,
  passValue: string
) => {
  return bits.filter((bit) => bit[targetIndex] === passValue);
};

export interface IColumnCount {
  zerosCount: number;
  onesCount: number;
}

const getColumnCounts = (bits: string[]): IColumnCount[] => {
  const columnsCount = bits[0]
    .split("")
    .map((_) => ({ zerosCount: 0, onesCount: 0 }));

  for (const bit of bits) {
    for (let i = 0; i < bit.length; i++) {
      const currVal = bit[i];
      if (currVal == "0") {
        columnsCount[i].zerosCount += 1;
      } else {
        columnsCount[i].onesCount += 1;
      }
    }
  }

  return columnsCount;
};

const getMaxCounts = (colCounts: IColumnCount[]): string => {
  return colCounts
    .map((item) => {
      if (item.onesCount > item.zerosCount) {
        return "1";
      } else if (item.onesCount == item.zerosCount) {
        return "1";
      } else {
        return "0";
      }
    })
    .join("");
};

const getMinCounts = (colCounts: IColumnCount[]): string => {
  return colCounts
    .map((item) => {
      if (item.onesCount > item.zerosCount) {
        return "0";
      } else if (item.onesCount == item.zerosCount) {
        return "0";
      } else {
        return "1";
      }
    })
    .join("");
};

const scrubMax = (bits: string[], targetIndex: number = 0): string => {
  if (bits.length === 1) {
    return bits[0];
  }

  const columnCounts = getColumnCounts(bits);
  const maxCounts = getMaxCounts(columnCounts);

  const trimmedBits = removeItemsNotMatchingPassValue(
    bits,
    targetIndex,
    maxCounts[targetIndex]
  );

  return scrubMax(trimmedBits, targetIndex + 1);
};

const scrubMin = (bits: string[], targetIndex: number = 0): string => {
  if (bits.length === 1) {
    return bits[0];
  }

  const columnCounts = getColumnCounts(bits);
  const minCounts = getMinCounts(columnCounts);

  const trimmedBits = removeItemsNotMatchingPassValue(
    bits,
    targetIndex,
    minCounts[targetIndex]
  );

  return scrubMin(trimmedBits, targetIndex + 1);
};

const runSolution = (input: string[]): any => {
  const o2GenRating = scrubMax(input);
  const co2ScrubRating = scrubMin(input);
  return parseInt(o2GenRating, 2) * parseInt(co2ScrubRating, 2);
};

const solution = runSolution(input);
logger.logSolution(solution);

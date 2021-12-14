/** Autogenerated template. */

import getParsedInput from "../../lib/inputParser";
import logger from "../../lib/logger";

import runSolutionForChallenge1 from "./challenge1";
import runSolutionForChallenge2 from "./challenge2";

const CHALLENGE_DIR_NAME = "d14ExtendedPolymerization";

const input: string[] = getParsedInput({
  challengeDirName: CHALLENGE_DIR_NAME,
});

const inputTransformer = (input: string[]): any => {
  const pairInsertionRule: { [key: string]: string } = {};
  return {
    polymerTemplate: input[0],
    pairInsertionRules: input
      .splice(1)
      .map((item) => item.split("->"))
      .reduce((accumulator, current) => {
        accumulator[current[0].trim()] = current[1].trim();
        return accumulator;
      }, pairInsertionRule),
  };
};

// const challenge1Solution = runSolutionForChallenge1(inputTransformer(input));
const challenge2Solution = runSolutionForChallenge2(inputTransformer(input));

// logger.logSolution("Solution to challenge 1", challenge1Solution);
logger.logSolution("Solution to challenge 2", challenge2Solution);

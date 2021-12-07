/** Autogenerated template. */

import getParsedInput from "../../lib/inputParser";
import logger from "../../lib/logger";

import runSolutionForChallenge1 from "./challenge1";
import runSolutionForChallenge2 from "./challenge2";

const CHALLENGE_DIR_NAME = "d6LanternFish";

const input: string[] = getParsedInput({
  challengeDirName: CHALLENGE_DIR_NAME,
});

const challenge1Solution = runSolutionForChallenge1(input);
const challenge2Solution = runSolutionForChallenge2(input);

logger.logSolution("Solution to challenge 1", challenge1Solution);
logger.logSolution("Solution to challenge 2", challenge2Solution);

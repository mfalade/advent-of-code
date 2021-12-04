import fs from "fs";
import path from "path";

import { INPUT_FILE_NAME, SOLUTIONS_DIRECTORY_NAME } from "../baseConfig";

export interface ICreateChallengeDirectoryArgs {
  challengeName: string;
}

const getChallengeDirectoryPath = (challengeName: string): string => {
  return path.join(process.cwd(), SOLUTIONS_DIRECTORY_NAME, challengeName);
};

const getIndexFileContent = (challengeName: string): string =>
  `import getParsedInput from "../../lib/inputParser";

const CHALLENGE_DIR_NAME = "${challengeName}";

const input: string[] = getParsedInput({
  challengeDirName: CHALLENGE_DIR_NAME,
});

export default input;
`;

const getChallengeFileContent = (): string => {
  return `import input from "./index";`;
};

const createChallengeDirectory = ({
  challengeName,
}: ICreateChallengeDirectoryArgs) => {
  const directoryPath = getChallengeDirectoryPath(challengeName);

  fs.mkdirSync(directoryPath);

  const indexFile = path.join(directoryPath, "index.ts");
  const inputFile = path.join(directoryPath, INPUT_FILE_NAME);
  const challenge1File = path.join(directoryPath, "challenge1.ts");
  const challenge2File = path.join(directoryPath, "challenge2.ts");

  fs.writeFileSync(indexFile, getIndexFileContent(challengeName));
  fs.writeFileSync(inputFile, "");
  fs.writeFileSync(challenge1File, getChallengeFileContent());
  fs.writeFileSync(challenge2File, getChallengeFileContent());

  console.log(`Created a new challenge directory: [${challengeName}]`);
};

const execute = () => {
  const challengeName = process.argv[2];

  if (!challengeName) {
    console.log(
      "No challenge name was provided. Pass challenge name as `yarn mkdir someChallenge`"
    );
    process.exit();
  }

  const directoryPath = getChallengeDirectoryPath(challengeName);

  if (fs.existsSync(directoryPath)) {
    console.log(
      `A challenge with the provided name [${challengeName}] already exists`
    );
    process.exit();
  }

  createChallengeDirectory({ challengeName });
};

execute();

import fs from "fs";
import path from "path";

import { INPUT_FILE_NAME, SOLUTIONS_DIRECTORY_NAME } from "../baseConfig";

const rootPath = process.cwd();

export interface IInputParserArguments {
  challengeDirName: string;
}

export const getInputAsArray = (input: string): string[] =>
  input
    .split("\n")
    .map((value) => value.trim())
    .filter((value) => value !== "");

const inputParser = ({ challengeDirName }: IInputParserArguments): string[] => {
  try {
    const inputFilePath = path.join(
      rootPath,
      SOLUTIONS_DIRECTORY_NAME,
      challengeDirName,
      INPUT_FILE_NAME
    );
    const file = fs.readFileSync(inputFilePath);
    return getInputAsArray(file.toString());
  } catch (error) {
    console.error(error, "error parsing input");
    return [];
  }
};

export default inputParser;

import fs from "fs";
import path from "path";

import { INPUT_FILE_NAME } from "../baseConfig";

const rootPath = process.cwd();

export interface IInputParserArguments {
  challengeDirName: string;
}

export const getInputAsArray = (input: string): string[] => {
  return input
    .split("\n")
    .map((value) => value.trim())
    .filter(function (value) {
      return value !== "";
    });
};

const inputParser = ({ challengeDirName }: IInputParserArguments): string[] => {
  try {
    const inputFilePath = path.join(
      rootPath,
      "src",
      challengeDirName,
      INPUT_FILE_NAME
    );
    const file = fs.readFileSync(inputFilePath);
    return getInputAsArray(file.toString());
  } catch (error) {
    console.log(error, "error parsing input");
  }
};

export default inputParser;

import input from "./index";
import logger from "../../lib/logger";
import { createGameFromInput, IBoard, IGame } from "./utils";

const { draws, boards }: IGame = createGameFromInput(input);
const MARKER = "FOUND:";

const markBoardIfHasDraw = (board: IBoard, draw: string): void => {
  for (const row of board) {
    if (row.includes(draw)) {
      row[row.indexOf(draw)] = `${MARKER}${draw}`;
      return;
    }
  }
};

const checkBoardForWins = (board: IBoard): boolean => {
  let hasWon = false;
  for (const row of board) {
    if (row.every((item) => item.startsWith(MARKER))) {
      return true;
    }
  }

  for (let currColIndex = 0; currColIndex < board.length; currColIndex++) {
    const colItems = board.map((row) => row[currColIndex]);
    if (colItems.every((item) => item.startsWith(MARKER))) {
      return true;
    }
  }

  return hasWon;
};

const getLastToWin = (boards: IBoard[], draws: string[]): IBoard => {
  if (boards.length === 1) {
    return boards[0];
  } else {
    for (let i = 0; i < draws.length; i++) {
      const draw = draws[i];
      for (let j = 0; j < boards.length; j++) {
        const board = boards[j];
        markBoardIfHasDraw(boards[j], draw);
        const boardHasWon = checkBoardForWins(board);

        if (boardHasWon) {
          boards.splice(j, 1);
          return getLastToWin(boards, draws);
        }
      }
    }
  }

  return [];
};

const playGame = (
  boards: IBoard[],
  draws: string[]
): { losingBoard: IBoard; draw: string } => {
  const draw = "";
  const losingBoard: IBoard = getLastToWin(boards, draws);
  return { losingBoard, draw };
};

const calculateFinalScore = (board: IBoard, draw: string): number => {
  const sumUnmarked: number = board
    .flat()
    .filter((value) => !value.startsWith(MARKER))
    .reduce((accumulator, current) => accumulator + Number(current), 0);

  return Number(draw) * sumUnmarked;
};

const runSolution = (input: string[]): any => {
  const { losingBoard } = playGame(boards, draws);
  let winningDraw = "";

  for (let i = 0; i < draws.length; i++) {
    const draw = draws[i];

    markBoardIfHasDraw(losingBoard, draw);
    const boardHasWon = checkBoardForWins(losingBoard);

    if (boardHasWon) {
      winningDraw = draw;
      break;
    }
  }

  return calculateFinalScore(losingBoard, winningDraw);
};

const solution = runSolution(input);
logger.logSolution(solution);

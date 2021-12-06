import { createGameFromInput, IBoard, IGame } from "./utils";

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

  return false;
};

const playGame = (
  boards: IBoard[],
  draws: string[]
): { winningBoard: IBoard; winningDraw: string } => {
  let winningDraw: string = "";
  let winningBoard: IBoard = [];

  for (const draw of draws) {
    for (const board of boards) {
      markBoardIfHasDraw(board, draw);
      const hasboardWon = checkBoardForWins(board);

      if (hasboardWon) {
        winningBoard = board;
        winningDraw = draw;

        return {
          winningBoard,
          winningDraw,
        };
      }
    }
  }

  return { winningBoard, winningDraw };
};

const calculateFinalScore = (board: IBoard, winningDraw: string): number => {
  const sumUnmarked: number = board
    .flat()
    .filter((value) => !value.startsWith(MARKER))
    .reduce((accumulator, current) => accumulator + Number(current), 0);

  return Number(winningDraw) * sumUnmarked;
};

const runSolution = (input: string[]): any => {
  // Solution goes here..
  const { draws, boards }: IGame = createGameFromInput(input);
  const { winningDraw, winningBoard } = playGame(boards, draws);
  console.log(winningBoard, "winning board ");
  return calculateFinalScore(winningBoard, winningDraw);
};

export default runSolution;

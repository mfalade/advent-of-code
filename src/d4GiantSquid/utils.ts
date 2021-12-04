export type IBoard = string[][];

export interface IGame {
  draws: string[];
  boards: IBoard[];
}

export const createGameFromInput = (input: string[]): IGame => {
  const [draws, ...rows] = input;
  const boards = [];
  let rowsClone = [...rows];

  while (rowsClone.length) {
    const board = rowsClone.splice(0, 5);
    const cleanedBoard = board.map((row) =>
      row
        .split(" ")
        .map((value) => value.trim())
        .filter((value) => value !== "")
    );
    boards.push(cleanedBoard);
  }

  return {
    draws: draws.split(",").map((draw) => draw.trim()),
    boards,
  };
};

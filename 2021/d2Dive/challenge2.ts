class Submarine {
  verticalPosition: number;
  horizontalPosition: number;
  aim: number;

  constructor() {
    this.aim = 0;
    this.verticalPosition = 0;
    this.horizontalPosition = 0;
  }

  getCommand(commandName: string) {
    switch (commandName) {
      case "forward":
        return this.forward;
      case "down":
        return this.down;
      case "up":
        return this.up;
      default:
        throw new Error(`Received an unknown command: ${commandName}`);
    }
  }

  forward(value: number): void {
    this.horizontalPosition += value;
    this.verticalPosition += this.aim * value;
  }

  down(value: number): void {
    this.aim += value;
  }

  up(value: number): void {
    this.aim -= value;
  }

  getCurrentPositions(): {
    verticalPosition: number;
    horizontalPosition: number;
  } {
    return {
      verticalPosition: this.verticalPosition,
      horizontalPosition: this.horizontalPosition,
    };
  }

  getFinalValue(): number {
    return Math.abs(this.verticalPosition * this.horizontalPosition);
  }
}

const runSolution = (input: string[]): any => {
  const inputCommands: { command: string; value: number }[] = input.map(
    (line) => {
      const [command, value] = line.split(" ");
      return { command, value: Number(value) };
    }
  );

  const submarine = new Submarine();

  for (const entry of inputCommands) {
    submarine.getCommand(entry.command).call(submarine, entry["value"]);
  }
  return submarine.getFinalValue();
};

export default runSolution;

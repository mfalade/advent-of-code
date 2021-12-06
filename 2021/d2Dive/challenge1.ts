class Submarine {
  verticalPosition: number;
  horizontalPosition: number;

  constructor() {
    this.verticalPosition = 0;
    this.horizontalPosition = 0;
  }

  getCommand(commandName: string) {
    switch (commandName) {
      case "forward":
        return this.forward.bind(this);
      case "down":
        return this.down.bind(this);
      case "up":
        return this.up.bind(this);
      default:
        throw new Error(`Received an unknown command: ${commandName}`);
    }
  }

  forward(value: number): void {
    this.horizontalPosition += value;
  }

  down(value: number): void {
    this.verticalPosition -= value;
  }

  up(value: number): void {
    this.verticalPosition += value;
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
    submarine.getCommand(entry.command)(entry["value"]);
  }
  return submarine.getFinalValue();
};

export default runSolution;

class Logger {
  logSolution = (solution: any) => {
    console.log("");
    console.log("===========================");
    console.log("Solution => ", solution);
    console.log("===========================");
    console.log("");
  };
}

export default new Logger();

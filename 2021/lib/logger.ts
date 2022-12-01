class Logger {
  logSolution = (label: string, solution: any) => {
    console.log("");
    console.log("===========================");
    console.log(`${label} => `, solution);
    console.log("===========================");
    console.log("");
  };
}

export default new Logger();

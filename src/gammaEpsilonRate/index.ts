const bits: string[] = `00100
11110
10110
10111
10101
01111
00111
11100
10000
11001
00010
01010`
  .split("\n")
  .map((value) => value.trim())
  .filter(function (value) {
    return value !== "";
  });

const colCounts = bits[0]
  .split("")
  .map((_) => ({ zerosCount: 0, onescount: 0 }));

for (const bit of bits) {
  for (let i = 0; i < bit.length; i++) {
    const currVal = bit[i];
    if (currVal == "0") {
      colCounts[i].zerosCount += 1;
    } else {
      colCounts[i].onescount += 1;
    }
  }
}

const gammaRate = colCounts
  .map((item) => {
    if (item.onescount > item.zerosCount) {
      return "1";
    } else {
      return "0";
    }
  })
  .join("");

const epsilonRate = colCounts
  .map((item) => {
    if (item.onescount > item.zerosCount) {
      return "0";
    } else {
      return "1";
    }
  })
  .join("");

console.log(colCounts, "col counts ");

console.log(gammaRate, parseInt(gammaRate, 2), "gammaRate value");
console.log(epsilonRate, parseInt(epsilonRate, 2), "epsilonRate value");

const finalResult = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
console.log(finalResult, "final ...");

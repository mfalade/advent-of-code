var bits = "00100\n11110\n10110\n10111\n10101\n01111\n00111\n11100\n10000\n11001\n00010\n01010"
    .split("\n")
    .map(function (value) { return value.trim(); })
    .filter(function (value) {
    return value !== "";
});
var colCounts = bits[0]
    .split("")
    .map(function (_) { return ({ zerosCount: 0, onescount: 0 }); });
for (var _i = 0, bits_1 = bits; _i < bits_1.length; _i++) {
    var bit = bits_1[_i];
    for (var i = 0; i < bit.length; i++) {
        var currVal = bit[i];
        if (currVal == "0") {
            colCounts[i].zerosCount += 1;
        }
        else {
            colCounts[i].onescount += 1;
        }
    }
}
var gammaRate = colCounts
    .map(function (item) {
    if (item.onescount > item.zerosCount) {
        return "1";
    }
    else {
        return "0";
    }
})
    .join("");
var epsilonRate = colCounts
    .map(function (item) {
    if (item.onescount > item.zerosCount) {
        return "0";
    }
    else {
        return "1";
    }
})
    .join("");
console.log(colCounts, "col counts ");
console.log(gammaRate, parseInt(gammaRate, 2), "gammaRate value");
console.log(epsilonRate, parseInt(epsilonRate, 2), "epsilonRate value");
var finalResult = parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
console.log(finalResult, "final ...");

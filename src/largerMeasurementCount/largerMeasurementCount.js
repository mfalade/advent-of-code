var allMeasurements = ""
  .split("\n")
  .filter(function (x) {
    return x !== "";
  })
  .map(Number);

var getNumberOfLargerMeasurements = function (measurements) {
  var count = 0;
  for (var i = 0; i < measurements.length; i++) {
    var currentMeasurement = measurements[i];
    var nextElement = measurements[i + 1];
    if (currentMeasurement < nextElement) {
      count++;
    }
  }
  return count;
};
console.log(getNumberOfLargerMeasurements(allMeasurements));

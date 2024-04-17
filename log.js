const fs = require("fs");
const PRECISION_OF_MAGNITUDE = 2;
const writeToAFile = (bufferToWrite) => {
  fs.appendFileSync(
    "earthQuakesWeekSummary.txt",
    bufferToWrite + "\n",
    (err) => {
      if (err) {
        console.error("Could not write to file.");
        throw err;
      }
    }
  );
};

module.exports = ({
  time,
  avgMagnitude,
  maxMagnitude,
  maxMagnitudeLocation,
}) => {
  const bufferToWrite = `${
    time.toLocaleString("en-GB").split(",")[0]
  } ${parseFloat(avgMagnitude).toFixed(PRECISION_OF_MAGNITUDE)}, location: ${
    maxMagnitude ? maxMagnitudeLocation : "NOT FOUND"
  }`;

  console.log(bufferToWrite);
  writeToAFile(bufferToWrite);
};

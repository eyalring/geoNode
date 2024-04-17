const getEarthQuakeList = require("./getEarthQuakeList");
const getTopMagnitudeEntries = require("./getTopMagnitudeEntries");

getEarthQuakeList().then((earthQuakeList) => {
  //  console.log(earthQuakeList);
  console.log(getTopMagnitudeEntries({ earthQuakeList }));
});

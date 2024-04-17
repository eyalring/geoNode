module.exports = ({ accumulator, magnitude, location }) => {
  accumulator.sum = magnitude;
  accumulator.count = 1;
  previousMagnitude = undefined;
  maxMagnitude = magnitude;
  maxMagnitudeLocation = location;
  return { previousMagnitude, maxMagnitude, maxMagnitudeLocation };
};

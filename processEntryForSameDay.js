/**
 * accumulates the sum of magnitudes and counts the number of entries for the same day
 * and finds the maximum magnitude and its location
 */
module.exports = processEntryForSameDay = ({
  accumulator,
  previousMagnitude,
  magnitude,
  location,
}) => {
  accumulator.sum += magnitude;
  accumulator.count++;

  if (!previousMagnitude || magnitude > previousMagnitude) {
    maxMagnitude = magnitude;
    maxMagnitudeLocation = location;
  }
  previousMagnitude = magnitude;
  return { previousMagnitude, maxMagnitude, maxMagnitudeLocation };
};

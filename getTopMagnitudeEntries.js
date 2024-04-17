const processEntryForSameDay = require("./processEntryForSameDay");
const processNewDay = require("./processNewDay");
const log = require("./log");

module.exports = ({ earthQuakeList }) => {
  let currentDayOfMonth;
  let previousMagnitude;
  let maxMagnitude;
  let maxMagnitudeLocation;
  let accumulator = { sum: 0, count: 0 };

  earthQuakeList.forEach(
    ({ properties: { time: timeFromApi, mag, place: location } }) => {
      const time = new Date(timeFromApi);
      const magnitude = parseFloat(mag);

      const earthQuakeDayInMonth = time.getDay();

      if (earthQuakeDayInMonth === currentDayOfMonth || !currentDayOfMonth) {
        ({ previousMagnitude, maxMagnitude, maxMagnitudeLocation } =
          processEntryForSameDay({
            accumulator,
            previousMagnitude,
            magnitude,
            location,
          }));
      } else {
        if (accumulator.count === 0) {
          throw new Error("Count should not be zero");
        }
        const avgMagnitude = accumulator.sum / accumulator.count;

        log({ time, avgMagnitude, maxMagnitude, maxMagnitudeLocation });

        ({ previousMagnitude, maxMagnitude, maxMagnitudeLocation } =
          processNewDay({ accumulator, magnitude, location }));
      }

      currentDayOfMonth = earthQuakeDayInMonth;
    }
  );
};

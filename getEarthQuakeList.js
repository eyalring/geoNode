const axios = require("axios");

/**
 * 
 * @returns {Promise<Array>} - List of earthquakes happened in the last week.
 
 */
module.exports = async () => {
  try {
    const response = await axios.get(
      "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
    );
    //   console.log(response.data.features);
    return response.data.features;
  } catch (error) {
    console.error("Could not fetch earthquake data.");
    throw error;
  }
};

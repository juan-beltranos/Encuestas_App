import { SURVEYS_URL, SAVE_RESULT_URL, SENDEMAIL_URL } from "../constants";
const axios = require("axios");

export const getSurveys = async () => {
  const url = SURVEYS_URL;
  console.log("HTTP get to ", url);
  return await axios.get(url);
};

export const getCountryData = async (lat, lng) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}
  &key=AIzaSyCuOGCV2C3XY-kKOizkRdfGhEaUaGfdOtg`;
  console.log("HTTP get to Google Geolocation API");
  return await axios.get(url);
};

export const SaveResult = async (data) => {
  const url = SAVE_RESULT_URL;
  console.log("HTTP post to ", url, "whith payload ", data);
  return await axios.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const SendEmail = async (data) => {
  const url = SENDEMAIL_URL;
  console.log("HTTP post to ", url, "whith payload ", data);
  return await axios.post(url, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

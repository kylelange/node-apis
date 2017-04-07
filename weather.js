const https = require('https');

function printMessage(cityName, weatherType, temp) {
  const message = `${cityName} is ${weatherType} today and ${temp} degrees.`;
  console.log(message);
}

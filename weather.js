const http = require('http');
const https = require('https');
const api = require('./api.json');

//const zipCode = '97201';

//seed printWeather data
//const weatherType = 'sunny, (I wish...)';
//const temp = 60;
//const city = Portland;

function printWeather (city, weatherType, temp) {
  const message = `The weather in ${city} is ${weatherType} and ${temp} degrees F.`
   console.log(message);
};

function getWeather(zipCode) {
  const request = http.get(`http://api.wunderground.com/api/663c1433467f5b7f/conditions/q/${zipCode}.json`, response => {

    let body = '';

    response.on ('data', data => {
      body += data.toString();
    });

    response.on ('end', () => {
      const place = JSON.parse(body);
      printWeather( place.current_observation.display_location.full, place.current_observation.weather.toLowerCase(), place.current_observation.temp_f);
    })
  });
}


const zipCodes = process.argv.slice(2)
zipCodes.forEach(getWeather);

//const ??? = process.argv

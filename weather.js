const http = require('http');
const https = require('https');
const api = require('./api.json');


//seed printWeather data
//const zipCode = '97201';
//const weatherType = 'sunny, (I wish...)';
//const temp = 60;
//const city = Portland;

console.log('Hello! Enter a zipcode or City_ST string to get your weather. Example: $ node weather.js 97201');

function printWeather (city, weatherType, temp) {
  const message = `The weather in ${city} is ${weatherType} and ${temp} degrees F.`
   console.log(message);
};

function getWeather(zipCode) {
  const request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${zipCode}.json`, response => {

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


const zipCodes = process.argv.slice(2);
zipCodes.forEach(getWeather);

//const ??? = process.argv

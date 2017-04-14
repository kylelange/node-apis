const http = require('http');
const https = require('https');
const api = require('./api.json');


//seed printWeather data
//const zipCode = '97201';
//const weatherType = 'sunny, (I wish...)';
//const temp = 60;
//const city = Portland;

console.log('Hello! Enter a zipcode or City_ST string to get your weather. Example: $ node weather.js 97201');

//this makes a common function to use for all later instances of error.message:
function printError (error) {
  console.error(error.message);
}

function printWeather (city, weatherType, temp) {
  const message = `The weather in ${city} is ${weatherType} and ${temp} degrees F.`
   console.log(message);
};

function getWeather(zipCode) {
  try {
    //request.on(error) is for async errors (url mistyped)
    const request = http.get(`http://api.wunderground.com/api/${api.key}/conditions/q/${zipCode}.json`, response => {
      if (response.statusCode === 200) {
        let body = '';

        response.on ('data', data => {
          body += data.toString();
        });

        response.on ('end', () => {
          //try+catch block here is for parsing errors
          try {
            const place = JSON.parse(body);
            printWeather( place.current_observation.display_location.full, place.current_observation.weather.toLowerCase(), place.current_observation.temp_f);
          } catch (error) {
            console.error(`Sorry, we couldn't find that place or zip code. Error: ${error.meessage}`);
          }
        });
      } else {
        const message = `There was an error getting the profile for ${username}: (${http.STATUS_CODE[response.statusCode]}).`;
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });
    request.on('error', error => console.error(`There was a problem with your request: ${error.message}`));
  } catch (error) {
    printError(error);
  }
}


const zipCodes = process.argv.slice(2);
zipCodes.forEach(getWeather);

//const ??? = process.argv

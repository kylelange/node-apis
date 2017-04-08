const http = require('http');
const https = require('https');
const api = require('./api.json');

const zipCode = '90210';
const weatherType = 'sunny';
const temp = 80;

function printWeather (zipcode, weatherType, temp) {
  const message = `The weather here is ${weatherType} and ${temp} degrees F.`
   console.log(message);
};

printWeather(zipCode, weatherType, temp);

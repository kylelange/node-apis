const https = require('https');
const username = 'kylelange';

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} in JavaScript.`;
  console.log(message);
}

const request = https.get(`https://teamtreehouse.com/${username}.json`, response  => {
                console.log(response.statusCode);
             });

// Steps
//   1. require 'https'
//   2. write a printMessage function with parameters you want in your string output.
//   3. in printMessage: const message + console.log(); to see if it works.
//   4. write an API request: const request =https.get(url+callback: response => {console.dir()});

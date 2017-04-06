const https = require('https');
//const username = 'kylelange';

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

function getProfile(username) {

const request = https.get(`https://teamtreehouse.com/${username}.json`, response  => {
                let body = '';

                response.on('data', data => {
                  body += data.toString();
                });

                response.on('end', () => {
                  const profile = JSON.parse(body);
                  printMessage(username, profile.badges.length, profile.points.JavaScript);
                });

             });
}

const users = ['kylelange','chalkers'];

users.forEach(getProfile);

//long version:
// users.forEach( username => {
//   getProfile(username);
// });

// Steps
//   1. require 'https'
//   2. write a printMessage function with parameters you want in your string output.
//   3. in printMessage: const message + console.log(); to see if it works.
//   4. write an API request: const request =https.get(url+callback: response => {console.dir()});
//5. let body = '';
//6. response.on('data', data => {body += data.toString();})
//every data event in node has a end event you can work with
//* console.log(typeof body) will tell you what type of data you are recieving from your API: srting or object, for ex.
//7. response.on('end', () => {console.log(body);});
//8. Parse the string to turn it into a JSON object in the 'end' response= const profile = JSON.parse(body); then call printMessage(username,profile.badges.length,profile.etc...)

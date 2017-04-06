
//1 connect to api url (https://teamtreehouse.com/username.json) using hard data.
const https = require('https');
//const userName = 'kylelange';

let printMessage = (userName, badgeCount, points) => {
  const message =`${userName} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

//print message to console.
let getProfile = (userName) => {

  //2 read the data
  const request = https.get(`https://teamtreehouse.com/${userName}.json`, response => {
             let body = '';
             //console.log(response.statusCode);
             response.on('data', (data) => {
              body += data.toString();
             });

             response.on('end', () => {
               //3 parse the data
               const profile = JSON.parse(body);
               //console.dir(profile);
               //4 print the data
               printMessage(userName, profile.badges.length,                                  profile.points.JavaScript);


             });

  });
  request.on('error', error => console.error(`Problem with request: ${error.message}`));
}

//notice how Node.js gives my info FIRST as I have less info than Andrew Chalkey!- nonblocking in action.

//const users = [ 'chalkers', 'kylelange' ];
//process is a global object for servers with node.js
const users = process.argv.slice(2);

users.forEach(getProfile);

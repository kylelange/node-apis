// Problem: We need a simple way to look at a user's badge count and JavaScript points
// Solution: Use Node.js to connect to Treehouse's API to get profile information to print out

//1 connect to api url (https://teamtreehouse.com/username.json) using hard data.
const https = require('https');
//const userName = 'kylelange';


//print message to console.
let getProfile = (userName) => {


  let printMessage = (userName, badgeCount, points) => {
  const message =`${userName} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
  }

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

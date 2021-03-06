//for get request
const https = require('https');
//for status code to put in error messages
const http = require('http');
//const username = 'kylelange';

//Print error messages
function printError(error) {
  console.error(error.message);
};

function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript.`;
  console.log(message);
}

function getProfile(username) {
try {
  const request = https.get(`https://teamtreehouse.com/${username}.json`, response  => {
                if(response.statusCode === 200) {
                  let body = '';
                  console.log(response.statusCode);
                  response.on('data', data => {
                    body += data.toString();
                  });

                  response.on('end', ()  => {
                    try {
                      const profile = JSON.parse(body);
                      printMessage(username, profile.badges.length, profile.points.JavaScript);
                    } catch (error) {
                      printError(error);
                    }
                  });
                } else {
                  const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`;
                  const statusCodeError = new Error(message);
                  printError(statusCodeError);
                }
             });

            request.on('error', /*error => console.error(`Problem with request: ${error.message}`*/ printError);
          } catch (error) {
            printError(error);
          }
}

//console.log(process.argv);
const users = process.argv.slice(2);

users.forEach(getProfile);

//long version:
// users.forEach( username => {
//   getProfile(username);
// });



// Steps for an API
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
//9. make an array of users const users = ['1', '2']; then write a users.forEach(getProfile); loop to go through each.
//10. use process.argv to allow you to pass usernames in through the console= console.log(process.argv)
//11. replace your user array with process.argv= const users = process.argv.slice(2); (2 because the first to array points in process are node files that you wont need.)
/////ERRORS
///Error STATUS CODES
/*
200 - ok
500 - internal server error
301 - moved perminantly
404 - file not found
*/

//1. request.on('error', error => { console.error(put a message HERE!);});
//2. enclose the const request object in a try {} catch (error) {console.error(`backtick interp+ ${console.message}`)}
//3. enclose the response.on('end') in a try {} catch (error) {console.error(`backtick interp+ ${console.message}`)}
//4. place a printError function at the top of the javascript and replace all the error.messages with printError();
//5. Handle all status codes that are NOT 200.  (above in if else statement)

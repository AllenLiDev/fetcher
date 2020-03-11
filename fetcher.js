const args = process.argv.splice(2);
const request = require('request');
const fs = require('fs');

const callbackwrite = (body) => {
  fs.writeFile(args[1], body, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
}

request(args[0], (error, response, body) => {
  if (error) {
    console.log('an error occursed' + error.message);
    return
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  callbackwrite(body);
});

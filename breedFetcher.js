const request = require("request");

const CATAPI_SEARCH = "https://api.thecatapi.com/v1/breeds/search";



const requestKitty = function(url, callback) {

  request(url, (error, response, body) => {
    if (!error) {
      if (response.statusCode === 200) {
        callback(body);
      } else {
        console.log("request.statusCode:", response && response.statusCode);
      }
    } else {
      console.log("request error:", error);
    }
  });

};



let args = process.argv.slice(2, 3);

requestKitty(`${CATAPI_SEARCH}?q=${args[0]}`, (body) => {

  let kitty = JSON.parse(body);
  if (kitty.length > 0) {
    console.log(kitty);
  } else {
    console.log("No such kitty!");
  }

});

const request = require("request");

const CATAPI_SEARCH = "https://api.thecatapi.com/v1/breeds/search";



const requestKitty = function(url, callback) {

  request(url, (error, response, body) => {
    if (!error) {
      if (response.statusCode === 200) {
        callback(null, body);
      } else {
        // callback("request.statusCode:", response && response.statusCode);
        callback("Kitty server says bad things!");
      }
    } else {
      // console.log("request error:", error);
      callback("Kitty request failed!");
    }
  });

};

const fetchBreedDescription = function(breed, callback) {

  requestKitty(`${CATAPI_SEARCH}?q=${breed}`, (error, body) => {
    let kitty = JSON.parse(body);
    if (kitty.length > 0) {
      callback(null, kitty[0].description.trim());
    } else {
      callback("No such kitty!", null);
    }
  });

};



module.exports = { fetchBreedDescription };

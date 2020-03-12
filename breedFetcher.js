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

const fetchBreedDescription = function(breed, callback) {

  requestKitty(`${CATAPI_SEARCH}?q=${breed}`, (body) => {
    let kitty = JSON.parse(body);
    if (kitty.length > 0) {
      callback(null, kitty[0].description);
    } else {
      callback("No such kitty!", null);
    }
  });

};



module.exports = fetchBreedDescription;

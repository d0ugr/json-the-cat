const request = require("request");

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

requestKitty("https://api.thecatapi.com/v1/breeds/search?q=sib", (body) => {

  console.log(typeof body, body);
  let kitty = JSON.parse(body);
  console.log(typeof kitty, kitty);

});

const fetchBreedDescription = require("./breedFetcher");

let args = process.argv.slice(2, 3);

if (args.length > 0) {
  fetchBreedDescription(args[0].trim(), (error, description) => {
    if (!error) {
      console.log(description);
    } else {
      console.log("Kitty error:", error);
    }
  });
}

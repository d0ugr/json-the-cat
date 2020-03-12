// breedFetcherTest.js

const { assert } = require("chai");

const { fetchBreedDescription } = require("../breedFetcher");

describe("fetchBreedDescription", () => {

  it("returns an error for an undefined breed, via callback", (done) => {
    fetchBreedDescription(undefined, (err, desc) => {
      assert.notEqual(err, null);
      assert.equal(desc, null);
      const expectedErr = "No such kitty!";
      assert.equal(expectedErr, err);
      done();
    });
  });

  it("returns an error for an empty string breed, via callback", (done) => {
    fetchBreedDescription("", (err, desc) => {
      assert.notEqual(err, null);
      assert.equal(desc, null);
      const expectedErr = "No such kitty!";
      assert.equal(err, expectedErr);
      done();
    });
  });

  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (err, desc) => {
      assert.equal(err, null);
      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      assert.equal(desc, expectedDesc);
      done();
    });
  });

});

const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv[2];

// Prints cat description if breed found
// otherwise, print error

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
});
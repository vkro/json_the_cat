const {fetchBreedDescription} = require('./breedFetcher');
const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
});
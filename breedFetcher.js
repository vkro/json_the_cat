const request = require('request');
const args = process.argv.splice(2);


// Use 'request' to fetch (Siberian) data from API endpoint
// https://api.thecatapi.com/v1/breeds/search

const breedFetcher = function(error, description) {
  if (error) {
    console.error(error);
  } else {
    console.log(description);
  }
}


const fetchBreedDescription = function (input, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + input;

  request(url, (error, response, body) => {
    console.log('breedFetcher: Searching for cat breed...');
    if (body === '[]') {
      breedFetcher("Breed not found = try again with another search term.", null);
    
    } else if (error) {
      breedFetcher(error);
    
    } else {
      let data = JSON.parse(body);
      let catDescription = data[0].description;
      breedFetcher(null, catDescription);
    }
  })
};

fetchBreedDescription(args, breedFetcher);

module.exports = { fetchBreedDescription };
const request = require('request');
const input = process.argv.splice(2);


// Use 'request' to fetch (Siberian) data from API endpoint
// https://api.thecatapi.com/v1/breeds/search

const breedFetcher = function () {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + input;

  request(url, (error, response, body) => {
    if (error) {
      console.error(error);
    } else if (body === '[]') {
      console.log('Breed not found - try again with another search term.');
    } else {
      let data = JSON.parse(body);
      let catObj = data[0]
      console.log(catObj['description']);
    }
  })
};

breedFetcher();
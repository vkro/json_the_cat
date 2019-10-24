const request = require('request');


// Use 'request' to fetch (Siberian) data from API endpoint
// https://api.thecatapi.com/v1/breeds/search


const fetchBreedDescription = function(input, callback) {
  const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + input;

  request(url, (error, response, body) => {
    if (body === '[]') {
      callback("Breed not found = try again with another search term.");
    
    } else if (error) {
      callback(error);
    
    } else {
      let data = JSON.parse(body);
      let catDescription = data[0].description;
      callback(null, catDescription);
    }
  });
};

module.exports = { fetchBreedDescription };
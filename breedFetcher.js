const request = require('request');


// Use 'request' to fetch (Siberian) data from API endpoint
// https://api.thecatapi.com/v1/breeds/search

const breedFetcher = function(url, input) {
  request(url, (error, response, body) => {
    let catObj = JSON.parse(body);
    console.log(typeof catObj);
    console.log(catObj);
  
  })
};


breedFetcher('https://api.thecatapi.com/v1/breeds/search?q=sib');
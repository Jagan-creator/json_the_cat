const request = require('request');

const fetchBreed = ((breedName, callback) => {
  
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    
    const data = JSON.parse(body);

    if (error) {
      callback(error, null);
    } if (data[0]) {
      callback(null, data[0].description);
    } else {
      callback('we could not find that specific breed name', null);
    }

  });
});

module.exports = { fetchBreed };
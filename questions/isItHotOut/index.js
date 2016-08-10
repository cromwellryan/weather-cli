const Promise = require('bluebird');

module.exports = {
  title: 'Is it hot out?',
  answer(weather) {
    return new Promise(
      function(resolve) {
        const response = {
          message: weather.temperature > 26.7 ? "Yes" : "No"
        };
        resolve(response);
      }
    );
  }
};

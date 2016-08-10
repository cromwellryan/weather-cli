'use strict';

const Promise = require('bluebird');

module.exports = {
  title: 'Should I bike?',
  answer(weather) {
    return new Promise(
      (resolve, reject) => {
        const response = {
          message: weather.precipType !== 'Rain' ? 'Yes' : 'No'
        };
        resolve(response);
      }
    )
  }
}

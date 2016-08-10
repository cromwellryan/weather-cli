'use strict';

const Promise = require('bluebird');

module.exports = {
  title: 'Should I bike?',
  answer(weather) {
    return new Promise(
      (resolve) => {
        const response = {
          message: 'Always'
        };
        resolve(response);
      }
    )
  }
}

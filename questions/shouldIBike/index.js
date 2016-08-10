'use strict';

const Promise = require('bluebird');

module.exports = {
  title: 'Should I bike?',
  answer() {
    return new Promise(
      (resolve, reject) => {
        const response = {
          message: 'Always'
        };
        resolve(response);
      }
    )
  }
}

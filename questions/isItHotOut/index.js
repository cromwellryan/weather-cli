const Promise = require('bluebird');

module.exports = {
  title: 'Is it hot out?',
  answer(_) {
    return new Promise(
      function(resolve) {
        const response = {
          message: 'Yes'
        };
        resolve(response);
      }
    );
  }
};

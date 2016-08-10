'use strict';

const iplocation = require('iplocation');
const getIP = require('external-ip')();
const Promise = require('bluebird');

function getLocation() {
  let p = new Promise((resolve, reject) => {
      getIP((err, ip) => {
        if (err) { reject(err); }

        iplocation(ip, (err, data) => {
          if (err) { reject(err); }

          resolve({
            lat: data.latitude,
            lon: data.longitude
          });
        });
      });
    }
  );

  return p;
}

module.exports = getLocation;

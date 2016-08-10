#!/usr/bin/env node

'use strict';

const program = require('commander');
const Logger = require('./logger');

// We should discover these
const IsItHotOut = require('./questions/isItHotOut');

program
  .version('0.0.1')
  .parse(process.argv);

// Get Location
let location = {};

// Get weather
let weather = {};

// Report is the thing we'll eventually output somehow
let report = {};

// Answer questions
let questions = [IsItHotOut];

let answerPromises = questions.map( (question) => {
  return question
    .answer(weather)
    .then( (answer) => report[question.title] = answer.message );
});

Promise
  .all(answerPromises)
  .then( () => console.log(report) );

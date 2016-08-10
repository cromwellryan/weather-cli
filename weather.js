'use strict';
const ForecastIO = require('forecast-io');
const forecast = new ForecastIO(process.env.weatherApiKey);

const getForecast = (options) => {
  return forecast
    .latitude(options.lat)
    .longitude(options.long)
    .time(options.date)
    .units(options.unit)
    .language('en')
    .exclude(options.exclude)
    .extendHourly(true)
    .get();
};

export { getForecast };

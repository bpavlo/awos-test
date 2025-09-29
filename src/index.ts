#!/usr/bin/env node

import { getWeather } from './weather';

const city = process.argv[2];

if (!city) {
  console.log('Please provide a city name.');
  process.exit(1);
}

getWeather(city);

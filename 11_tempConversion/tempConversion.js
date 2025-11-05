const convertToCelsius = function(degree) {
  const celcius = (degree - 32) * 5 / 9;
  return (Math.round(celcius * 10))/10;
};

const convertToFahrenheit = function(degree) {
  const fahren = (degree * 9 / 5) + 32;
  return (Math.round(fahren * 10))/10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

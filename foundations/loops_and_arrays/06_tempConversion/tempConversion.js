const convertToCelsius = function(degrees) {
  const formula = (degrees - 32) * 5/9;
  return Math.round(formula * 10) / 10;
};

const convertToFahrenheit = function(degrees) {
  const formula = (degrees * 9/5) + 32;
  return Math.round(formula * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const convertToCelsius = function(value) {
    result = (value - 32) * 5;
    result /= 9;
    return result;
};

const convertToFahrenheit = function(value) {
    result = (value * 1.8) + 32;
    return result;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit
};

const add = function(a, b) {
    return a + b;

};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(listOfValues) {
    let result = 0;
    for (val of listOfValues) {
        result += val;
    }
    return result;
};

const multiply = function(listOfValues) {
    let result = 1;
    for (val of listOfValues) {
        result *= val;
    }
    return result;
};

const power = function(a, b) {
    return Math.pow(a, b);

};

const factorial = function(n) {
    let product = 1;
    for (let i = n; i > 0; i--) {
        product *= i;
    }
    return product;
};

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};

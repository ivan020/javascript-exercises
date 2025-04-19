const toNum = function(value) {
    if (typeof (value) === 'string') {
        return Number(value);
    }
    return value;
}

const fibonacci = function(n) {
    var n = toNum(n);
    if (n < 0) {
        return "OOPS";
    }
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
};

// Do not edit below this line
module.exports = fibonacci;

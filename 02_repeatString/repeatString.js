const repeatString = function(string, num) {
    let outputString = string;
    for (let i = 1; i < num; i++) {
        outputString += string;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;

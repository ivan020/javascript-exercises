const removeFromArray = function(arr, toRemove) {
    outputArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== toRemove) {
            outputArr.push(arr[i]);
        }
    }
    return outputArr;

};

// Do not edit below this line
module.exports = removeFromArray;

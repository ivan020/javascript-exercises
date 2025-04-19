
const removePunctuation = function(word) {
    var punctuationless = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
    var finalString = punctuationless.replace(/\s+/g, "");
    return finalString;
}


const palindromes = function(string) {
    var string = string.toLowerCase();
    var finalString = removePunctuation(string);
    let reveresed = finalString.split('').reverse().join('');
    return finalString == reveresed;
};

// Do not edit below this line
module.exports = palindromes;

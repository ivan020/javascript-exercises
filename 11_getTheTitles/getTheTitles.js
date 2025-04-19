const getTheTitles = function(books) {
    let outList = [];
    for (book of books) {
        outList.push(book.title);
    }
    return outList;
};

// Do not edit below this line
module.exports = getTheTitles;

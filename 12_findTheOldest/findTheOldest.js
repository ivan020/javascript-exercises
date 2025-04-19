const birthNotDefined = function(record) {
    if (record.yearOfBirth === undefined) {
        return true;
    }
    return false;
}

const getAge = function(record) {
    if (record.yearOfDeath === undefined) {
        let today = new Date();
        let yearToday = today.getFullYear();
        return yearToday - record.yearOfBirth;
    }
    return record.yearOfDeath - record.yearOfBirth;
}

const findTheOldest = function(records) {
    let oldest;
    let highestAge = -1;
    for (record of records) {

        if (birthNotDefined(record)) {
            continue;
        }

        // let age = record.yearOfDeath - record.yearOfBirth;
        let age = getAge(record);
        if (highestAge < age) {
            highestAge = age;
            oldest = record;
        }

    }
    return oldest;

};

// Do not edit below this line
module.exports = findTheOldest;

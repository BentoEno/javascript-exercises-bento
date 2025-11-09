const findTheOldest = function(arr) {
    arr.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        }

        const lifeA = a.yearOfDeath - a.yearOfBirth;
        const lifeB = b.yearOfDeath - b.yearOfBirth;

        if (lifeA > 0 && lifeB > 0) {
            return lifeB - lifeA;
        }
    })

    return arr[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const factorial = function(n) {
    if (n === 0) {
        return 1
    } else if (typeof n === 'number' && Number.isInteger(n) && n >= 0) {
        return n === 1 ? 1 : n * factorial( n - 1 )
    }
    return undefined
};

// Do not edit below this line
module.exports = factorial;
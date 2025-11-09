const fibonacci = function(number) {
// CREATE fibonacci simulation
    // initiate with value 1
    // new value + prev value
    // REPEAT
let initial = 0;
let post = 0;
let result = 0;
if (typeof number === 'string') {
    number = Number(number);
}

if (number < 0) {
    return 'OOPS';
} else if (number === 0 || number === 1) {
    return number;
} 

for (let i = 1; i < number; i++) {
    if (i === 1) {
    post = initial + 1;
    result = post;
    } else if ( i > 1) {
    initial = post;
    post = result;
    result = post + initial;
    }
}
return result;
};

// Do not edit below this line
module.exports = fibonacci;

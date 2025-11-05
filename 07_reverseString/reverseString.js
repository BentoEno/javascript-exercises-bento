const reverseString = function(string) {
    const charArr = [...string].reverse();
    const inverse = charArr.join('');
    return inverse;
};

// Do not edit below this line
module.exports = reverseString;

// // reverse the position of the string
// let newString = '';
// for (let index = 0; index < string.length; index++) {
//     let inverseIndex = index * -1;
//     newString[inverseIndex] = string[index];
// }
// // return it
// return newString

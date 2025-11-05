const sumAll = function(num1, num2) {
    let sum = 0;
    let biggerNum = 0;
    let smallerNum = 0;
    // IDENTIFY the valid input
    if (num1 < 0 || num2 < 0 || typeof num1 !== 'number' || typeof num2 !== 'number' || !Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR'
    }
    // determine which number is the start and the finish
    if (num1 > num2) {
        biggerNum = num1;
        smallerNum = num2;
    } else if (num1 < num2) {
        biggerNum = num2;
        smallerNum = num1;
    } 
    // loop through smaller to bigger number
    for (let index = smallerNum; index <= biggerNum; index++) {
    // sum all the number exist in the loop

        sum += index;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

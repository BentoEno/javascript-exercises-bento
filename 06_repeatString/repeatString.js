const repeatString = function(string, num) {
// create function that takes two argument
// initialize the string 
let repeated = '';
if (num < 0) {
    return 'ERROR'
} else {
  for (let index = 1; index <= num; index++) {
// concat with additional string based on how many its repeated
    repeated = repeated + string;  
}
}
return repeated
};

// Do not edit below this line
module.exports = repeatString;

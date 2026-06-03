const permutations = function(arr) {
  const result = [];
  if (arr.length === 0) return [[]];
  if (arr.length === 1) return [arr];

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];
    const remainingNum = arr.slice(0, i).concat(arr.slice(1 + i))
    
    const remainingPermutedArr = permutations(remainingNum);
    for (let j = 0; j < remainingPermutedArr.length; j++) {
        const permuttedArr = [currentNum].concat(remainingPermutedArr[j])
        result.push(permuttedArr)
    }
  }
  return result
};
  
// Do not edit below this line
module.exports = permutations;

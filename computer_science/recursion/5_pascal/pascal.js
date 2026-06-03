const pascal = function(n, result = []) {
    
  if (n === 1) {
    result.push([1])
    return result[n - 1]
  } else if (n >= 2) {
    pascal(n - 1, result)
    result.push([])
    for (let i = 0; i < (result[n - 2].length - 1); i++) {
        const prevArr = result[n - 2]
        const currentArr = result[n - 1]
        const pairSum = prevArr[i] + prevArr[i+1]
        currentArr.push(pairSum)
    }
    result[n-1].push(1)
    result[n-1].unshift(1)
  }
  console.log(result[n - 1])
  return result[n - 1]
};
  
// Do not edit below this line
module.exports = pascal;
 
const totalIntegers = function(numbers) {
    if (!Array.isArray(numbers) && typeof numbers !== 'object' || numbers === null) return undefined;

    const arr = Array.isArray(numbers) ? numbers : Object.values(numbers)

    const count = items => {
        return items.flatMap(item => {
            if (Array.isArray(item)) return count(item);
            if (typeof item === 'object' && item !== null) return count(Object.values(item));
            return Number.isInteger(item) ? [item] : [];
        });
    };
    console.log(count(arr))
    return count(arr).length;
}
// Do not edit below this line
module.exports = totalIntegers;

const contains = function(obj, value) {
    
    const bothNaN = Number.isNaN(obj) && Number.isNaN(value);
    if (obj === value || bothNaN) return true;


    for (const key in obj) {
        const val = obj[key]
        if (typeof val === 'object') {
            if (contains(val, value)) return true
        } else if (val === value) {
            return true;
        } else if (val === value || (Number.isNaN(val) && Number.isNaN(value))) {
        return true;
        }
    }

    return false
};
  
// Do not edit below this line
module.exports = contains;

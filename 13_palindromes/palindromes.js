const palindromes = function (rawText) {
    const cleanText = rawText.replace(/[^a-zA-Z0-9]/g, "");
    const text = cleanText.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        const start = text[i]
        const last = text[text.length - 1 - i]
        const middleIndex = Math.floor(text.length/2)
        if (start !== text[middleIndex] && start !== last) {
            return false
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;

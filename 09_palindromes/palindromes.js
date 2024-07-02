const palindromes = function (string) {

    const lowerString = string.toLowerCase()
    const plainString = lowerString.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').replace(/\s/g, '');

    const reversedString = plainString.split("").reverse().join("")


    return plainString === reversedString
};

// Do not edit below this line
module.exports = palindromes;

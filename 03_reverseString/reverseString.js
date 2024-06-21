const reverseString = function(string) {
    let splitString = string.split("")
    let reverseString = splitString.reverse()
    let completedString = reverseString.join("")
    return completedString
};

// Do not edit below this line
module.exports = reverseString;

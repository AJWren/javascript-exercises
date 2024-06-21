
const a = 'Hey'
const times = 3

const repeatString = function(word, a) {
    if (a < 0){
        return "ERROR"
    }
    else return word.repeat(a)
};

repeatString(a, times)

// Do not edit below this line
module.exports = repeatString;

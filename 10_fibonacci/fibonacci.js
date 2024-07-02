const fibonacci = function(a) {
    let fib = [0, 1];
    if(a < 0){
        return "OOPS"
    }
    else{
        for (let i = 2; i <= 100; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
        }
        return fib.at(a)
    }

};

// Do not edit below this line
module.exports = fibonacci;

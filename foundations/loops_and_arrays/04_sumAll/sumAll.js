const sumAll = function(initial, final) {
    if (initial < 0 || final < 0 ||
        !Number.isInteger(initial) || !Number.isInteger(final)) {
        return 'ERROR';
    }
    let sum = 0;
    if (initial > final) {
        for (let i = final; i <= initial; i++) {
            sum += i;
        }
    } else {
        for (let i = initial; i <= final; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

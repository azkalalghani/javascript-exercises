const reverseString = function(statement) {
    let result = '';
    for (let i = statement.length - 1; i >= 0; i--) {
        result += statement[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

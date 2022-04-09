const reverseString = function(string) {
    const letterHolder = [];
    for(let c of string) {
        letterHolder.push(c);
    } 
    const reverse = letterHolder.reverse();
    const reverseString = reverse.join('');
    return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

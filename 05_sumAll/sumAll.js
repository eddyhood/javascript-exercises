const sumAll = function(num1, num2) {
    let total = 0;
    let lowNum = 0;
    let highNum =0;
    if(num1 < num2) {
        lowNum = num1;
        highNum = num2;
    } else {
        lowNum = num2;
        highNum = num1;
    }
    for(i = lowNum; i <= highNum; i++){
        if(i < 0 || typeof(lowNum) !== 'number' || typeof(highNum) !== 'number'){
            return 'ERROR';
        } total += i;
    } return total;
};

// Do not edit below this line
module.exports = sumAll;

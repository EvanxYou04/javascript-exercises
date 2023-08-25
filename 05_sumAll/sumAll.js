const sumAll = function(num1 , num2) {

    if(num1 < 0 || num2 < 0) return "ERROR";
    if(!Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";
    let count = 0;
    const hi = Math.max(num1,num2);
    const lo = Math.min(num1,num2);
    for(let i = lo; i<=hi; i++){
        count+=i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;

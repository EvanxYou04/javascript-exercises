const removeFromArray = function(a, ...nums) {
    const newArray = []; 

    a.forEach(item => {
        if(!nums.includes(item)) {
            newArray.push(item);
        }
        
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(userArray, remove) {
    const index = userArray.indexOf(remove);
    if(index > -1) {
        userArray.splice(index, 1)
    } return userArray;
};

// Do not edit below this line
module.exports = removeFromArray;

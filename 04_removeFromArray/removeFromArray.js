const removeFromArray = function(userArray, remove) {
    const argumentLength = arguments.length;
    for (i = 1; i < argumentLength; i++) {
        if(userArray.includes(arguments[i])){
            let index = userArray.indexOf(arguments[i]);
            if(index > -1) {
                 userArray.splice(index, 1);
             } 
         } 
         console.log(userArray);
    }return userArray;
}; 

// Do not edit below this line
module.exports = removeFromArray;

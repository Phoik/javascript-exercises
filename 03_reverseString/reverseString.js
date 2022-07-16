let string; 
const reverseString = function(string) {
    const reverseArray = string.split("");
    reverseArray.reverse();
    newString = reverseArray.join("");
    return newString;
    //console.log(newString);

};

// Do not edit below this line
module.exports = reverseString;

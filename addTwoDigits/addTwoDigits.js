  
function addTwoDigits(n) {
    //turn the number into a string
    const numberToString = n.toString();

    //turn that string to an Array
    const stringToArray = numberToString.split('');

    //use reduce to loop through and add the two digits
    return stringToArray.reduce((acc, cur) => {
        return parseInt(acc) + parseInt(cur);
    });
};

console.log(addTwoDigits(29));
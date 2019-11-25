function alphabeticShift(inputString) {
    //turn the string into an array
    const stringToArr = inputString.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    //turn the alphabet string into an array
    const alphabetToArr = alphabet.split('');

    //iterate through the input string array
    let indexOfChar = [];
    for(let i = 0; i < stringToArr.length; i++) {

        //find the index in the alphabet array and add 1 to it
        if(stringToArr[i] !== 'z') {
            indexOfChar.push(alphabetToArr.indexOf(stringToArr[i]) + 1);
        } else if(stringToArr[i] === 'z') {
            indexOfChar.push(0);
        }
    };
    
    //iterate through the indexofchar array to return the right letter
    let alphabeticShift = [];
    for(let i = 0; i < indexOfChar.length; i++) {
        alphabeticShift.push(alphabetToArr[indexOfChar[i]]);
    };
    return alphabeticShift.join('');
};

console.log(alphabeticShift('crazy'));
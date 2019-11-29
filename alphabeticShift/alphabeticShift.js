function alphabeticShift(inputString) {
    //turn the input string into an array
    const stringToArr = inputString.split('');
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    //turn the alphabet string into an array
    const alphabetToArr = alphabet.split('');

    //iterate through the input string
    let indexOfChar = [];
    for(let i = 0; i < stringToArr.length; i++) {
        //find the index of each letter
        if(stringToArr[i] !== 'z') {
            indexOfChar.push(alphabetToArr.indexOf(stringToArr[i]) + 1);
        } else if(stringToArr[i] === 'z') {
            indexOfChar.push(0);
        }
    };
    
    //iterate through index of characters
    let alphabeticShift = [];
    for(let i = 0; i < indexOfChar.length; i++) {
        alphabeticShift.push(alphabetToArr[indexOfChar[i]]);
    }
    return alphabeticShift.join('');
};

console.log(alphabeticShift('crazy'));
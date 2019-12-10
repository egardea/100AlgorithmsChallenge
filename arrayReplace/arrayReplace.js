function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    //iterate through the input array with a conditional
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    //return
    return inputArray;
}

console.log(arrayReplace([1, 2, 1], 1, 3));
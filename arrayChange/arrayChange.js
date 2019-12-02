function arrayChange(inputArray) {
    let count = 0;
    

    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === inputArray[i + 1]) {
            console.log(inputArray[i]);
            count++;
            if(inputArray[i + 1] === inputArray[i + 2]) {
                console.log(inputArray[i]);
                count++;
            }
        }
    }

    return count;
}

console.log(arrayChange([1, 1, 1]));
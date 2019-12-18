function arrayChange(inputArray) {
    let count = 0;
    
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] >= inputArray[i + 1]) {
            let dif = inputArray[i] + 1 - inputArray[i + 1];
            inputArray[i + 1] = inputArray[i] + 1;
            count += dif;
        }
    }

    return count;
}

console.log(arrayChange([1, 1, 1]));
console.log(arrayChange([2, 1, 10, 1])); /**output should be 12 */

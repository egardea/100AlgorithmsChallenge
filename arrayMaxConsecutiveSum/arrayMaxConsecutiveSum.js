function arrayMaxConsecutiveSum(inputArray, k) {
    let sum = [];

    for(let i = 0; i < inputArray.length - `${k - 1}`; i++) {
        if(k === 2) {
            sum.push(inputArray[i] + inputArray[i + 1]);
        } else if(k === 3) {
            sum.push(inputArray[i] + inputArray[i + 1] + inputArray[i + 2]);
        }
    }

    sum = Math.max(...sum);

    return sum;

};

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

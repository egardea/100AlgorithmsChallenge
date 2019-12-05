function arrayMaxConsecutiveSum(inputArray, k) {
    let sum = [];

    for(let i = 0; i < inputArray.length - 1; i++) {
        sum.push(inputArray[i] + inputArray[i + 1]);
    }

    return sum;
};

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

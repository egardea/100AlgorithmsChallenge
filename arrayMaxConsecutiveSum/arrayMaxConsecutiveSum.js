function arrayMaxConsecutiveSum(inputArray, k) {
    //if the k value is one then we return the highest number in the array
    if(k === 1) return inputArray = Math.max(...inputArray);

    //declare an empty array to push our sliced arrays to
    let sum = [];

    //declare a copy of inputarray to modify during the loop
    const newInputArr = [...inputArray];
    for(let i = 0; i < newInputArr.length; i++) {
        //only slice up to k length and remove the first index in the array if the k value is greater than the length of the array
        if(newInputArr.length > k) {
            sum.push(newInputArr.slice(0, k));
            newInputArr.shift();
        }
    }
    //push the last values of the array equal to k
    if(newInputArr.length === k) {
        sum.push(newInputArr);
    }
    
    //loop through the sum array and add the values inside those arrays
    for(let i = 0; i < sum.length; i++) {
        sum[i] = sum[i].reduce((acc, cur) =>  acc + cur)
    }

    //reassign sum to the largest number
    sum = Math.max(...sum);

    //return sum
    return sum;

};

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));

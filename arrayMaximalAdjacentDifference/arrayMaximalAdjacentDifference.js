function arrayMaximalAdjacentDifference(inputArray) {
    let difference = [];

    //loop through and have nested function check for the difference of two nums
    for(let i = 0; i < inputArray.length - 1; i++) {
        function subtract(a, b) {
            return Math.abs(a - b);
        }
        difference.push(subtract(inputArray[i], inputArray[i + 1]));
    }

    //change the value of difference with Math.max which will return the largest num
    difference = Math.max(...difference);
    return difference;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

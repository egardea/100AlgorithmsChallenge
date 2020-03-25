function arrayMaximalAdjacentDifference(inputArray) {
    let maxDifferenceArr = [];
    
    //function return the difference of a & b
    const getDifference = (a,b) => Math.abs(a - b);

    //loop through and have nested function check for the difference of two nums
    for(let i = 0; i < inputArray.length - 1; i++) {
        let difference = getDifference(inputArray[i], inputArray[i + 1]);

        maxDifferenceArr.push(difference);
    }

    //reassign the value of maxDifferenceArr with Math.max which will return the largest num
    maxDifferenceArr = Math.max(...maxDifferenceArr);

    return maxDifferenceArr;
}

console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

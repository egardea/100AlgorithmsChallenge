function avoidObstacles(inputArray) {
    console.log(inputArray);
    let largestNum = Math.max(...inputArray)+1;
    let index = Math.max(...inputArray)+1;
    for(index; index !== -1; index--) {
        if(!inputArray.includes(largestNum)) {
            inputArray.push(largestNum);
        }
        largestNum--;
    }
    inputArray.sort((a,b) => a-b);
    console.log(inputArray);
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
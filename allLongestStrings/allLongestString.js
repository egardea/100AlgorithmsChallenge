function allLongestStrings(inputArray)  {
    //start by taking the first index length
    let largestLength = inputArray[0].length;
    //then loop through the input array starting at 1 and compare and return the largestLength with current index
    for(let i = 1; i < inputArray.length; i++) {
        if(inputArray[i].length > largestLength) {
            largestLength = inputArray[i].length;
        }
    }
    //lastly filter through inputarray and return all elements equal to largestlength
    inputArray = inputArray.filter((cur) => {
        return cur.length === largestLength;
    });

    return inputArray;

};

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
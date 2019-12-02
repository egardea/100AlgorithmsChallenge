function arrayConversion(inputArray) {

    //iterate throgh the input array by 2 and add the elements
    let firstSum = [];
    for(let i = 0; i < inputArray.length - 1; i += 2) {
        firstSum.push(inputArray[i] + inputArray[i + 1]);
    }

    //iterate throgh the firstSum array by 2 and multiply the elements
    let firstProduct = [];
    for(let i = 0; i < firstSum.length; i += 2) {
        firstProduct.push(firstSum[i] * firstSum[i + 1]);
    }

    //iterate throgh the firstProduct array by 1 and add the elements
    let secondSum = [];
    for(let i = 0; i < firstProduct.length - 1; i++) {
        secondSum.push(firstProduct[i] + firstProduct[i + 1]);
    }
    return secondSum;
};

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
function adjacentElementsProduct(inputArray) {
    //check and multiply the first two values
    let largestProduct = inputArray[0] * inputArray[1];
    //loop through the rest of the values starting at index 1
    for (let i = 1; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        //compare the largest product and the prodcut for the largest sum
        largestProduct = largestProduct < product ? product : largestProduct;
    }
    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
function absoluteValuesSumMinimization(a) {
    //cheack to see if its an even array
    const isEven = a.length % 2 === 0;
    //then if its even return half the array minus 1 which returns the left index
    //or if its odd then divide by 2 and use Math.floor to return the middle
    return isEven ? a[a.length / 2 -1] : a[Math.floor(a.length / 2)];
};

 console.log(absoluteValuesSumMinimization([2, 4, 7]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6]));
 console.log(absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]));
function arrayPreviousLess(items) {
    const newItems = [];

    for(let i = 0; i < items.length; i++) {
        //push left value only if the left value is less than current value
        if(items[i] >= items[i - 1]) {
            newItems.push(items[i - 1]);
        } else {
            newItems.push(-1);
        }
    }

    return newItems;
};

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
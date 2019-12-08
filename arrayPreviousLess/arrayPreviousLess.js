function arrayPreviousLess(items) {
    let newItems = [...items];
    for(let i = 0; i < items.length; i++) {
        if(items[i] <=  items[i - 1]){
            newItems[i - 1] = -1;
        }
    };

    newItems.unshift(-1);

    if(items[items.length - 1] >= items[0]) {
        newItems.pop();
    };
    return newItems;
};

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
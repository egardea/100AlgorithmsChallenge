function arrayPreviousLess(items) {
    for(let i = 0; i < items.length; i++) {
        if(items[i] <=  items[i - 1]){
            items[i - 1] = -1;
            items.unshift(-1);
        }
    }
    return items;
};

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
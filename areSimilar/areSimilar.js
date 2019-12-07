function areSimilar(a, b) {
    if(a.toString() === b.toString()) {
        return true;
    }
    let errors = [];
    for(let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            errors.push(a[i]);
            errors.reverse();
        } else {
            errors.push(a[i]);
        }
    }
    console.log(errors);
    return errors.toString() === b.toString() ? true : false;
};

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
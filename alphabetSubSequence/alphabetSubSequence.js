function alphabetSubsequence(s) {
    //turn the array into a string
    const stringToArr = s.split('');

    let newArr = [];
    for(let i = 0; i < stringToArr.length; i++) {
        newArr.push(stringToArr[i].charCodeAt());
    }

    if(new Set(newArr).size !== newArr.length) {
        return false;
    }
    
    if(newArr[0] >= newArr[1]) {
        return false;
    }
    return true;
};

console.log(alphabetSubsequence('zab'));
console.log(alphabetSubsequence('effg'));
console.log(alphabetSubsequence('cdce'));
console.log(alphabetSubsequence('ace'));
console.log(alphabetSubsequence('bxz'));

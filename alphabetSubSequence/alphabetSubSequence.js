function alphabetSubsequence(s) {
    const stringToArr = s.split('');
    let newArr = [];
    for(let i = 0; i < stringToArr.length; i++){
        newArr.push(stringToArr[i].charCodeAt())
    }
    console.log(newArr);
    if(new Set(newArr).size !== newArr.length){
        return false;
    }
    console.log(new Set(newArr));
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

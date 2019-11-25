function alphabetSubsequence(s) {
    //turn the string into an array
    const stringToArr = s.split('');
    //iterate through and find the char code
    let newArr = [];
    for(let i = 0; i < stringToArr.length; i++){
        newArr.push(stringToArr[i].charCodeAt())
    }
    //use new Set to remove duplicates and if there are, then return false
    console.log(newArr);
    if(new Set(newArr).size !== newArr.length){
        return false;
    }
    //compare the and return false if there is no sequence
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

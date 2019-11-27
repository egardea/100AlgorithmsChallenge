function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourLeft + yourRight !== friendsLeft + friendsRight) {
        return false;
    }
    return true;
};

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))
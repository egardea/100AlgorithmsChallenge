function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    return yourLeft + yourRight !== friendsLeft + friendsRight ? true : false;
};

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
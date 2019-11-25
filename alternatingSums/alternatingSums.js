function alternatingSums(a) {
    //define an empty array with two empty arrays
    let teams = [[], []];
    //iterate through the input array
    for(let i = 0; i < a.length; i++) {
        //get the index 0 to the first array
        if([i] === a[0]){
            teams[0].push(a[i]);
        } else if([i] % 2 === 0) {
            teams[0].push(a[i]);
        } else if([i]) {
            teams[1].push(a[i]);
        }
    }
    //return the sum of both arrays
    return [
        teams[0].reduce((acc, cur) => acc + cur),
        teams[1].reduce((acc, cur) => acc + cur)
    ];
};

console.log(alternatingSums([50, 60, 60, 45, 70]));
function almostIncreasingSequence(sequence) {
    //set a variable to 0 errors
    let errors = 0;
    //iterate through
    for(let i = 0; i < sequence.length; i++) {
        if(sequence[i] <= sequence[i - 1]) {
            errors++;
            if(sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) {
                return false;
            }
        }
    }
    return errors <= 1;
};

 console.log(almostIncreasingSequence([1, 3, 2, 1])) 
 console.log(almostIncreasingSequence([1, 3, 2]))
 console.log(almostIncreasingSequence([3, 2, 1]))
function add(param1, param2) {
    //return addition
    return param1 + param2;
};

 function add2(...param1) {
     //use the rest operator to take in multiple arguments
     return param1.reduce((acc, cur) => {
        //use reduce method to get the sum
        return acc + cur;
    })
 };

console.log(add(1, 2));
 console.log(add(3, 2));

 console.log(add2(1,2,3,4,5));
 console.log(add2(2,3));
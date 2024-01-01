/**
 Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

**/

function persistence(num){
    //if num is greater than 10, then it has to be broken down
    let times = 0;

    num = num.toString();

    while (num.length>1){
        times++;
       num = num.split("").map(Number).reduce((a, b) =>a * b).toString();
    }
    return times;

    //turn the number into a string, and have them multiply into each other
}

console.log(persistence(999))

//a little confusing but makes some sense
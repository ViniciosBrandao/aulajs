/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]
*/
function mapsDeclarativo(x){
    return x.map(n => n * 2);
}
function mapsImperativo(x) {
    const arr = [];
    for (let i = 0; i < x.length; i++) {
        arr.push(x[i] * 2);
    }

    return arr;
}
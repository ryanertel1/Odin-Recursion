const util = require('util');

function mergeSort(array) {
    if(array.length < 2) {
        return array;
    }

    const mid = Math.floor(array.length/2);
    const leftSort = mergeSort(array.slice(0, mid));
    const rightSort = mergeSort(array.slice(mid, array.length));
    
    const result = merge(leftSort, rightSort);
    return(result);
}

function merge(left, right) {
    const result = [];

    while(left.length && right.length) {
        if(left[0] <= right[0]) {
            result.push(left.shift());
        }
        else {
            result.push(right.shift());
        }
    }

    while(left.length) { result.push(left.shift()) }
    while(right.length) { result.push(right.shift()) }

    return(result);
}

let inputArray = [3,2,1,13,8,5,0,1];
let correctOutput = [0,1,1,2,3,5,8,13];

let result = mergeSort(inputArray);


if (util.isDeepStrictEqual(result, correctOutput)) {
    console.log('correct');
}
else {
    console.log(`wrong, result was: ${result}\n should have been: ${correctOutput}`);
}
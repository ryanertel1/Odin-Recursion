function fibs(num) {
    let result = [0, 1];
    for(let i = 1; i < num - 1; i++) {
        result.push(result[i] + result[i-1]);
    }
    return(result);
}

function fibsRect(num) {
    let result = [0, 1];
    let len = result.length;
    if(num > len + 1) {
        result = fibsRect(num - 1);
    }
    len = result.length;
    result.push(result[len-1] + result[len-2]);
    return(result);
}

var args = process.argv.slice(2);

let nums = parseInt(args);
if (nums == NaN) {
    let nums = 8;
}

console.log(`number of digits: ${nums}\niterative: ${fibs(nums)} \nrecursive: ${fibsRect(nums)}`)
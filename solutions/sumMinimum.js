function sumMinimum(arr) {
    let first;
    let second;
    let minimum = Infinity;
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = i + 1; j < arr.length ; j++) {
            if(Math.abs(arr[i] + arr[j]) < Math.abs(minimum)) {
                first = arr[i];
                second = arr[j];
                minimum = arr[i] + arr[j];
            }
        }
    }
    return [first, second, minimum];
}

console.log(sumMinimum([9,8,7,7,55,99,88]))
console.log(sumMinimum([-8, -66, -60]))
console.log(sumMinimum([-21, -67, -37, -18, 4, -65]))

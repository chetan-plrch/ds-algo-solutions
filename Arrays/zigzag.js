let arr = [
    [   1,  2,  6],
    [   3,  5,  7],
    [   4,  8,  9],
];

let arr1 = [
    [   1,  2,  6],
    [   3,  5,  7],
    [   4,  8,  9],
];

let output = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let c = arr.length * arr[0].length;
let cur = 0;

let i = 0;
let j = 0;

while(cur < c) {
    console.log(arr[i][j]);
    cur++;
}
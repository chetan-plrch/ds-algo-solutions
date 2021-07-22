const arr = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20]
]

let i = 0;
let j = 0;
let c = arr.length * arr[0].length;
let cur = 0;
while(cur < c) {
    console.log(arr[i][j]);
    cur++;

    if(i % 2 === 0){
        if(j !== (arr[0].length - 1)) {
            j++;
        } else {
            i++;
        }
    } else if(i % 2 === 1){
        if(j !== 0) {
            j--;
        } else {
            i++;
        }
    }
}
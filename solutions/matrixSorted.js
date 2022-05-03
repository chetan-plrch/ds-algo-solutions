

function matrixSorted(arr, value) {
    let rowLength = arr.length;
    let i = 0;
    let j = arr[0].length - 1;

    while(i < rowLength && j >= 0) {
        console.log('AT: i = ', i, 'j = ', j);
        if(arr[i][j] === value) {
            return true;
        } else if(arr[i][j] > value) {
            j--;
        } else {
            i++;
        }
    }

    return false;
}

let arr = [
    [1,4,7,11,15],
    [2,5,8,12,19],
    [3,6,9,16,22],
    [10,13,14,17,24],
    [18,21,23,26,30]
]

let arr1= [[-1,3]]

console.log(matrixSorted(arr1, 3))
function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function bubbleSort(arr) {
    let minimum = Infinity;
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if((arr[j] + arr[j + 1]) < minimum) {
                minimum = Math.abs(arr[j] + arr[j + 1])
            }
        }
    }
    return minimum;
}

console.log(bubbleSort([9,8,7,7,55,99,88]))
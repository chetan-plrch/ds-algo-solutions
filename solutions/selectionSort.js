function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}

function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[smallest]) {
                smallest = j;
            }
        }

        swap(arr, smallest, i)
    }

    return arr;
} 

console.log(selectionSort([9,8,7,1,2,3]))
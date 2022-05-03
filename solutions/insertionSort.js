function insertionSort(arr) {
    let i = 0;
    let j = 0;
    for(i = 1; i < arr.length; i++) {
        let key = arr[i]
        for(j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[j + 1]) {
                arr[j + 1] = arr[j];
            }
        }
        arr[j+1] = key;
    }
    return arr;
}

console.log(insertionSort([10,9,55,1,3,2,4,6,5,7,8]))

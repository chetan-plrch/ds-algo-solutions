function binarySearch(arr, value) {
    let low = 0;
    let high = arr.length - 1;
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);
        if(value === arr[mid]) {
            return arr[mid];
        } else if(value > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    if(low === 0) {
        return value - 1;
    } else if(low > 0) {
        return arr[low - 1];
    } else {
        return null;
    }
}

function getFloor(arr, value) {
    return binarySearch(arr, value);
}

console.log(getFloor([1, 2, 8, 10, 10, 12, 19], 5))
console.log(getFloor([1, 2, 8, 10, 10, 12, 19], 20))
console.log(getFloor([1, 2, 8, 10, 10, 12, 19], 0))

function binarySearchRecursion(lowA, highB, arr, value) {
    let low = lowA;
    let high = highB;
    let mid = Math.floor((low + high) / 2);

    if(low > high) {
        return false;
    }

    if(value === arr[mid]) {
        return true;
    } else if(value > arr[mid]) {
        return binarySearchRecursion(mid + 1, high, arr, value);
    } else if(value < arr[mid]) {
        return binarySearchRecursion(low, mid - 1, arr, value);
    }

    return false;
}

let arr = [-1,3,5,6,7,11];

console.log(binarySearchRecursion(0, 5, arr, 0), 0)
console.log(binarySearchRecursion(0, 5, arr, -1), -1)
console.log(binarySearchRecursion(0, 5, arr, 3), 3)
console.log(binarySearchRecursion(0, 5, arr, 7), 7)



function recursiveMax(arr, index) {
    if(index === 0) {
        return arr[index];
    } else {
        let max = recursiveMax(arr, index - 1);
        return (arr[index] > max) ? arr[index] : max;
    }
}

console.log(recursiveMax([999, -2, 99, 222, 40, 193], 4))

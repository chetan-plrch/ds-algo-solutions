const arr = [10, 12, 19, 26, 27, 31, 33, 35, 42, 44]

function maxHeapify(a, i) {
    let left = 2 * i
    let right = (2 * i) + 1
    let largest = i

    if(left <= a.length && a[left] > a[i])
        largest = left
    else 
        largest = i

    if(right <= a.length && a[right] > a[largest])
        largest = right

    if(largest !== i) {
        swap(a, i, largest)
        maxHeapify(a, largest)
    }
    return arr
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

function buildHeap() {
    for(let i = Math.floor(arr.length/2); i >=0; i--)
        maxHeapify(arr)
}

buildHeap()

console.log(arr)
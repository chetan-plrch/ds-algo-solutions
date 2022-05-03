let arr = [4,2,3,6,8,9,0]

function sort(arr) {
    if(arr.length === 0) {
        return;
    } else {
        let element = arr[arr.length - 1]
        let newArr = arr.splice(0, arr.length - 1)
        console.log('element', element)
        sort(newArr);
        sortArray(newArr, element);
    }

    return arr;
}

function sortArray(arrB, element) {
    if(element < arrB[arrB.length - 1]) {
        sortArray(arrB.pop())
    } else {

    }
}

console.log(sort(arr))
const sort = (arr) => {
    return mergeSort(arr, 0, arr.length - 1);
}

const mergeSort = (arr, l, r) => {
    if(l < r) {
        let m = Math.floor((l + r) / 2);
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);
        merge(arr, l, m, r);
    }
    return arr;
}

const merge = (arr, start, middle, end) => {
    let newArr = new Array(end - start + 1);
    let i = start, j = middle + 1, k = 0;
    while(i <= middle && j <= end) {
        if(arr[i] <= arr[j]) {
            newArr[k++] = arr[i++];
        } else {
            newArr[k++] = arr[j++];
        }
    }

    while(k < newArr.length) {
        if(i <= middle) {
            newArr[k++] = arr[i++];
        } else {
            newArr[k++] = arr[j++];
        }
    }

    for(let p = start, q=0; q < newArr.length; p+=1, q+=1) {
        arr[p] = newArr[q];
    }
}

/**
 * Complexity
 * 
 * Time: 
 * Worst:   O(n*logn)
 * Average: O(n*logn)
 * Best:    O(n*logn)
 * 
 * Space:   O(n)
 */


module.exports = sort;
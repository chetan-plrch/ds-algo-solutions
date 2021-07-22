const sort = (arr) => {
    quickSort(arr, l, r);
    return arr;
}


const quickSort = (arr, l, r) => {
    if(l < r) {
        let j = partition(arr, l, r);
        quickSort(arr, l, j);
        quickSort(arr, j + 1, r);
    }
}

const partition = () => {

}


/**
 * Complexity
 * 
 * Time: 
 * Worst:   O(n^2)
 * Average: 
 * Best:    O(n^2)
 * 
 * Space:   O(1)
 */


module.exports = sort;
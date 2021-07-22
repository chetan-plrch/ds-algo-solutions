const { swap } = require('../utility');

const sort = (arr) => {
    for(let i = 0; i < arr.length - 1; i+=1) {
        let noSwap = true;
        for(let j = 1; j < arr.length - i; j+=1) {
            if(arr[j - 1] > arr[j]) {
                noSwap = false;
                swap(arr, j - 1, j);
            }
        }
        if(noSwap) {
            break;
        }
    }
    return arr;
}

/**
 * Complexity
 * 
 * Time: 
 * Worst:   O(n^2)
 * Average: O(n^2)
 * Best:    O(n)
 * 
 * Space:   O(1)
 */


module.exports = sort;
const { swap } = require('../utility');

const sort = (arr) => {
    for(let i = 0; i < arr.length - 1; i+=1) {
        let min = i;
        for(let j = i + 1; j < arr.length; j+=1) {
            if(arr[min] > arr[j]) {
                min = j;
            }
        }
        swap(arr, i, min);
    }
    return arr;
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
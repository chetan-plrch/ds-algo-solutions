const { MinHeap } = require('datastructures-js')

const sort = (arr) => {
    const h = new MinHeap();
    arr.forEach(it => h.insert(it));
    arr.forEach((c, i) => arr[i] = h.extractRoot());
    return arr;
}

/**
 * Complexity
 * 
 * Time: 
 * Worst:   O(n*logn)
 * Average: O(n*logn)
 * Best:    O(n*logn)
 * 
 * Space:   O(1)
 */


module.exports = sort;
const sort = (arr) => {
    for(let i = 1; i < arr.length; i+=1) {
        let cur = arr[i], j;
        for(j = i - 1; arr[j] > cur; j-=1) {
            arr[j + 1] = arr[j];
        }

        if(j !== undefined) {
            arr[j + 1] = cur;
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
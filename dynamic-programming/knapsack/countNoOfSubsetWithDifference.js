const d = {
    items: [2, 4, 3, 1, 2],
    diff: 2,
}

// 1,2,2,4,3 => 12
// Diff => 2 = { 2,2,3 } {1,4}, {4,3} {2,2,1}, {4,2,1} {2, 3}, {4, 2, 1} {2, 3}
//

/** total -> 12
 * sum ->       0   1   2   3   4   5   6   7   8   9   10  11  12
 * items    0   1   0   0   0   0   0   0   0   0   0   0   0   0
 *          1   1   0   1   0   0   0   0   0   0   0   0   0   0
 *          2   1   0   1   0   1   0   1   0   0   0   0   0   0
 *          3   1   
 *          4   1
 *          5   1   t   t   t   t   t   t   t   t   t   t   f   t
 */

/**
 * To note:
 * 1. This problem is similar to countNoOfSubsetWithDifference
 *      eg: diff/sum = 2, s1 = {1, 2}, s2 = { 3, 2 }, then solution (s1 - s2) = (1 + 2) - (3 + 2)
 * 2. In a 1D-Array, it is very important to come from back
 *      eg: (let j = sum; j >= 1; j--), this ensures that we don't use overwritten value of the same iteration.
 *          Rather we must be using the previous values, which are preserved when we come from back.
 * 3. Also each element is considered different even if {2,2,2}, each forms a different subset, it doesn't matter if the values are same.
 */

const countNoOfSubsetWithDifference = (items, diff, output) => {
    const sum = items.reduce((acc, v) => acc+v, 0);
    const mem = new Array(sum + 1).fill(0);
    const s1 = Math.floor(Math.abs(sum - diff) / 2);
    
    for(let i = 1; i <= items.length; i++) {
        mem[0] = 1;
        for (let j = sum; j >= 1; j--) {
            if(items[i - 1] <= j)
                mem[j] = mem[j - items[i - 1]] + mem[j];
        }
    }

    return mem[s1];
}

console.log(countNoOfSubsetWithDifference(d.items, d.diff, { count: 0 }));
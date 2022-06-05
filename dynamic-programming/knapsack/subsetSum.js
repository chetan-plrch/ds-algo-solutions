const d = {
    items: [2, 3, 7, 8, 10],
    sum: 14
}

const isSubsetSumPresent = (items, sum, index) => {
    if(sum === 0) return true;
    if(index === items.length) return false;

    if(items[index] <= sum) {
        return ((isSubsetSumPresent(items, sum - items[index], index + 1)) || (isSubsetSumPresent(items, sum, index + 1)));
    } else {
        return isSubsetSumPresent(items, sum, index + 1);
    }
}

console.log(isSubsetSumPresent(d.items, d.sum, 0));

/**
 *      sum ->  0   1   2   3   4   5   6   7   8   9   10  11
 * items
 *  0           f   f   f   f   f   f   f   f   f   f   f   f
 *  1           f   f   t   f   f   f   f   f   f   f   f   f
 *  2           f   f   t   t   f   t   f   f   f   f   f   f
 *  3           f   f   t   t   f   t   f   
 *  4           f
 *  5           f
 */

const mem = new Array(d.items.length + 1).fill(false).map(() => {
    return new Array(d.sum + 1).fill(false);
});
mem.forEach(ar => ar[0] = true);

const findSubsetSum = (items, sum) => {
    for (let i = 1; i <= items.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if (items[i - 1] <= j) {
                mem[i][j] = ((mem[i - 1][j - items[i - 1]]) || (mem[i - 1][j]));
            } else {
                mem[i][j] = mem[i - 1][j];
            }
        }
    }
    return mem;
}

console.log('subset sum', findSubsetSum(d.items, d.sum));
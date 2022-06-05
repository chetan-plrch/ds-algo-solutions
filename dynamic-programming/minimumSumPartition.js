const d = {
    items: [5, 6, 6, 12, 8, 3, 6, 8, 9, 12, 3, 5]
}

const minimumSumPartition = (items, sum, totalSum, index, results) => {
    if(Math.abs(Math.abs(totalSum - sum) - sum) < results.output) {
        results.output = Math.abs(Math.abs(totalSum - sum) - sum);
    }

    if(index === items.length) return results;

    if(items[index] <= sum) {
        minimumSumPartition(items, sum - items[index], totalSum, index + 1, results)
        minimumSumPartition(items, sum, totalSum, index + 1, results)
    } else {
        minimumSumPartition(items, sum, totalSum, index + 1, results);
    }
    return results;
}

const sum = d.items.reduce((acc, it) => acc + it, 0)
// console.log(minimumSumPartition(d.items, sum, sum, 0, { output: Number.MAX_SAFE_INTEGER }));

const memoization = new Array(d.items.length + 1).fill(false).map(() => {
    return new Array(sum + 1).fill(false);
});
memoization.forEach((arr) => arr[0] = true);
/**
 * sum      ->  0   1   2   3   4   5   6   7   8   9   10  11  12  13  14... 59
 * items    0   t   f   f   f   f   f   f   f   f   f   f   f   f   f   f   f
 *          1   t   f   t   f   f   f   f   f   f   f   f   f   f   f   f   f   
 *          2   t   f   t   f   f   f   t   f   t
 *          3   t
 *          4   t
 *          5   t
 *          6   t
 */
const count = (items, sum) => {
    let min = Number.MAX_SAFE_INTEGER;
    for(let i = 1; i <= items.length; i++) {
        for(let j = 1; j <= sum; j++) {
            if(items[i - 1] <= j) {
                memoization[i][j] = memoization[i - 1][j - items[i - 1]] || memoization[i - 1][j];
            } else {
                memoization[i][j] = memoization[i - 1][j];
            }

            if(i === items.length) {
                const s1 = j;
                const s2 = Math.abs(sum - j);
                const diff = Math.abs(s1 - s2);
                if(memoization[i][s1] && memoization[i][s2] && diff < min) {
                    min = diff;
                }
            }
        }
    }
    return min;
}

console.log(count(d.items, sum));
const d = {
    items: [2, 6, 6, 12, 2, 2],
    sum: 12
}

const countSubsetSum = (items, sum, index) => {
    if(sum === 0) return 1;
    if(index === items.length) return 0;

    if(items[index] <= sum) {
        return countSubsetSum(items, sum - items[index], index + 1) + countSubsetSum(items, sum, index + 1);
    } else {
        return countSubsetSum(items, sum, index + 1);
    }
}

console.log(countSubsetSum(d.items, d.sum, 0));

const memoization = new Array(d.items.length + 1).fill(0).map(() => {
    return new Array(d.sum + 1).fill(0);
});
memoization.forEach((arr) => arr[0] = 1);
const count = (items, sum) => {
    for(let i = 1; i <= items.length; i++) {
        for(let j = 1; j <= sum; j++) {
            if(items[i - 1] <= j) {
                memoization[i][j] = memoization[i - 1][j - items[i - 1]] + memoization[i - 1][j];
            } else {
                memoization[i][j] = memoization[i - 1][j]
            }
        }
    }
    return memoization
}

console.log(count(d.items, d.sum));
const data = {
    wt: [3, 4, 2, 6, 1, 3],
    val: [1, 6, 2, 4, 3, 5],
    cap: 11
};

const data2 = {
    wt: [2, 5, 1, 3, 4],
    val: [15, 14, 10, 45, 30],
    cap: 10
}

const data3 = {
    wt: [1, 2, 3],
    val: [1, 2, 3],
    cap: 3
}

let count = 0;
const unboundedRecursive = (idx, wt, val, profit, cap) => {
    if ((idx === wt.length) || (cap < 0)) return 0;
    count++;

    if(wt[idx] <= cap) {
        return Math.max(
            val[idx] + unboundedRecursive(idx, wt, val, profit, cap - wt[idx]),
            unboundedRecursive(idx + 1, wt, val, profit, cap)
        )
    } else {
        return unboundedRecursive(idx + 1, wt, val, profit, cap)
    }
}

console.log(unboundedRecursive(0, data3.wt, data3.val, 0, data3.cap));
console.log('test', count);

const unboundedIterative = (wt, val, cap) => {
    const profits = new Array(wt.length + 1).fill(0).map(() => {
        return new Array(cap + 1).fill(0);
    });

    for(let i = 1; i <= wt.length; i++) {
        for (let j = 1; j <= cap; j++) {
            if (wt[i - 1] <= j) {
                profits[i][j] = Math.max(
                    val[i - 1] + profits[i][j - wt[i - 1]],
                    profits[i - 1][j]
                );
            } else {
                profits[i][j] = profits[i - 1][j];
            }
        }
    }
    return profits;
}

console.log(unboundedIterative(data.wt, data.val, data.cap));

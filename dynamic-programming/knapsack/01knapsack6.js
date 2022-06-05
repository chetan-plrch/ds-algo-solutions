const data = {
    wt: [3, 4, 2, 6, 1],
    val: [1, 6, 2, 4, 3],
    cap: 10
};

const memoization = new Array(data.val.length + 1).fill(0).map(() => {
    new Array(data.cap + 1).fill(0);
});

const maxCapacity = (wt, val, cap, index) => {
    if(cap === 0 || index === -1)
        return 0;

    if(wt[index] <= cap) {
        return Math.max(
            val[index] + maxCapacity(wt, val, cap - wt[index], index - 1),
            maxCapacity(wt, val, cap, index - 1)
        )
    } else {
        return maxCapacity(wt, val, cap, index - 1);
    }
}

console.log(maxCapacity(data.wt, data.val, data.cap, data.wt.length - 1));

const maxCapacityIterative = (wt, val, cap) => {
    const profits = new Array(wt.length + 1).fill(0).map(() => {
        return new Array(cap + 1).fill(0);
    });

    for(let i = 1; i <= wt.length; i++) {
        for (let j = 1; j <= cap; j++) {
            if (wt[i - 1] <= j) {
                profits[i][j] = Math.max(
                    val[i - 1] + profits[i - 1][j - wt[i - 1]],
                    profits[i - 1][j]
                );
            } else {
                profits[i][j] = profits[i - 1][j];
            }
        }
    }
    return profits;
}

console.log(maxCapacityIterative(data.wt, data.val, data.cap));

const knapsack = {
    wt: [1, 3, 4, 5],
    val: [1, 4, 5, 7],
    w: 10
};

const calculateMaxProfit = (wt, val, w) => {
    const dp = new Array(wt.length + 1).fill(undefined);
    dp.forEach((v, idx) => dp[idx] = new Array(w + 1));
    const v = calculate(wt, val, w, 0, dp);
    console.log(dp);
    return v;
}

const calculate = (wt, val, w, index, dp) => {
    const newSize = w - wt[index];
    if(index >= wt.length || newSize < 0) {
        return 0;
    } else if (dp[index][newSize] !== undefined) {
        console.log('Optimised', index, newSize, dp[index][newSize]);
        return dp[index][newSize];
    }

    dp[index][newSize] = Math.max(
        val[index] + calculate(wt, val, newSize, index + 1, dp),
        calculate(wt, val, w, index + 1, dp)
    )

    return dp[index][newSize];
}

console.log('Max profit', calculateMaxProfit(knapsack.wt, knapsack.val, knapsack.w));
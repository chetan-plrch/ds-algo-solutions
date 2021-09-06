const knapsack = {
    wt: [1, 3, 4, 5],
    val: [1, 4, 5, 7],
    size: 7
};

const calculateMaxProfit = (wt, val, size) => {
    const dp = new Array(wt.length + 1).fill(undefined);
    dp.forEach((c, idx) => dp[idx] = new Array(size + 1).fill(undefined));

    for(let i = 0; i < dp.length; i++) {
        for(let j = 0; j < dp[0].length; j++) {
            if(i === 0)
                dp[i][j] = 0;
            if(j === 0)
                dp[i][j] = 0;
        }
    }

    for(let i = 1; i < dp.length; i++) {
        for(let j = 1; j < dp[0].length; j++) {
            if(wt[i - 1] <= j) {
                dp[i][j] = val[i - 1];
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j] + dp[i - 1][j - wt[i - 1]]);
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    console.log(dp);
}

console.log('Max profit', calculateMaxProfit(knapsack.wt, knapsack.val, knapsack.size));
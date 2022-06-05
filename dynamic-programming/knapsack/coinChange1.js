const d = {
    coins: [1, 2, 3],
    sum: 5
}

const coinChange1 = (idx, wt, cap) => {
    if(cap === 0) return 1;
    if ((idx === wt.length) || (cap < 0)) return 0;

    if(wt[idx] <= cap) {
        return coinChange1(idx, wt, cap - wt[idx])
        + coinChange1(idx + 1, wt, cap);
    } else {
        return coinChange1(idx + 1, wt, cap);
    }
}

/**
 * Note:
 * 1. The memoization table needs to be 2D
 *      reasons:
 *          1. Can't process from backwards as it needs previous value computed in the current referring row.
 *                 eg: mem[i][j] = mem[i{*}][j - coins[i - 1]] + mem[i - 1][j];
 */

// console.log(coinChange1(0, d.coins, d.sum));

const coinChange1Iterative = (coins, sum) => {
    const mem = new Array(coins.length + 1).fill(0).map(() => new Array(sum + 1).fill(0));
    mem.forEach((a) => a[0] = 1);
    
    for(let i = 1; i <= coins.length; i++) {
        for(let j = 1; j <= sum; j++) {
            if(coins[i - 1] <= j) {
                mem[i][j] = mem[i][j - coins[i - 1]] + mem[i - 1][j];
            } else {
                mem[i][j] = mem[i - 1][j];
            }
        }
    }
    return mem;
}

console.log(coinChange1Iterative(d.coins, d.sum));
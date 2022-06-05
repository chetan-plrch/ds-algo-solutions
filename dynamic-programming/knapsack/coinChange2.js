const d = {
    coins: [1, 2, 3],
    sum: 5
}

const g = (v) => v === 0 ? Number.MAX_SAFE_INTEGER : v;

const coinChange2 = (idx, coins, sum) => {
    if (sum === 0) return 0;
    if (idx === coins.length) return Number.MAX_SAFE_INTEGER;

    if (coins[idx] <= sum) {
        return Math.min(
            1 + coinChange2(idx, coins, sum - coins[idx]),
            g(coinChange2(idx + 1, coins, sum))
        );
    } else {
        return coinChange2(idx + 1, coins, sum);
    }
}

console.log(coinChange2(0, d.coins, d.sum));

/**
 * sum ->       0   1   2   3   4   5
 * items    0   0   0   0   0   0   0
 *          1   1   1   2   3   4   5
 *          2   1   1   1   2   2   3
 *          3   1   1   1   1   2   2
 */

 /**
 * sum ->       0   1   2   3   4   5
 * items    0   0   0   0   0   0   0
 *          1   1   1      
 *          2   1
 *          3   1
 */
const coinChange2Iterative = (coins, sum) => {
    const mem = new Array(coins.length + 1).fill(0).map(() => {
        return new Array(sum + 1).fill(0);
    })
    mem[0].map(() => Number.MAX_SAFE_INTEGER);

    for (let i = 1; i <= coins.length; i++) {
        for (let j = 1; j <= sum; j++) {
            if(coins[i - 1] <= j) {
                mem[i][j] = Math.min(
                    1 + mem[i][j - coins[i - 1]],
                    mem[i - 1][j]
                );
            } else {
                mem[i][j] = mem[i - 1][j];
            }
        }
    }
    return mem;
}

console.log(coinChange2Iterative(d.coins, d.sum));
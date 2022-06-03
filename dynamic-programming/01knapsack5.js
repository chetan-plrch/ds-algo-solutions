// Code for top-down approach

const data = {
    wt: [3, 4, 2, 6, 1],
    val: [1, 6, 2, 4, 3],
    cap: 10
}

const memoization = new Array(data.wt.length + 1).fill(0).map(() => new Array(data.cap + 1).fill(0));

const calculateMaxProfit = (wt, val, cap) => {
    return maxProfit(wt, val, cap);
}

/**     cap 1   2   3   4   5   6   7   8   9   10
 *  item
 *  0       0   0   1   1   1   1   1   1   1   1
 *  1       0   0   1   6   6   6   7   7   7   7
 *  2       0   2   2   6   6   8   8   8   9   9  
 *  3       0   2   2   6   6   8   8   8   9   10
 *  4       3   3   5   6   9   9   11  11  11  12
 * */

const negativeWeightCheck = (w) => {
    if(isNaN(w)) return 0;
    return w;
}

const maxProfit = (wt, val, cap) => {
    for (let i = 0; i < wt.length; i++) {
        for(let j = 0; j <= cap; j++) {
            if(cap >= wt[i]) {
                memoization[i + 1][j] = Math.max(negativeWeightCheck(val[i] + memoization[i][j - wt[i]]), memoization[i][j]);
            } else if(cap < wt[i]) {
                memoization[i + 1][j] = memoization[i][j];
            }
        }
    }

    return memoization;
}

console.log(calculateMaxProfit(data.wt, data.val, data.cap));
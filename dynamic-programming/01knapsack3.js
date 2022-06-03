const data = {
    wt: [3, 4, 2, 6, 1],
    val: [1, 6, 2, 4, 3],
    cap: 10
}

// The algorithm is simply true/false, meaning include/exclude for every item

const calculateMaxProfit = (wt, val, cap) => {
    return maxProfit(wt.length - 1, wt, val, cap);
}

/**     cap 1   2   3   4   5   6   7   8   9   10
 *  item
 *  0       0   0   1   1   1   1   1   1   1   1
 *  1       0   0   1   6   6   6   7   7   7   7
 *  2       0   2   2   6   6   8   8   8   9   9  
 *  3       0   2   2   6   6   8   8   8   9   10
 *  4       3   3   5   6   9   9   11  11  11  12
 * */

const memoization = new Array(data.wt.length).fill(-1).map(() => new Array(data.cap + 1).fill(-1));

const maxProfit = (idx, wt, val, cap) => {
    if ((idx < 0) || (cap <= 0)) return 0;

    if(memoization[idx][cap] > -1) memoization[idx][cap];

    if(cap >= wt[idx])
        memoization[idx][cap] = Math.max(val[idx] + maxProfit(idx - 1, wt, val, cap - wt[idx]), maxProfit(idx - 1, wt, val, cap));
    else if (cap < wt[idx])
        memoization[idx][cap] = maxProfit(idx - 1, wt, val, cap);

    return memoization[idx][cap];
}

console.log(calculateMaxProfit(data.wt, data.val, data.cap));
console.log(memoization);
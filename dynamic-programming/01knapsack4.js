const input = {
    wt: [3, 4, 2, 6, 1, 3, 6, 7, 9, 10],
    val: [1, 6, 2, 4, 3, 8, 9, 2, 3, 6],
    cap: 20
}

const calculateMaxProfit = (wt, val, cap) => {
    return maxProfit(wt, val, cap, wt.length - 1);
}

const memoization = new Array(input.wt.length).fill(-1).map(() => new Array(input.cap + 1).fill(-1));

const maxProfit = (wt, val, cap, n) => {
    if((n < 0) || (cap <= 0)) return 0;

    if (memoization[n][cap] !== -1) {
        console.log('sub-problem!');
        return memoization[n][cap];
    }

    if(wt[n] <= cap) {
        memoization[n][cap] = Math.max(
            val[n] + maxProfit(wt, val, cap - wt[n], n - 1),
            maxProfit(wt, val, cap, n - 1)
        )
    } else if(wt[n] > cap){
        memoization[n][cap] = maxProfit(wt, val, cap, n - 1);
    }
    
    return memoization[n][cap];
}

console.log(calculateMaxProfit(input.wt, input.val, input.cap));
console.error(memoization);
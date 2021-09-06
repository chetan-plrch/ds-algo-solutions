const knapsack = {
    wt: [1, 3, 4, 5],
    val: [1, 4, 5, 7],
    size: 7
};

const calculateMaxProfit = (wt, val, size) => {
    return calculate(wt, val, size, 0);
}

const calculate = (wt, val, size, index) => {
    const newSize = size - wt[index]
    if(index >= wt.length || newSize < 0) {
        return 0;
    }

    return Math.max(
        val[index] + calculate(wt, val, newSize, index + 1), 
        calculate(wt, val, size, index + 1)
    );
}

console.log('Max profit', calculateMaxProfit(knapsack.wt, knapsack.val, knapsack.size));
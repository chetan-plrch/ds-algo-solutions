const input = {
    wt: [1, 3, 4, 5],
    val: [1, 4, 3, 7],
    capacity: 7
}

const knapsack = (wt, val, capacity) => {
    return calculate(0, wt, val, capacity, 0);
}

const calculate = (cI, wt, val, cW, tV) => {
    if ((cI >= wt.length) || (cW === 0)) return 0;

    let right = 0;
    if (cW >= wt[cI]) {
        let v = calculate(cI + 1, wt, val, cW - wt[cI], tV + val[cI]);
        right = v > (tV + wt[cI]) ? v : (tV + wt[cI]);
    }

    let v2 = calculate(cI + 1, wt, val, cW, tV);
    let left = v2 > tV ? v2 : tV;
    console.log('right:',right, ' left:', left);
    return left > right ? left : right;
}

console.log(
    knapsack(input.wt, input.val, input.capacity)
);
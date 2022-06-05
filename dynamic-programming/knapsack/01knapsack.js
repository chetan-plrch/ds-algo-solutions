const input = {
    wt: [1, 3, 4, 5],
    val: [1, 4, 5, 7],
    capacity: 7
}

const knapsack = (wt, val, capacity) => {
    calculate(0, wt, val, capacity, 0, '');
}

const calculate = (cI, wt, val, cW, tV, path) => {
    console.log(path, ' = ', tV , ' left: ', cW);
    if (cI >= wt.length) return;

    if (cW >= wt[cI]) {
        calculate(cI + 1, wt, val, cW - wt[cI], tV + val[cI], path + `-> ${wt[cI]}`);
    }

    calculate(cI + 1, wt, val, cW, tV, path);
}

knapsack(
    input.wt,
    input.val,
    input.capacity
);

/**
 * 1. Write the coding solution
 * 2. Convert the coding solution to dp
 * 3. Convert the dp into a top-down approach
 */
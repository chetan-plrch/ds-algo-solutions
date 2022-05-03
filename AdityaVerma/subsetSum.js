const data = {
    arr: [2, 3, 7, 8, 10, 11, 15, 78, 90, 32, 67, 99, 89, 65, 43, 90],
    sum: 707
};

const data2 = {
    arr: [1, 5, 8, 9, 10],
    sum: 11
}

/**
 * Recursive Top-down approach
 */
const subsetExist = (arr, sum, pathSum, index) => {
    if(index >= arr.length)
        return false;

    const lPathSum = pathSum + arr[index];
    const rPathSum = pathSum;
    
    const lMatch = subsetExist(arr, sum, lPathSum, index + 1);
    const rMatch = subsetExist(arr, sum, rPathSum, index + 1);

    return (lPathSum === sum) || (rPathSum === sum) || lMatch || rMatch;
}

/**
 * Similar to knapsack approach
 */
 const subsetExist2 = (arr, sum, index) => {
    if(sum === 0)
        return true;
    else if(sum < 0 || index >= arr.length)
        return false;

    const lSub = subsetExist2(arr, sum - arr[index], index + 1);
    const rSub = subsetExist2(arr, sum, index + 1);

    return lSub || rSub;
}

/**
 * Using dynamic programming
 */
 const subsetExist3 = (arr, sum, index, dp) => {
    if(sum === 0)
        return true;
    else if(sum < 0 || index >= arr.length)
        return false;
    else if(dp[index][sum] !== undefined)
        return dp[index][sum];

    const lSub = subsetExist3(arr, sum - arr[index], index + 1, dp);
    const rSub = subsetExist3(arr, sum, index + 1, dp);

    dp[index][sum] = lSub || rSub;

    return lSub || rSub;
}

const subsetExist4 = (arr, dp) => {
    for(let i = 0; i < dp.length; i++) {
        for (let j = 0; j < dp[0].length; j++) {
            if(i === 0)
                dp[i][j] = false;
            if(j === 0)
                dp[i][j] = true;
        }
    }

    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if(arr[i-1] <= j) {
                dp[i][j] = (
                    dp[i - 1][j] ||
                    dp[i - 1][(j - arr[i-1])]
                )
            } else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    console.log(dp);
}

// const dp = new Array(data.arr.length + 1).fill(undefined);
// dp.forEach((v, idx) => dp[idx] = new Array(data.sum + 1).fill(undefined));
// console.time('second');
// console.log('Subset exists: ', subsetExist3(data.arr, data.sum, 0, dp));
// console.timeEnd('second');

const dp = new Array(data2.arr.length + 1).fill(undefined);
dp.forEach((v, idx) => dp[idx] = new Array(data2.sum + 1).fill(undefined));
console.time('second');
console.log('Subset exists: ', subsetExist4(data2.arr, dp));
console.timeEnd('second');

// console.time('first');
// console.log('Subset exists: ', subsetExist2(data.arr, data.sum, 0, 0));
// console.timeEnd('first');
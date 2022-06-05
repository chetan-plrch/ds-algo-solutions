const d = {
    items: [3, 2, 4, 3, 3, 4]
}

const minimumSumPartition = (items, sum, totalSum, index, results) => {
    if(Math.abs(Math.abs(totalSum - sum) - sum) < results.output) {
        results.output = Math.abs(Math.abs(totalSum - sum) - sum);
    }

    if(index === items.length) return results;

    if(items[index] <= sum) {
        minimumSumPartition(items, sum - items[index], totalSum, index + 1, results)
        minimumSumPartition(items, sum, totalSum, index + 1, results)
    } else {
        minimumSumPartition(items, sum, totalSum, index + 1, results);
    }
    return results;
}

const sum = d.items.reduce((acc, it) => acc + it, 0)
// console.log(minimumSumPartition(d.items, sum, sum, 0, { output: Number.MAX_SAFE_INTEGER }));


/**
 * sum      ->  0   1   2   3   4   5   6   7   8   9   10  11  12  13  14... 59
 * items    0   t   f   f   f   f   f   f   f   f   f   f   f   f   f   f   f
 *          1   t   f   t   f   f   f   f   f   f   f   f   f   f   f   f   f   
 *          2   t   f   t   f   f   f   t   f   t
 *          3   t
 *          4   t
 *          5   t
 *          6   t
 */
const count = (items, sum) => {
    let min = Number.MAX_SAFE_INTEGER;
    const memoization = new Array(d.items.length + 1).fill(false).map(() => {
        return new Array(sum + 1).fill(false);
    });
    memoization.forEach((arr) => arr[0] = true);
    for(let i = 1; i <= items.length; i++) {
        for(let j = 1; j <= sum; j++) {
            if(items[i - 1] <= j) {
                memoization[i][j] = memoization[i - 1][j - items[i - 1]] || memoization[i - 1][j];
            } else {
                memoization[i][j] = memoization[i - 1][j];
            }

            if(i === items.length) {
                const s1 = j;
                const s2 = Math.abs(sum - j);
                const diff = Math.abs(s1 - s2);
                if(memoization[i][s1] && memoization[i][s2] && diff < min) {
                    min = diff;
                }
            }
        }
    }
    return min;
}

console.log('1st', count(d.items, sum));

const count2 = (items, sum) => {
    let min = Number.MAX_SAFE_INTEGER;
    const mem = new Array(sum + 1).fill(false);
    for(let i = 1; i <= items.length; i++) {
        mem[0] = true;
        for(let j = 1; j <= sum; j++) {
            if(items[i - 1] <= j) {
                mem[j] = mem[j - items[i - 1]] || mem[j];
            }
        }
    }
    console.log(mem);
    for(let j = 0; j <= (sum/2); j++) {
        const s1 = j, diff = Math.abs(2*j - sum);
        if(mem[s1] && diff < min) {
            min = diff;
        }
    }

    return min;
}

console.log('2nd', count2(d.items, sum));

/**
 * input: [3, 2, 4, 1, 1]
 * 
 * sum ->       0   1   2   3   4   5   6   7   8   9   10  11
 * items    0   
 */
const usingOneDArray = (items, sum) => {
    const mem = new Array(sum + 1).fill(false);

    for (let i = 1; i <= items.length; i++) {
        mem[0] = true;
        for (let j = 1; j <= sum; j++) {
            if (items[i - 1] <= j)
                mem[j] = mem[j] || mem[j - items[i - 1]];
        }
    }

    console.log(mem);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i <= sum/2; i++) {
        if(mem[i] === true)
            min = Math.min(min, Math.abs(sum - (2*i)));
    }
    return min;
}

console.log('3rd', usingOneDArray(d.items, sum));
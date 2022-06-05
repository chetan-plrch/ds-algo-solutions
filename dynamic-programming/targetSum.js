const d = {
    items: [2, 1, 1],
    sum: 2,
}

const targetSum = (idx, items, sum, target, output, path) => {
    if (idx === items.length) {
        if (sum === target) {
            console.log(path);
            return 1;
        }
        return 0;
    }
    
    return targetSum(idx + 1, items, sum + items[idx], target, output, path + `(+${items[idx]})`) 
        + targetSum(idx + 1, items, sum - items[idx], target, output, path + `(-${items[idx]})`);
}

console.log(targetSum(0, d.items, 0, d.sum, { count: 0 }, ''));

let mem = new Array(d.items.reduce((acc, v) => acc + v, 0) + 1).fill(0);
mem = mem.map(() => new Array(d.sum * 2 + 1).fill(0));
console.log(mem);
const targetSum2 = (idx, items, sum, target, output, path) => {

    if (idx === items.length) {
        if (sum === target) {
            console.log(path);
            return 1;
        }
        return 0;
    }
    
    return targetSum2(idx + 1, items, sum + items[idx], target, output, path + `(+${items[idx]})`) 
        + targetSum2(idx + 1, items, sum - items[idx], target, output, path + `(-${items[idx]})`);
}

console.log(targetSum2(0, d.items, 0, d.sum, { count: 0 }, ''));

/**
 * sum ->       0   1   2   3   4   5   6   7   8
 *              -4  -3  -2  -1  0   1   2   3   4
 * items    0                           1        
 *          1                           1
 *          2                           1
 *          3                           1
 */

// const convertIndex = (base, index) => {
//     return base + index
// }

// const targetSumIterative = (items, target) => {
//     const sum = items.reduce((acc, v) => acc + v, 0);
//     const base = sum * 2;
//     const mem = new Array(base + 1).fill(0);
//     mem[target] = 1;

//     for (let i = 0; i <= items.length; i++) {
//         for (let j = sum; j >= -sum; j--) {
//             if (items[i - 1] < j) {
//                 mem[convertIndex(base, j)] = mem[convertIndex(base, j - items[i - 1])] + mem[convertIndex(j)];
//             }
//         }
//         console.log(mem);
//     }

//     // console.log(mem);
//     // for (let j = -sum; (j <= sum) || (j !== (sum + 1)); j++) {

//     // }
// }

// console.log(targetSumIterative(d.items, d.sum));
/**
 * Get the catalan number for BST
 */
const a = new Array(20);

const countUniqueBST = (arr) => {
    const f = new Array(arr.length + 1).fill(0);
    f[0] = 1;
    f[1] = 1;
    return calculate(arr.length, f);
}

const calculate = (size, f) => {
    if (size === 0 || size === 1)
        return f[0];
    else if(f[size] !== 0)
        return f[size];
    else { 
        let i = 0;
        let total = 0;
        while(i < size) {
            total = total + (calculate(i, f) * calculate(size - i - 1, f));
            i++;
        }
        f[size] = total;
        return f[size];
    }
}

console.time("latency");
console.log('Count of unique BST', countUniqueBST(a));
console.timeEnd("latency");
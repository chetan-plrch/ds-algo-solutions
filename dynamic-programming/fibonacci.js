/**
 * What is the solution?
 * Sequence: 0, 1, 1, 2, 3, 5, ....
 * 
 * In the sequence above we can always use the previous two values to find the next value
 * 1. Normal approach to just print values by holding onto the two previous values
 * 2. Recursive approach, werein we use the stored values to derive the new value
 */

// Normal way
const findFibonacci = (n) => {
    let f1 = 0;
    let f2 = 1;
    for(let i = 0; i < n; i++) {
        if (i === 0) {
            console.log(f1, ' ');
        } else if (i === 1) {
            console.log(f2, ' ');
        } else {
            f2 = f1 + f2;
            f1 = f2 - f1;
            console.log(f2, ' ');
        }
    }
}

// Recursive way
const findFibonacci2 = (n, store) => {
    if (n === 1) return store[1];
    else if (n === 2) return store[2];

    if (store[n] !== undefined) return store[n];

    store[n] = findFibonacci2(n - 1, store) + findFibonacci2(n - 2, store);
    return store[n];
}

// Execution part
findFibonacci(10);
console.log();
console.log(findFibonacci2(10, { '1': 0, '2': 1 }));
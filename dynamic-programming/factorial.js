// 3 -> [1, 2, 6]
// 5 -> [1, 2, 6, 24, 120]

const fact = (n) => {
    const arr = new Array(n);
    calculate(n, arr);
    return arr;
}

const calculate = (n, arr) => {
    if(n === 1) 
        return 1;
    else 
        return n * calculate(n - 1, arr);
}

console.log(fact(3));
console.log(fact(5))



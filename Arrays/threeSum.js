const arr = [12, 3, 1, 2, -6, 5, -8, 6];

const generateStr = (num1, num2) => `${num1},${num2}`

const getNumFromStr = (str) => str.split(',').map(s => parseInt(s))

const containsIndex = (str, idx) => getNumFromStr(str).includes(idx)

const sortIndex = (str) => getNumFromStr(str).sort((a, b) => a-b);

const obj = {};
const indexes = {};

for(let i = 0; i < arr.length - 1; i++) {
    for(let j = i + 1; j < arr.length; j++) {
        obj[`${arr[i] + arr[j]}`] = generateStr(i, j);
    }
}

for(let i = 0; i < arr.length; i++) {    
    const exists = obj[`${-arr[i]}`];
    if(exists && !containsIndex(exists, i)) {
        indexes[sortIndex(`${i},${exists}`)] = true
    }
}

console.log(Object.keys(indexes));
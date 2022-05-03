const { Heap } = require("../HeapUsingArray");
const LinkedList = require('linkedlist');

const arr = [
    [3, 6, 8, 10, 15],
    [1, 5, 12],
    [4, 8, 15, 16],
    [2, 6]
];

const getMappingsIndex = (mappings, key) => {
    return mappings[key].current;
}

const setMappings = (mappings, key, value) => {
    if(!(key in mappings)) {
        let l1 = new LinkedList();
        mappings[key] = l1;   
    }
    mappings[key].push(value);
}

const deleteMapping = (mappings, key) => {
    mappings[key].shift();
}

const findSmallestRange = (arr) => {
    let curIndexArr = new Array(arr.length).fill(0);
    let smallest = [0, Number.MAX_SAFE_INTEGER - 1];
    let max = Number.MIN_SAFE_INTEGER;
    let mappings = {};

    let h1 = new Heap();
    h1.setToMin();

    let k = 0;
    while(k < arr.length) {
        max = (max < arr[k][0]) ? arr[k][0] : max;
        h1.insert(arr[k][0]);
        setMappings(mappings, [arr[k][0]], k);
        k++;
    }

    while(h1.size() > 0) {
        let min = h1.getIndex(0);
        if((max - min + 1) < (smallest[1] - smallest[0] + 1)) {
            smallest[0] = min;
            smallest[1] = max;
        }
        
        let idx = getMappingsIndex(mappings, min);
        deleteMapping(mappings, min);
        curIndexArr[idx]++;

        if(curIndexArr[idx] >= arr[idx].length) {
            h1.pop();
            break;
        } else {
            max = max < arr[idx][curIndexArr[idx]] ? arr[idx][curIndexArr[idx]] : max;
            h1.setIndex(0, arr[idx][curIndexArr[idx]]);
            h1.heapifyNode(0);
            setMappings(mappings, arr[idx][curIndexArr[idx]], idx);
        }
    }

    return smallest;
}

console.log(findSmallestRange(arr));
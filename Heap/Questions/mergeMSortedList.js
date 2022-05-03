const { Heap } = require('../HeapUsingArray');
let c = 0;

const mergeList = (arr) => {
    let ptr = new Array(arr.length).fill(0);
    let linkedList = [];
    let h1 = new Heap();
    h1.setToMin();
    let mapping = {};

    for(let i = 0; i < arr.length; i++) {
        h1.insert(arr[i][ptr[i]]);
        mapping[arr[i][ptr[i]]] = i;
    }

    while(Object.keys(mapping).length > 0) {
        c++;
        let max = h1.getIndex(0);
        linkedList.push(max);
        let idx = mapping[max];
        delete mapping[max];
        ptr[idx]++;

        if(ptr[idx] >= arr[idx].length) {
            h1.pop();
        } else {
            h1.setIndex(0, arr[idx][ptr[idx]]);
            mapping[arr[idx][ptr[idx]]] = idx;
            h1.heapifyNode(0);
        }
    }

    console.log('Sorted arr', linkedList, c);
}

let arr = [
    [15, 25, 35],
    [10, 20, 30, 40],
    [32, 33],
    [27, 29,37, 48, 93],
    [1, 2, 3, 4, 5],
    [78, 79, 80, 81, 82, 83, 84, 94]
];
mergeList(arr);
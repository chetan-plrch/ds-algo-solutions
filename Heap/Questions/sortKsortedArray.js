const { Heap } = require('../HeapUsingArray');

const sortKSorted = (arr, k) => {
    let sorted = new Array(arr.length);
    let cur = 0;
    let h1 = new Heap();
    let ptr = 0;
    h1.setToMin();

    while(cur < k) {
        h1.insert(arr[cur]);
        cur++;
    }

    cur = k;
    while(cur < arr.length) {
        sorted[ptr++] = h1.getIndex(0);
        h1.setIndex(0, arr[cur]);
        h1.heapifyNode(0);
        cur++;
    }

    cur = k;
    while(cur > 0) {
        sorted[ptr++] = h1.getIndex(0);
        h1.setIndex(0, Number.MAX_SAFE_INTEGER);
        h1.heapifyNode(0);
        cur--;
    }

    console.log('Sorted array', sorted);
}

let arr = [90, 9, 5, 95, 190, 20, 120, 31, 32];
let k = 5;

sortKSorted(arr, k);
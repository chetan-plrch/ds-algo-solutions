const { Heap } = require('../HeapUsingArray');

const findSmallest = (arr, k) => {
    let cur = 0;
    let h1 = new Heap();
    h1.setToMax();

    while(cur < k) {
        h1.insert(arr[cur]);
        cur++;
    }

    while(cur < arr.length) {
        if(arr[cur] < h1.getIndex(0)) {
            h1.setIndex(0, arr[cur]);
            h1.heapifyNode(0);
        }
        cur++;
    }

    h1.print();
}

let arr = [19, 8, 7, 90, 45, 13, 1, 5, 89, 12, 180, 65];
let k = 6;

findSmallest(arr, k);
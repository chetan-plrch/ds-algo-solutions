const { Heap } = require("../HeapUsingArray");

const findLargest = (arr, k) => {
    let h1 = new Heap();
    h1.setToMin();
    let cur = 0;
    while(cur < k) {
        h1.insert(arr[cur]);
        cur++;
    }
    h1.print();

    while(cur < arr.length) {
        if(arr[cur] > h1.getIndex(0)){
            h1.setIndex(0, arr[cur]);
            h1.heapifyNode(0);
        }
        cur++;
    }
    h1.print();
}

let arr = [1, 7, 19, 3, 9, 4, 6, 2];
let k = 3;
findLargest(arr, k);
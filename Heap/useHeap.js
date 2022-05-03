const { getRandomInt } = require("../../utils/utility");
const { Heap } = require("./HeapUsingArray");
const { HeapTree } = require("./HeapUsingTreeNodes");

const useHeap = () => {
    // let h = new Heap();
    // h.insert(87);
    // h.insert(5);
    // h.insert(0);
    // h.insert(1999);
    // h.insert(30);
    // h.insert(11);
    // h.insert(100);
    // h.insert(109);
    // h.insert(400);
    // h.insert(150);
    // h.print();

    // h.delete();
    // h.print();

    // h.delete();
    // h.print();

    // h.delete();
    // h.print();

    // h.delete();
    // h.print();

    // h.insert(5000);
    // h.print();

    // h.heapSort();
    // h.print();
    // h.printSorted();

    let items = new Array(15).fill(0).map(() => getRandomInt(1, 100));
    // let h1 = new Heap();
    // h1.size();
    // h1.print();
    // h1.heapify();
    // h1.print();
    // console.log('Count', h1.c);
    // h1.heapSort();
    // h1.printSorted();

    let h2 = new Heap([
        91, 77, 89, 73, 74, 84,
        80, 51, 57, 71, 21, 18,
        25,  4, 57
    ]);
    // items.forEach((it) => h2.insert(it));
    h2.heapify();
    h2.print();
    h2.heapSort();
    h2.print();
    h2.checkSorted();
    // h2.convertToMaxHeap();
    // h2.heapSort();
    // h2.printSorted();
    // console.log(h2.traverseLevelOrder(true));

    // let tree = h2.convertToTreeUsingLevelOrder();
    // console.log(tree);

    // let h3 = new HeapTree(tree, h2.size());
    // console.log(h3.tree, h3.size()); 
    // console.log(h3.convertToArray());
    // h3.traverseInOrder();
    // h3.traversePostOrder();
}

useHeap();
const { BinaryTree } = require("../../Datastructure/BinaryTree");

class MaxHeap {
    constructor() {
        console.log('Max heap created');
    }
}

class MinHeap {
    constructor() {
        console.log('Min heap created');
    }
}

// Functionality / Features supported for these class
/**
 * Points to note:
 * 1. Heap must contain homogenous data
 * 
 * insertH(item) - inserts an item in the heap, complexeity = logn
 * delete(item) - deletes a specific item from the heap
 * heapify() - converts a normal tree with random items into heap.
 * peek() - read the top / root element in the heap
 * pop() - remove the top / root element from the heap
 */

 /**
  * How to insert elements into heap.
  * 
  */

const b1 = new BinaryTree();
[6, 7, 8, 9, 2, 87, 12, 56, 34, 12, 75, 100, 2].forEach((item) => {
    b1.insert(item);
})

b1.printArray();

module.exports = {
    MinHeap,
    MaxHeap
};
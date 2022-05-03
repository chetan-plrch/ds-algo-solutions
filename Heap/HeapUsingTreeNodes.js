const { getParentIndex, type, getLeftChildIndex, getRightChildIndex, isEmpty, nodesAtHeight, TreeNode } = require("../../utils/utility");

class HeapTree {
    heap = null;
    sorted = null;
    end = -1;
    type = type.MAX;
    c = 0;
    tree = null;

    constructor(r = null, l = null, t = type.MAX) {
        this.tree = r;
        this.end = l - 1;
        this.type = t;
    }

    getSortedArray() {
        return this.sorted;
    }

    size() {
        return this.end + 1;
    }

    swapNodeValue(n1, n2) {
        let t = n1.val;
        n1.val = n2.val;
        n2.val = t;
    }

    convertToArray() {
        if(this.size() <= 0) {
            console.log('\n The heap is already empty \n');
            return;
        }

        let toProcess = 1;
        let counter = 0;
        this.heap = new Array(this.size());
        this.heap[0] = this.tree;
        while(toProcess > 0) {
            let l = this.heap[counter].left;
            let r = this.heap[counter].right;
            this.heap[counter] = this.heap[counter].val;
            toProcess--;

            if(!isEmpty(l)) {
                this.heap[getLeftChildIndex(counter)] = l;
                toProcess++;
            }

            if(!isEmpty(r)) {
                this.heap[getRightChildIndex(counter)] = r;
                toProcess++;
            }

            counter++;
        }

        return this.heap;
    }

    insert(val) {
        console.log('\n To be implemented \n');
    }

    siftDown(nIdx) {
        console.log('\n To be implemented \n');
    }

    delete() {
        console.log('\n To be implemented \n');
    }

    heapSort() {
        console.log('\n To be implemented \n');
    }

    heapifyNode(nIdx) {
        console.log('\n To be implemented \n');
    }

    heapify() {
        console.log('\n To be implemented \n');
    }

    traverseLevelOrder(print) {
        console.log('\n To be implemented \n');
    }

    print() {
        console.log('\n To be implemented \n');
        console.log('Heap size: ', this.size(), '\n');
    }

    printSorted() {
        console.log('\nHeap sorted: ', this.sorted, this.heap.length, '\n');
    }

    checkSorted() {
        for(let i = 0, j = 1; i < this.sorted.length - 1; i++, j++) {
            if(this.sorted[i] > this.sorted[j]) {
                console.log('Not sorted !!');
                return;
            }
        }
        console.log('Sorted !!');
    }

    convertToArrayUsingLevelOrder() {
        console.log('\n To be implemented \n');
    }

    traverseInOrder() {
        let root = this.tree;
        this.inOrder(root);
    }

    inOrder(node) {
        console.log(node.val);
        if(node.left) {
            this.inOrder(node.left);
        }

        if(node.right) {
            this.inOrder(node.right);
        }
    }

    traversePostOrder() {
        let root = this.tree;
        this.postOrder(root);
    }

    postOrder(node) {
        if(node.left) {
            this.postOrder(node.left);
        }

        if(node.right) {
            this.postOrder(node.right);
        }

        console.log(node.val);
    }

    traversePreOrder() {
        let root = this.tree;
        pre.postOrder(root);
    }

    preOrder(node) {
        if(node.left) {
            pre.postOrder(node.left);
        }

        console.log(node.val);

        if(node.right) {
            pre.postOrder(node.right);
        }
    }

    convertToArrayUsingInOrder() {
        console.log('To be implemented');
    }

    convertToArrayUsingPreOrder() {
        console.log('To be implemented');
    }

    convertToArrayUsingPostOrder() {
        console.log('To be implemented');
    }

    convertToMinHeap() {
        console.log('To be implemented');
    }

    convertToMaxHeap() {
        console.log('To be implemented');
    }
}

module.exports = {
    HeapTree,
}

// a. Construct a heap from set of inputs.
// b. Parse the tree
//     a. In-order traversal
//     b. Post-order traversal
//     c. Pre-order traversal
//     d. Level order traversal.
// c. Implement for heap
//     a. Insert
//     b. Delete
//     c. Heap sort
//     d. Heapify
// d. Convert a tree to Heap from array.
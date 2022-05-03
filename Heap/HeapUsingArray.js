const { getParentIndex, type, getLeftChildIndex, getRightChildIndex, isEmpty, nodesAtHeight, TreeNode, getTreeHeightByNodes } = require("../../utils/utility");

class Heap {
    heap = new Array(100).fill(null);
    end = -1;
    type = type.MAX;
    c = 0;
    tree = null;

    constructor(r = [], t) {
        this.heap = r.length === 0 ? new Array(100).fill(null) : r;
        this.end = r.length - 1;
        this.type = t ? type.MIN : type.MAX;
    }

    setToMin() {
        this.type = type.MIN;
    }

    setToMax() {
        this.type = type.MAX;
    }

    setIndex(i, val) {
        this.heap[i] = val;
    }

    getValueAtIndex(i) {
        if(i > this.end) return null;
        return this.heap[i];
    }

    size() {
        return this.end + 1;
    }

    swapNodeValue(idx1, idx2) {
        let t = this.getValueAtIndex(idx1);
        this.setIndex(idx1, this.getValueAtIndex(idx2));
        this.setIndex(idx2, t);
    }

    insert(val) {
        if(this.end < 100) {
            console.log('\nInsert executed!!\n');
            this.setIndex(++this.end, val);

            let cur = this.end;
            let p = getParentIndex(cur);
            if(this.type === type.MAX) {
                while(!isEmpty(p) && this.getValueAtIndex(p) < this.getValueAtIndex(cur)) {
                    this.swapNodeValue(p, cur);
                    cur = p;
                    p = getParentIndex(cur);
                }
            } else {
                while(!isEmpty(p) && this.getValueAtIndex(p) > this.getValueAtIndex(cur)) {
                    this.swapNodeValue(p, cur);
                    cur = p;
                    p = getParentIndex(cur);
                }
            }
        } else {
            console.log('\nHeap is full\n');
        }
    }

    pop() {
        if(this.end < 0) {
            console.log('\nThe heap is already empty!!\n');
            return null;
        } else {
            console.log('\nDelete executed!!\n');
            let r = this.getValueAtIndex(0);
            if(this.end === 0) {
                this.setIndex(0, null);
            } else {
                this.setIndex(0, this.getValueAtIndex(this.end));
                this.setIndex(this.end, null);
                this.heapifyNode(0);
            }
            --this.end;
            return r;
        }
    }

    heapSort() {
        let cur = this.end;
        while(this.end >= 0) {
            let val = this.pop();
            this.setIndex(cur--, val);
        }
    }

    heapifyNode(nIdx) {
        if(this.type === type.MIN) {
            this.minHeapifyNode(nIdx);
        } else {
            this.maxHeapifyNode(nIdx);
        }
    }

    minHeapifyNode(nIdx) {
        let l = getLeftChildIndex(nIdx);
        let r = getRightChildIndex(nIdx);
        let smallest = nIdx;
        if(!isEmpty(this.getValueAtIndex(l)) && (this.getValueAtIndex(l) < this.getValueAtIndex(nIdx))) {
            smallest = l;
        }

        if(!isEmpty(this.getValueAtIndex(r)) && (this.getValueAtIndex(r) < this.getValueAtIndex(smallest))) {
            smallest = r;
        }

        if(smallest !== nIdx) {
            this.swapNodeValue(nIdx, smallest);
            this.minHeapifyNode(smallest);
        }
    }

    maxHeapifyNode(nIdx) {
        let l = getLeftChildIndex(nIdx);
        let r = getRightChildIndex(nIdx);
        let largest = nIdx;
        if(!isEmpty(this.getValueAtIndex(l)) && (this.getValueAtIndex(l) > this.getValueAtIndex(nIdx))) {
            largest = l;
        }

        if(!isEmpty(this.getValueAtIndex(l)) && (this.getValueAtIndex(r) > this.getValueAtIndex(largest))) {
            largest = r;
        }

        if(largest !== nIdx) {
            this.swapNodeValue(nIdx, largest);
            this.maxHeapifyNode(largest);
        }
    }

    heapify() {
        let h = getTreeHeightByNodes(this.size());
        let i = nodesAtHeight(h-1) - 1;
        while(i >= 0) {
            this.heapifyNode(i);
            i--;
        }
    }

    traverseLevelOrder(print) {
        if(this.size() <= 0) {
            console.log('\nThe heap is already empty!!\n');
            return;
        }

        const h = getTreeHeightByNodes(this.size());
        let level = new Array(h).fill(0); 
        let fill = -1;
        let cur = 0;
        for(let i = 0; i < h; i++) {
            let l = '';
            while(cur < nodesAtHeight(i + 1) && cur < this.size()) {
                l = l + ' ' + this.getValueAtIndex(cur++);
            }
            if(print) console.log(l);
            level[++fill] = l.trim().split(' ').map(it => Number(it));
        }
        return level;
    }

    print() {
        console.log('\nHeap: ', this.heap);
        console.log('Heap size: ', this.size(), '\n');
    }

    checkSorted() {
        for(let i = 0, j = 1; i < this.size() - 1; i++, j++) {
            let notSorted = this.type === type.MIN ? 
                this.heap[i] > this.heap[j] : this.heap[i] < this.heap[j];
            if(notSorted) {
                console.log('Not sorted !!');
                return;
            }
        }
        console.log('Sorted !!');
    }

    convertToTreeUsingLevelOrder() {
        if(this.size() <= 0) {
            console.log('\nThe heap is already empty!!\n');
            return;
        }

        let levels = this.traverseLevelOrder();
        for(let i = 0; i < levels.length; i++) {
            for(let j = 0; j < levels[i].length; j++) {
                levels[i][j] = new TreeNode(levels[i][j]);
            }
        }

        for(let i = 0; i < levels.length - 1; i++) {
            for(let j = 0; j < levels[i].length; j++) {
                levels[i][j].left = levels[i+1][(j * 2)];
                levels[i][j].right = levels[i+1][(j * 2) + 1];
            }
        }

        return levels[0][0];
    }

    traverseInOrder() {
        console.log('To be implemented');
    }

    traversePostOrder() {
        console.log('To be implemented');
    }

    traversePreOrder() {
        console.log('To be implemented');
    }

    convertToTreeUsingInOrder() {
        console.log('To be implemented');
    }

    convertToTreeUsingPreOrder() {
        console.log('To be implemented');
    }

    convertToTreeUsingPostOrder() {
        console.log('To be implemented');
    }

    convertToMinHeap() {
        this.type = type.MIN;
        this.heapify();
    }

    convertToMaxHeap() {
        this.type = type.MAX;
        this.heapify();
    }
}

module.exports = {
    Heap,
}

// a. Construct a heap from set of inputs.
// b. Parse the tree.
//     a. In-order traversal
//     b. Post-order traversal
//     c. Pre-order traversal
//     d. Level order traversal.
// c. Implement for heap array.
//     a. Insert
//     b. Delete
//     c. Heap sort
//     d. Heapify
// d. Convert a tree to Heap from array.
// e. Convert heap array into a tree.
// f. Convert a max heap to a min heap.
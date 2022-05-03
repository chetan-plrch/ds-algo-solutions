const { getRightChildIndex, getLeftChildIndex } = require("../../utils/utility");
const data = [11, 2, 9, 13, 57, 25, 1, 1, 90, 3];

class BinarySearchTree {
    tree = null;
    size = 0;
    constructor(length = 10) {
        this.tree = new Array(length).fill(-1);
    }

    insert(root = 0, val) {
        if(this.size === 0) {
            this.tree[root] = val;
            this.size++;
        } else if(val > this.tree[root]) {
            if(this.tree[getRightChildIndex(root)] === -1) {
                this.tree[getRightChildIndex(root)] = val;
                this.size++;
            } else {
                this.insert(getRightChildIndex(root), val);
            }
        } else {
            if(this.tree[getLeftChildIndex(root)] === -1) {
                this.tree[getLeftChildIndex(root)] = val;
                this.size++;
            } else {
                this.insert(getLeftChildIndex(root), val);
            }
        }
    }

    delete() {
        // Leaf node - to be deleted

        // Node with 1 child

        // Node with 2 child
    }

    printTree() {
        console.log(this.tree);
        let c = 0;
        let str = ''
        for(let i = 0; i < this.tree.length; i++) {
            let j = 0;
            while(j < Math.pow(2, c)) {
                str = str + this.tree[j + i] + ', ';
                j++;
            }
            str = str + '\n';
            i = i + Math.pow(2, c) - 1;
            c++;
        }
        console.log(str);
    }
}

let b1 = new BinarySearchTree(31);
data.forEach(v => b1.insert(0, v));
b1.printTree();


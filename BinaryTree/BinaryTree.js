const chalk = require('chalk');
const { Stack } = require('../StacksandQueues/dynamicStackImplementationUsingArray');
const {  getParentIndex, isLeftChild, isRightChild } = require('../utility/binaryTree')

class BinaryTreeNode {
    val = null;
    left = null;
    right = null;

    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class BinaryTree {
    store = null;

    constructor(capacity) {
        this.store = new Stack(capacity);
    }

    insert(val) {
        let node = new BinaryTreeNode(val);
        this.store.push(node);

        if(this.store.size() > 1) {
            let parentIndex = getParentIndex(this.store.size() - 1);
            let parent = this.store.getValueAtIndex(parentIndex);

            if(!parent.left) {
                parent.left = node;
            } else if(!parent.right) {
                parent.right = node;
            }
        }
    }

    traversePreOrder() {
        const root = this.store.bottom();
        this.preOrder(root);
    }

    preOrder(root) {
        if(root) {
            console.log(chalk.greenBright(root.val));
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    traverseInOrder() {
        const root = this.store.bottom();
        this.inOrder(root);
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(chalk.greenBright(root.val));
            this.inOrder(root.right);
        }
    }

    traversePostOrder() {
        const root = this.store.bottom();
        this.postOrder(root);
    }

    postOrder(root) {
        if(root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(chalk.greenBright(root.val));
        }
    }

    traverseLevelOrder() {
        let root = this.store.bottom();
        let count = 0;
        let fact = 0;
        const q = new Queue();
        q.enqueue(root);
        while(!q.isEmpty()) {
            const nodeToUse = q.dequeue();
            console.log(chalk.greenBright(nodeToUse.val));
            
            if(nodeToUse.left)
                q.enqueue(nodeToUse.left);

            if(nodeToUse.right)
                q.enqueue(nodeToUse.right);

            if(count === fact) {
                fact = fact === 0 ? 2 : fact * 2;
                count = 0;
                console.log();
            }
            count++;
        }
    }

    traverseVerticalOrder() {
        let m = new Map();
        let result = [];
        m.set('max', Number.MIN_SAFE_INTEGER);
        m.set('min', Number.MAX_VALUE);
        this.verticalOrder(this.store.bottom(), 0, m);

        for(let i = m.get('min'); i <= m.get('max'); i++) {
            result.push(m.get(i).split('.').sort((a, b) => a - b));
        }

        console.log('r', result);
    }

    verticalOrder(root, order, m) {
        if(root) {
            if(m.has(order)) {
                m.set(order, (m.get(order) + '.' + root.val));
            } else {
                m.set(order, '' + root.val);
            }

            if(order > m.get('max'))
                m.set('max', order);

            if(order < m.get('min'))
                m.set('min', order);

            if(root.left !== null)
                this.verticalOrder(root.left, order - 1, m);

            if(root.right !== null)
                this.verticalOrder(root.right, order + 1, m);
        }
        return m;
    }

    getBothChildByParentIndex(pIdx) {
        return [this.getLeftChildByParentIndex(pIdx), this.getRightChildByParentIndex(pIdx)]
    }

    getLeftChildByParentIndex(pIdx) {
        if(this.store.getValueAtIndex(pIdx))
            return this.store.getValueAtIndex(pIdx).left;
    }

    getRightChildByParentIndex(pIdx) {
        if(this.store.getValueAtIndex(pIdx))
            return this.store.getValueAtIndex(pIdx).right;
    }

    getParentNodeByChildIndex(cIdx) {
        return this.store.getValueAtIndex(getParentIndex(cIdx));
    }

    getValueAtIndex(idx) {
        return this.store.getValueAtIndex(idx);
    }

    setValueAtIndex(cIdx, val) {
        const parent = this.getParentNodeByChildIndex(cIdx);
        if(isLeftChild(cIdx)) {
            parent.left = val;
        } else if(isRightChild(cIdx)) {
            parent.right = val;
        }

        return this.store.setValueAtIndex(cIdx, val);
    }

    print() {
        this.store.print();
    }
}

module.exports = {
    BinaryTree,
    BinaryTreeNode
};
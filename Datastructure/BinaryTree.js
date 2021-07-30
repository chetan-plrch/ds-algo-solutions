const chalk = require('chalk');
const { Stack } = require('../Datastructure/dynamicStackImplementationUsingArray');
const { getParentIndex, isLeftChild, isRightChild } = require('../utility/binaryTree');
const { Queue } = require('./dynamicQueueImplementationUsingArray');

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
    treeStack = null;

    constructor(capacity) {
        this.treeStack = new Stack(capacity);
    }

    getRootNode() {
        return this.treeStack.bottom();
    }

    toArray() {
        return this.treeStack.toArray();
    }

    insert(val) {
        let node = new BinaryTreeNode(val);
        this.treeStack.push(node);

        if (this.treeStack.size() > 1) {
            let parentIndex = getParentIndex(this.treeStack.size() - 1);
            let parent = this.treeStack.getValueAtIndex(parentIndex);

            if (!parent.left) {
                parent.left = node;
            } else if (!parent.right) {
                parent.right = node;
            }
        }
    }

    traversePreOrder() {
        const root = this.treeStack.bottom();
        this.preOrder(root);
    }

    preOrder(root) {
        if (root) {
            console.log(chalk.greenBright(root.val));
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    traverseInOrder() {
        const root = this.treeStack.bottom();
        this.inOrder(root);
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(chalk.greenBright(root.val));
            this.inOrder(root.right);
        }
    }

    traversePostOrder() {
        const root = this.treeStack.bottom();
        this.postOrder(root);
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(chalk.greenBright(root.val));
        }
    }

    traverseLevelOrder() {
        let root = this.treeStack.bottom();
        let q = new Queue();
        q.enqueue(root);

        let nextNodes = 0;
        let currentNodes = 1;

        while (!q.isEmpty()) {
            const node = q.dequeue();
            console.log(node.val);
            
            currentNodes--;

            if (node.left) {
                q.enqueue(node.left);
                nextNodes++;
            }

            if (node.right) {
                q.enqueue(node.right);
                nextNodes++;
            }

            if (currentNodes === 0) {
                currentNodes = nextNodes;
                nextNodes = 0;
                console.log();
            }
        }
    }

    traverseVerticalOrder() {
        let m = new Map();
        let result = [];
        m.set('max', Number.MIN_SAFE_INTEGER);
        m.set('min', Number.MAX_VALUE);
        this.verticalOrder(this.treeStack.bottom(), 0, m);

        for (let i = m.get('min'); i <= m.get('max'); i++) {
            result.push(m.get(i).split('.').sort((a, b) => a - b));
        }

        console.log('r', result);
    }

    verticalOrder(root, order, m) {
        if (root) {
            if (m.has(order)) {
                m.set(order, (m.get(order) + '.' + root.val));
            } else {
                m.set(order, '' + root.val);
            }

            if (order > m.get('max'))
                m.set('max', order);

            if (order < m.get('min'))
                m.set('min', order);

            if (root.left !== null)
                this.verticalOrder(root.left, order - 1, m);

            if (root.right !== null)
                this.verticalOrder(root.right, order + 1, m);
        }
        return m;
    }

    getBothChildByParentIndex(pIdx) {
        return [this.getLeftChildByParentIndex(pIdx), this.getRightChildByParentIndex(pIdx)]
    }

    getLeftChildByParentIndex(pIdx) {
        if (this.treeStack.getValueAtIndex(pIdx))
            return this.treeStack.getValueAtIndex(pIdx).left;
    }

    getRightChildByParentIndex(pIdx) {
        if (this.treeStack.getValueAtIndex(pIdx))
            return this.treeStack.getValueAtIndex(pIdx).right;
    }

    getParentNodeByChildIndex(cIdx) {
        return this.treeStack.getValueAtIndex(getParentIndex(cIdx));
    }

    getValueAtIndex(idx) {
        return this.treeStack.getValueAtIndex(idx);
    }

    setValueAtIndex(cIdx, val) {
        const parent = this.getParentNodeByChildIndex(cIdx);
        if (isLeftChild(cIdx)) {
            if (val === undefined) {
                parent.left = undefined;
            } else {
                let node = parent.left;
                let newNode = new BinaryTreeNode(val, node.left, node.right);
                parent.left = newNode;
            }
        } else if (isRightChild(cIdx)) {
            if (val === undefined) {
                parent.right = undefined;
            } else {
                let node = parent.right;
                let newNode = new BinaryTreeNode(val, node.left, node.right);
                parent.right = newNode;
            }
        }

        return this.treeStack.setValueAtIndex(cIdx, val);
    }

    getPreorderOrder(root, arr = []) {
        if (root) {
            arr.push(root.val);
            this.getPreorderOrder(root.left, arr);
            this.getPreorderOrder(root.right, arr);
        }
        return arr;
    }

    getInorderOrder(root, arr = []) {
        if (root) {
            this.getInorderOrder(root.left, arr);
            arr.push(root.val);
            this.getInorderOrder(root.right, arr);
        }
        return arr;
    }

    getPostorderOrder(root, arr = []) {
        if (root) {
            this.getPostorderOrder(root.left, arr);
            this.getPostorderOrder(root.right, arr);
            arr.push(root.val);
        }
        return arr;
    }

    print() {
        this.treeStack.print();
    }

    printArray() {
        this.treeStack.print();
    }
}

module.exports = {
    BinaryTree,
    BinaryTreeNode
};
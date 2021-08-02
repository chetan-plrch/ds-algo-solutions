const chalk = require('chalk');
const { Queue } = require('./dynamicQueueImplementationUsingArray');
const { BinaryTree, BinaryTreeNode } = require('./BinaryTree');

// insert(key: T, value: U): BinarySearchTreeNode<T, U>;
// has(key: T): boolean;
// find(key: T): BinarySearchTreeNode<T, U>;
// max(node?: BinarySearchTreeNode<T, U>): BinarySearchTreeNode<T, U>;
// min(node?: BinarySearchTreeNode<T, U>): BinarySearchTreeNode<T, U>;
// lowerBound(k: T, node?: BinarySearchTreeNode<T, U>): BinarySearchTreeNode<T, U>;
// upperBound(k: T, node?: BinarySearchTreeNode<T, U>): BinarySearchTreeNode<T, U>;
// root(): BinarySearchTreeNode<T, U>;
// count(): number;
// remove(k: T): boolean;
// traverseInOrder(cb: (node: BinarySearchTreeNode<T, U>) => void): void;
// traversePreOrder(cb: (node: BinarySearchTreeNode<T, U>) => void): void;
// traversePostOrder(cb: (node: BinarySearchTreeNode<T, U>) => void): void;
// clear(): void;

class BinarySearchTree extends BinaryTree {
    constructor(capacity) {
        super(capacity);
    }

    insert(val) {
        let root = this.treeStack.bottom();
        while (root) {
            if (val >= root.val) {
                if (root.right) {
                    root = root.right;
                } else {
                    root.right = new BinaryTreeNode(val);
                    root = null;
                }
            } else {
                if (root.left) {
                    root = root.left;
                } else {
                    root.left = new BinaryTreeNode(val);
                    root = null;
                }
            }
        }
    }

    search(val) {
        let root = this.store.bottom();
        while (root) {
            if (root.val === val) {
                return root;
            }

            if (val >= root.val) {
                root = root.right;
            } else {
                root = root.left;
            }
        }
    }

    delete() {

    }

    max() { }
    min() { }
    lowerBound() { }
    upperBound() { }
}

module.exports = {
    BinarySearchTree
}
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
    insert(val) {
        let root = this.store.bottom();
        if(root === undefined) {
            this.store.push(new BinaryTreeNode(val));
        } else {
            while(root) {
                if(val >= root.val) {
                    if(root.right === null) {
                        root.right = new BinaryTreeNode(val);
                        break;
                    } else {
                        root = root.right;
                    }
                } else {
                    if(root.left === null) {
                        root.left = new BinaryTreeNode(val);
                        break;
                    } else {
                        root = root.left;
                    }
                }
            }
        }
    }

    search(val) {
        let root = this.store.bottom();
        while(root) {
            if(root.val === val) {
                return root;
            }

            if(val >= root.val) {
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
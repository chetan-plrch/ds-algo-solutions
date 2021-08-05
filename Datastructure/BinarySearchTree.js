const chalk = require('chalk');
const { Queue } = require('./dynamicQueueImplementationUsingArray');
const { BinaryTree, BinaryTreeNode } = require('./BinaryTree');
const binaryTree = require('../utility/binaryTree');

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
        if (this.size() === 0) {
            this.treeStack.push(new BinaryTreeNode(val));
        } else {
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
    }

    search(val) {
        let root = this.treeStack.bottom();
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

    /**
     * 1. Leaf node
     *      Straight forward deletion
     * 2. Non-Leaf node
     *      a. Without Left node or Right node
     *          Parent to contain child of child
     *      b. With bothe nodes
     *          a. Take left max
     *              or
     *          b. Take right min
     */
    delete(root, val) {
        if(root) {
            if(root.val === val) {
                // Match with root
                if(binaryTree.isLeafNode(root)) {
                    // Node to be deleted is leaf node
                    return [true, null];
                } else if(binaryTree.hasOneChild(root)) {
                    // Node with one child
                    if(root.left)
                        return [true, root.left];
                    else if(root.right)
                        return [true, root.right];
                } else {
                    // Node with two children
                    // TODO: Implement delete for Node with two child   
                }
            } else {
                // No match
                const [lRemove, lNodeToReplaceWith] = this.delete(root.left, val);
                const [rRemove, rNodeToReplaceWith] = this.delete(root.right, val);

                if (lRemove)
                    root.left = lNodeToReplaceWith;
                
                if (rRemove)
                    root.right = rNodeToReplaceWith;
            }
        }
        return [false, null];
    }

    removeLeafNode(root, val) {
        if(root) {
            if(binaryTree.isLeafNode(root) && (root.val === val)) {
                return true;
            }

            const lToRemove = this.removeLeafNode(root.left, val);
            const rToRemove = this.removeLeafNode(root.right, val);

            if(lToRemove)
                root.left = null;
            else if(rToRemove)
                root.right = null;
        }
    }

    findMin(root, min) {
        if(root) {
            let newMin = min;
            if(Math.min(root.val, min.val) === root.val)
                newMin = root;

            let lMin = this.findMin(root.left, newMin);
            let rMin = this.findMin(root.right, newMin);

            if(!lMin)
                lMin = { val: Number.MAX_SAFE_INTEGER };

            if(!rMin)
                rMin = { val: Number.MAX_SAFE_INTEGER };

            if(binaryTree.isLeafNode(root))
                return root;
            else {
                newMin = Math.min(Math.min(root.val, lMin.val), rMin.val);
                if(newMin === root.val)
                    return root;
                else if(newMin === lMin.val)
                    return lMin;
                else if(newMin === rMin.val)
                    return rMin;
            }
        }
        return null;
    }

    max() {
        let root = this.treeStack.bottom();
        let max = { val: Number.MIN_SAFE_INTEGER };
        while (root) {
            if (root.val > max.val) {
                max = root;
                root = root.right;
            }
        }
        return max;
    }

    min() {
        let root = this.treeStack.bottom();
        let min = { val: Number.MAX_SAFE_INTEGER };
        while (root) {
            if (root.val < min.val) {
                min = root;
                root = root.left;
            }
        }
        return min;
    }

    lowerBound() { }
    upperBound() { }
}

module.exports = {
    BinarySearchTree
}
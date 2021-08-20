const { BinaryTree, BinaryTreeNode } = require('../../Datastructure/BinaryTree');
const { Queue } = require('../../Datastructure/dynamicQueueImplementationUsingArray');
const Examples = require('../../utility/examples');

const constructBST = (preOrder) => {
    const q = new Queue();
    preOrder.forEach((el) => q.enqueue(el));

    return construct(q.peek(), Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, q);
}

const construct = (ele, min, max, q) => {
    if(ele) {
        let node = null;
        if((ele > min) && (ele <= max)) {
            node = new BinaryTreeNode(q.dequeue());

            node.left = construct(q.peek(), min, Math.min(node.val, max), q);
            node.right = construct(q.peek(), Math.max(min, node.val), max, q);
        }
        return node;
    }
    return null;
}

const traversal = new Examples().getTraversal(4);

const bTreeRoot = constructBST(traversal.preOrder);

const bTree = new BinaryTree(100);
bTree.setRootNode(bTreeRoot);

bTree.traversePostOrder();
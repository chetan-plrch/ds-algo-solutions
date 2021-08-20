const { BinaryTree, BinaryTreeNode } = require('../../Datastructure/BinaryTree');
const { Queue } = require('../../Datastructure/dynamicQueueImplementationUsingArray');
const Examples = require('../../utility/examples');

const constructBST = (postOrder) => {
    const q = new Queue();
    postOrder.forEach((el, idx) => q.enqueue(postOrder[postOrder.length - idx - 1]));

    return construct(q.peek(), Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER, q);
}

const construct = (ele, min, max, q) => {
    if(ele) {
        let node = null;
        if((ele > min) && (ele <= max)) {
            node = new BinaryTreeNode(q.dequeue());

            node.right = construct(q.peek(), Math.max(min, node.val), max, q);
            node.left = construct(q.peek(), min, Math.min(node.val, max), q);
        }
        return node;
    }
    return null;
}

const traversal = new Examples().getTraversal(4);

const bTreeRoot = constructBST(traversal.postOrder);

const bTree = new BinaryTree(100);
bTree.setRootNode(bTreeRoot);

bTree.traverseLevelOrder();
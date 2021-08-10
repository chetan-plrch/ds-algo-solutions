const { BinaryTree, BinaryTreeNode } = require("../../Datastructure/BinaryTree");
const { Queue } = require("../../Datastructure/dynamicQueueImplementationUsingArray");
const Examples = require("../../utility/examples");

class NodeTrack {
    constructor(node, min, max) {
        this.node = node;
        this.min = min;
        this.max = max;
    }
}

const construct = (levelOrder) => {
    let curIndex = 0;

    const root = new BinaryTreeNode(levelOrder[0]);
    curIndex++;

    const nodeTrack = new NodeTrack(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);

    const q = new Queue();
    q.enqueue(nodeTrack);

    while(curIndex < levelOrder.length) {
        const currentNode = q.peek();
        console.log(currentNode);
        if(levelOrder[curIndex] > currentNode.min && levelOrder[curIndex] < currentNode.node.val) {
            const newNode = new BinaryTreeNode(levelOrder[curIndex]);
            currentNode.node.left = newNode;

            const newTrackNode = new NodeTrack(newNode, currentNode.min, currentNode.node.val);
            q.enqueue(newTrackNode);
            curIndex++;
        }

        if(levelOrder[curIndex] < currentNode.max && levelOrder[curIndex] > currentNode.node.val) {
            const newNode = new BinaryTreeNode(levelOrder[curIndex]);
            currentNode.node.right = newNode;

            const newTrackNode = new NodeTrack(newNode, currentNode.node.val, currentNode.max);
            q.enqueue(newTrackNode);
            curIndex++;
        }

        q.dequeue();
    }

    return root;
}

const traversal = new Examples().getTraversal(4);

const bTreeRoot = construct(traversal.levelOrder);

const bTree = new BinaryTree(100);
bTree.setRootNode(bTreeRoot);

bTree.traverseLevelOrder();
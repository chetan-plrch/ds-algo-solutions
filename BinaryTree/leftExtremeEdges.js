const { Queue } = require("../Datastructure/dynamicQueueImplementationUsingArray");
const { isLeafNode } = require("../utility/binaryTree");

const printLeftExtremeUsingLevel = (root) => {
    const q = new Queue();
    let currentNodesCount = 1;
    let nextNodesCount = 0;
    q.enqueue(root);
    console.log(q.firstElement().val);
    while(!q.isEmpty()) {
        let node = q.dequeue();

        if((currentNodesCount !== 1) && isLeafNode(node)) {
            // Also not first node, and last node
            console.log(node.val);
        }

        currentNodesCount--;

        if(node.left) {
            q.enqueue(node.left);
            nextNodesCount++;
        }
                                        
        if(node.right) {
            q.enqueue(node.right);
            nextNodesCount++;
        }

        if(currentNodesCount === 0) {
            if(nextNodesCount !== 0) {
                console.log(q.firstElement().val, q.lastElement().val);
            }
            currentNodesCount = nextNodesCount;
            nextNodesCount = 0;
        }
    }
}

module.exports = {
    printLeftExtremeUsingLevel
}
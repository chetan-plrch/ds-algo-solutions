/**
 * Find using various methods
 * 1. Using two queues
 * 2. Using two stacks
 * 3. Using other methods as well, think of them
 */

const Examples = require("../../utility/examples");
const { Queue } = require('../../Datastructure/dynamicQueueImplementationUsingArray');

const zigzagTraversalApproach1 = (root) => {
    let q = new Queue();
    q.enqueue(root);

    let q1 = new Queue();

    let nextNodes = 0;
    let currentNodes = 1;
    let level = 0;

    while (!q.isEmpty()) {
        const node = q.dequeue();
        q1.enqueue(node);

        currentNodes--;

        if(node.left) {
            q.enqueue(node.left);
            nextNodes++;
        }

        if(node.right) {
            q.enqueue(node.right);
            nextNodes++;
        }

        if(currentNodes === 0) {
            currentNodes = nextNodes;
            nextNodes = 0;
            while(!q1.isEmpty()) {
                if((level % 2) === 0)
                    console.log(q1.dequeue().val);
                else
                    console.log(q1.pop().val);
            }
            console.log();
            level++;
        }
    }
}

const zigzagTraversalApproach2 = (root) => {
    
}


let bTree = new Examples().getBinaryTree();
zigzagTraversal(bTree.getRootNode());

let bTree = new Examples().getBinaryTree();
// zigzagTraversalApproach1(bTree.getRootNode());

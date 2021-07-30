/**
 * Find using various methods
 * 1. With using level order traversal technique
 * 2. Without using level order traversal
 * 3. Using two stack approach
 */

const Examples = require("../../utility/examples");
const { Queue } = require('../../Datastructure/dynamicQueueImplementationUsingArray');

const zigzagTraversalApproach1 = (root) => {
    // Using two queue.
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
            while (!q1.isEmpty()) {
                if ((level % 2) === 0)
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
    // Using one queue
    let q = new Queue();
    q.enqueue(root);

    let asc = true;
    while (!q.isEmpty()) {
        let count = q.size();
        let arr = [];
        while (count > 0) {
            let node = null
            
            if(asc) {
                node = q.dequeue();
                if (node.left)
                    arr.push(node.left);

                if (node.right)
                    arr.push(node.right);
            } else {
                node = q.pop();
                if (node.right)
                    arr.push(node.right);

                if (node.left)
                    arr.push(node.left);
            }

            console.log(node.val);

            count--;
        }

        if(!asc)
            arr.reverse();

        arr.forEach((node) => q.enqueue(node))

        console.log();
        asc = !asc;
    }
}

const zigzagTraversalApproach3 = (root) => {
    // Using two stacks
    let output = [];
    let oddLevel = [];
    let evenLevel = [];
    oddLevel.push(root);

    while((oddLevel.length > 0) || (evenLevel.length > 0)) {
        while(oddLevel.length > 0) {
            const node = oddLevel.pop();
            output.push(node.val);

            if(node.left)
                evenLevel.push(node.left);
            if(node.right)
                evenLevel.push(node.right);
        }

        while(evenLevel.length > 0) {
            const node = evenLevel.pop();
            output.push(node.val);

            if(node.right)
                oddLevel.push(node.right);
            if(node.left)
                oddLevel.push(node.left);
        }
    }

    console.log(output);
    return output;
}


let bTree = new Examples().getBinaryTree();
// zigzagTraversalApproach1(bTree.getRootNode());
// zigzagTraversalApproach2(bTree.getRootNode());
zigzagTraversalApproach3(bTree.getRootNode());

const Examples = require("../../utility/examples");
const { Queue } = require("../../Datastructure/dynamicQueueImplementationUsingArray");

const reverseLevelOrder = () => {
    const root = new Examples().getBinaryTree();
    const q = new Queue();
    const output = new Array();

    q.enqueue(root);

    while(!q.isEmpty()) {
        let node = q.dequeue();

        output.push(node.val);

        if(node.left)
            q.enqueue(node.left);

        if(node.right)
            q.enqueue(node.right);
    }

    return output.reverse();
}

console.log(reverseLevelOrder());
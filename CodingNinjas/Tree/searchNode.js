const Examples = require("../../utility/examples");

const searchNode = (root, key) => {
    if(root) {
        const f = searchNode(root.right, key);

        if(root.val === key)
            return true;
            
        const f1 = searchNode(root.left, key);

        return f || f1;
    }          
         
    return false;
}

const b = new Examples().getBinaryTree();
const bTreeRoot = b.getRootNode();
const bTreeArray = b.toArray();

for (let node of bTreeArray) {
    if(node && ('val' in node)) {    
        console.log('Successor of ', node.val, ' : ', searchNode(bTreeRoot, node.val + 1));
    }
};
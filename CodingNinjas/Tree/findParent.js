const Examples = require("../../utility/examples");

const findParent = (root, key) => {
    if(root) {
        const f = findParent(root.right, key);

        if(root.val === key)
            return -1;
            
        const f1 = findParent(root.left, key);

        if(f === -1)
            return root.val;
        else if(f1 === -1)
            return root.val;
        else if(f !== undefined)
            return f;
        else if(f1 !== undefined)
            return f1;
    }
}

const bTree = new Examples().getBinaryTree(1);
const bTreeRoot = bTree.getRootNode();
console.log(findParent(bTreeRoot, 23));
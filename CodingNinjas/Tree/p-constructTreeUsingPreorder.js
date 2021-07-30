// Preorder is root, left and right

const Examples = require("../../utility/examples")

const constructTreeUsingPreorder = (inorderArr, preorderArr) => {
    
}

module.exports ={
    constructTreeUsingPreorder
}

const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();

console.log(constructTreeUsingPreorder(
    bTree.getInorderOrder(bTreeRoot), 
    bTree.getPreorderOrder(bTreeRoot))
);
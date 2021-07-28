const BinaryTree = require("../utility/binaryTree")

const traverseLeftEdge = (root, arrList) => {
    if(root) {
        if(BinaryTree.isLeafNode(root))
            return;

        arrList.push(root.val);
        
        if(root.left)
            traverseLeftEdge(root.left, arrList);
        else if(root.right)
            traverseLeftEdge(root.right, arrList);
    }
}

const traverseRightEdge = (root, arrList) => {
    if(root) {
        if(BinaryTree.isLeafNode(root))
            return;
        
        if(root.right)
            traverseRightEdge(root.right, arrList);
        else if(root.left)
            traverseRightEdge(root.left, arrList);

        arrList.push(root.val);
    }
}

module.exports = {
    traverseLeftEdge,
    traverseRightEdge
}
const traverseLeafNodes = (root, arrList) => {
    if(root) {
        if(!(root.left && root.right)) 
            arrList.push(root.val);

        if(root.left)
            traverseLeafNodes(root.left, arrList);

        if(root.right)
            traverseLeafNodes(root.right, arrList);
    }
}

module.exports = {
    traverseLeafNodes
}
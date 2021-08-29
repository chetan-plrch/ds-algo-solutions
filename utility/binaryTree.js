const getLeftIndex = (parentIndex) => {
    return (parentIndex * 2) + 1;
}

const getRightIndex = (parentIndex) => {
    return (parentIndex * 2) + 2;
}

const getParentIndex = (childIndex) => {
    return Math.abs(Math.ceil((childIndex - 2) / 2));
}

const isLeftChild = (childIndex) => {
    return (childIndex % 2) === 1;
}

const isRightChild = (childIndex) => {
    return (childIndex % 2) === 0;
}

const nodesAtLevel = (level) => {
    return Math.pow(2, level);
}

const isLeafNode = (node) => {
    return !(node.left || node.right);
}

const hasOneChild = (node) => {
    return ((!!node.left) ^ (!!node.right)) === 1;
}

const hasOnlyLeftChild = (node) => {
    return node.left && (!node.right);
}

const hasOnlyRightChild = (node) => {
    return node.right && (!node.left);
}

const getMinNode = (root1, root2) => {
    if(root1 && root2) {
        if(Math.min(root1.val, root2.val) === root1.val)
            return root1;
        return root2;
    } else if(root1) {
        return root1;
    } else if(root2) {
        return root2;
    }
    return null;
}

const getMaxNode = (root1, root2) => {
    if(root1 && root2) {
        if(Math.max(root1.val, root2.val) === root1.val)
            return root1;
        return root2;
    } else if(root1) {
        return root1;
    } else if(root2) {
        return root2;
    }
    return null;
}

const getBaseLog = (x, y) => {
    return Math.log(y) / Math.log(x);
}

module.exports = {
    getParentIndex,
    getLeftIndex,
    getRightIndex,
    isLeftChild,
    isRightChild,
    nodesAtLevel,
    isLeafNode,
    hasOneChild,
    getMinNode,
    getMaxNode,
    getBaseLog,
    hasOnlyLeftChild,
    hasOnlyRightChild
}
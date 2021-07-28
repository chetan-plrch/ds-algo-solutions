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

module.exports = {
    getParentIndex,
    getLeftIndex,
    getRightIndex,
    isLeftChild,
    isRightChild,
    nodesAtLevel,
    isLeafNode
}
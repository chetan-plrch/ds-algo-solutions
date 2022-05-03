const swapInArray = (arr, i, j) => {
    const t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
}

const getRandomInt = (min, max) => {
	let random = Math.floor(Math.random() * Math.floor(max));
  	if(random <= min) {
     	return getRandomInt(min, max);
    }
	return random;
}

const nodesAtHeight = (height) => {
    return Math.pow(2, height) - 1;
}

const getTreeHeightByNodes = (totalNodes) => {
    return Math.ceil(Math.log2(totalNodes));
}

class TreeNode {

    constructor(v = null, l = null, r = null) {
        this.val = v;
        this.left = l;
        this.right = r;
    }

    setVal(v) {
        this.val = v;
    }

    setLeft(l) {
        this.left = l;
    }

    setRight(r) {
        this.right = r;
    }

    getVal() {
        return this.val;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }
}

const getLeftChildIndex = (parent) => (parent * 2) + 1;

const getRightChildIndex = (parent) => (parent * 2) + 2;

const getParentIndex = (idx) => {
    if(idx > 0) {
        if(idx % 2 === 0) {
            return (idx - 2) / 2;
        } else {
            return (idx - 1) / 2;
        }
    }
    return null;
}

const type = {
    MAX: 'MAX',
    MIN: 'MIN'
}

const isEmpty = (v) => {
    return (v === null || v === undefined);
}

module.exports = {
    swapInArray,
    getRandomInt,
    TreeNode,
    getLeftChildIndex,
    getRightChildIndex,
    getParentIndex,
    type,
    nodesAtHeight,
    isEmpty,
    getTreeHeightByNodes
}
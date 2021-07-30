/**
 * Function to return a particular level from a binary tree
 * 1. Using recursion
 * 2. Using iteration
 */

const Examples = require("../../utility/examples");

const particularLevel = (root, currentLevel, level, arr) => {
    if(root) {
        particularLevel(root.left, currentLevel+1, level, arr);
        if(currentLevel === level)
            arr.push(root.val);
        particularLevel(root.right, currentLevel+1, level, arr);
    }
}

const bTree = new Examples().getBinaryTree(4);
const bTreeRoot = bTree.getRootNode();

const currentLevel = 1;
const level = 1;
const arr = [];

particularLevel(bTreeRoot, currentLevel, level, arr)
console.log(arr);
/**
 * Function to return a particular level from a binary tree
 * 1. Using recursion
 * 2. Using iteration
 */

const Examples = require("../../utility/examples");

const particularLevel = (root, level) => {

}

const level = 3;
const bTree = new Examples().getBinaryTree();
const bTreeRoot = bTree.getRootNode();
console.log(particularLevel(bTreeRoot, 3));
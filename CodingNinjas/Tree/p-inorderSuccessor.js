const Examples = require('../../utility/examples');
const binaryTree = require('../../utility/binaryTree');

const findInorderSuccessor1 = (root, key) => {
    let arr = [];
    inorderTraversal(root, arr);

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === key) {
            return arr[i+1];
        }
    }
    return null;
}

const inorderTraversal = (root, arr) => {
    if(root) {
        inorderTraversal(root.left, arr);
        arr.push(root.val);
        inorderTraversal(root.right, arr)
    }
}

const findInorderSuccessor2 = (root, key) => {
    if(root) {
        findInorderSuccessor2(root.right);
        console.log(root.val);
        findInorderSuccessor2(root.left);
    }               
}

let next = null;
let cur = null;
const reverseInorderTraversal = (root, key) => {
    if(root) {
        reverseInorderTraversal(root.right, key);
        if(root.val === key) {
            cur = root;
        } else if(cur) {
            next = root;
        }
        reverseInorderTraversal(root.left, key);
    }
}

const b = new Examples().getBinaryTree();
const bTreeRoot = b.getRootNode();
const bTreeArray = b.toArray();
// findInorderSuccessor2(bTreeRoot);
console.log('24:', reverseInorderTraversal(bTreeRoot, 24), cur, next);

// for (let node of bTreeArray) {
//     if(node && ('val' in node)) {    
//         console.log('Successor of ', node.val, ' : ', findInorderSuccessor1(bTreeRoot, node.val));
//     }
// };

// for (let node of bTreeArray) {
//     if(node && ('val' in node)) {    
//         console.log('Successor of ', node.val, ' : ', reverseInorderTraversal(bTreeRoot, node.val));
//     }
// };
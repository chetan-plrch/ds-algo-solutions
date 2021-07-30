const Examples = require('../../utility/examples');
const binaryTree = require('../../utility/binaryTree');

const findInorderSuccessor1 = (root, key) => {
    // Using a array storee to hold all the parsed data
    let arr = [];
    inorderTraversal(root, arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return arr[i + 1];
        }
    }
    return null;
}

const inorderTraversal = (root, arr) => {
    if (root) {
        inorderTraversal(root.left, arr);
        arr.push(root.val);
        inorderTraversal(root.right, arr);
    }
}

let found = false;
let next = null;
const findInorderSuccessor2 = (root, key) => {
    // Using inorder traversal
    if (root) {
        findInorderSuccessor2(root.left, key);

        if (found) {
            next = root.val;
            found = false;
            return;
        }

        if (root.val === key) {
            found = true;
        }

        findInorderSuccessor2(root.right, key);
    }

    return next;
}

const findInorderSuccessor3 = (root, key) => {
    // TODO: Understand the inordersuccessor solution of CodingNinjas for Approach 2
    // TODO: CodingNinjas: Approach 2
}

function init() {
    const b = new Examples().getBinaryTree();
    const bTreeRoot = b.getRootNode();
    const bTreeArray = b.toArray();

    findInorderSuccessor2(bTreeRoot, 7);
    console.log(next);

    // console.log('24:', reverseInorderTraversal(bTreeRoot, 24), cur, next);

    // for (let node of bTreeArray) {
    //     if(node && ('val' in node)) {
    //         findInorderSuccessor3(bTreeRoot, node.val);
    //         console.log('Successor of ', node.val, ' : ', prev);
    //     }
    // };

    // for (let node of bTreeArray) {
    //     if(node && ('val' in node)) {    
    //         console.log('Successor of ', node.val, ' : ', reverseInorderTraversal(bTreeRoot, node.val));
    //     }
    // };
}

init();
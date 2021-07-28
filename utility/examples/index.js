const { BinaryTree } = require("../../Datastructure/BinaryTree");

const binaryTree1 = () => {
    // Non-complete binary tree example
    const arr = [67, 98, 90, 23, 12, 99, 55, 3, 1, 2, 4, 26, 25, 24, 7];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });

    b.setValueAtIndex(7, undefined);
    b.setValueAtIndex(8, undefined);
    b.setValueAtIndex(9, undefined);
    b.setValueAtIndex(10, undefined);
    b.setValueAtIndex(11, undefined);
    b.setValueAtIndex(12, undefined);
    
    return b;
}

const binaryTree2 = () => {
    // Complete binary tree example
    const arr = [67, 98, 90, 23, 12, 99, 55, 3, 1, 2, 4, 26, 25, 24, 7, 9, 45];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });
    
    return b;
}

const binaryTree3 = () => {
    // Perfect binary tree example
    const arr = [67, 98, 90, 23, 12, 99, 55, 3, 1, 2, 4, 26, 25, 24, 7];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });
    
    return b;
}

const binaryTree4 = () => {
    // Skewed binary tree example
    const arr = [67, 98, 90, 23, 12, 99, 55, 3, 1, 2, 4, 26, 25, 24, 7];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });
    
    // Level 2 right subtree removed
    b.setValueAtIndex(2, undefined);

    // Level 3 right subtree removed
    b.setValueAtIndex(4, undefined);

    // Level 4 right subtree removed
    b.setValueAtIndex(8, undefined);

    return b;
}

class Examples {
    getBinaryTree(num) {
        if(!num) {
            return binaryTree1();
        } else if(num === 1) {
            return binaryTree1();
        } else if(num === 2) {
            return binaryTree2();
        } else if(num === 3) {
            return binaryTree3();
        } else if(num === 4) {
            return binaryTree4();
        }
    }
}

module.exports = Examples
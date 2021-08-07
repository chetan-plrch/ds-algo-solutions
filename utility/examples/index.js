const { BinaryTree } = require("../../Datastructure/BinaryTree");
const { BinarySearchTree } = require("../../Datastructure/BinarySearchTree");

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

const binaryTree5 = () => {
    // Non-complete binary tree example, similar to binaryTree1 but with value change in roots
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
    b.setValueAtIndex(12, 32);
    
    return b;
}

const binaryTree6 = () => {
    // Non-complete binary tree example, with only one node right subtree and lot more on left.
    const arr = [
        300,
        67, 10,
        98, 90, 98, 90,
        23, 12, 99, 55, 23, 12, 99, 55,
        3, 1, 2, 4, 26, 25, 24, 7, 3, 1, 2, 4, 26, 25, 24, 7
    ];

    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });
    
    b.setValueAtIndex(5, undefined);
    b.setValueAtIndex(6, undefined);

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

const binaryTree7 = () => {
    // Single node tree
    const arr = [67];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });
    
    return b;
}

const binaryTree8 = () => {
    // Two node tree
    const arr = [67, 50];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });
    
    return b;
}

const binaryTree9 = () => {
    // Mirror tree binaryTree9
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    })

    return b;
}

const binaryTree10 = () => {
    // Mirror tree binaryTree10
    const arr = [1, 3, 2, 7, 6, 5, 4, -1, -1, -1, -1, -1, -1, 9, 8];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    })

    b.setValueAtIndex(7, undefined);
    b.setValueAtIndex(8, undefined);
    b.setValueAtIndex(9, undefined);
    b.setValueAtIndex(10, undefined);
    b.setValueAtIndex(11, undefined);
    b.setValueAtIndex(12, undefined);

    return b;
}

const binaryTree11 = () => {
    // Symmentric tree
    const arr = [1, 2, 2, 3, 4, 4, 3];
    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });

    return b;
}

const binarySearchTree1 = () => {
    // Binary search tree
    const arr = [20, 10, 5, 15, 13, 35, 30, 42];
    const bSearchTree = new BinarySearchTree();
    
    arr.forEach((ele) => {
        bSearchTree.insert(ele);
    });

    return bSearchTree;
}

const binarySearchTree2 = () => {
    // Invalid binary search tree using binary tree
    const arr = [20, 10, 35, 5, 15, 30, 42, -1, -1, 13];
    const bTree = new BinaryTree();
    
    arr.forEach((ele) => {
        bTree.insert(ele);
    });

    bTree.setValueAtIndex(7, undefined);
    bTree.setValueAtIndex(8, undefined);
    bTree.setValueAtIndex(5, 19);

    return bTree;
}

class Examples {
    total = 13

    getBinaryTree(num) {
        if(num === undefined) {
            return binaryTree1();
        } else if(num === 1) {
            return binaryTree1();
        } else if(num === 2) {
            return binaryTree2();
        } else if(num === 3) {
            return binaryTree3();
        } else if(num === 4) {
            return binaryTree4();
        } else if(num === 5) {
            return binaryTree5();
        } else if(num === 6) {
            return binaryTree6();
        } else if(num === 7) {
            return binaryTree7();
        } else if(num === 8) {
            return binaryTree8();
        } else if(num === 9) {
            return binaryTree9();
        } else if(num === 10) {
            return binaryTree10();
        } else if(num === 11) {
            return binaryTree11();
        } else if(num === 12) {
            return binarySearchTree1();
        } else if(num === 13) {
            return binarySearchTree2();
        }
    }

    iterator() {
        this[Symbol.iterator] = () => {
            let i = 1;
            return {
                next: () => ({
                    done: i > this.total,
                    value: this.getBinaryTree(i++),
                })
            }
        }

        return this;
    }
}

module.exports = Examples;
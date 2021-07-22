const { BinaryTree } = require('./BinaryTree/BinaryTree')

const start = () => {
    // const arr = [67,98,90,23,12,99,55, 3, 1, 2, 4, 26, 25, 24, 7, 89];
    const arr = [1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 5, 8, 9];

    const b = new BinaryTree();
    arr.forEach((ele) => {
        b.insert(ele);
    });

    // b.print();
    b.setValueAtIndex(7, undefined);
    b.setValueAtIndex(8, undefined);
    b.setValueAtIndex(9, undefined);
    b.setValueAtIndex(10, undefined);
    b.setValueAtIndex(11, undefined);
    b.setValueAtIndex(12, undefined);
    b.traverseVerticalOrder();
}

start();
const { getDiagonalNodes } = require("./diagonalNodes");
const Examples = require("../../utility/examples");


const areDiagonalAnagram = (rootA, rootB) => {
    const nodesA = getDiagonalNodes(rootA);
    const nodesB = getDiagonalNodes(rootB);

    if (Object.keys(nodesA).length !== Object.keys(nodesB).length) {
        return false;
    }

    for (let hLevel = 1, vLevel = 0; hLevel <= Object.keys(nodesA).length; hLevel++, vLevel--) {
        for (let h = hLevel, v = vLevel; h <= Object.keys(nodesA).length; h++, v++) {
            if ((nodesA[h][v] === undefined) && (nodesB[h][v] === undefined)) {
                continue;
            } else if (nodesA[h][v] && nodesB[h][v]) {
                if (nodesA[h][v].size === nodesB[h][v].size) {
                    for (let nodeVal of nodesA[h][v]) {
                        
                        if (!nodesB[h][v].has(nodeVal)) {
                            console.log('nodesB doesn\'t have any element from nodesA');
                            return false;
                        }
                    }
                } else {
                    console.log('Both size not equal');
                    return false;
                }
            } else {
                console.log('Both are not undefined');
                return false;
            }
        }
        console.log();
    }

    return true;
}

// Same trees
const bTreeA = new Examples().getBinaryTree();
const bTreeARoot = bTreeA.getRootNode();
console.log('Are anagram', areDiagonalAnagram(bTreeARoot, bTreeARoot));

// Different trees
const bTreeB = new Examples().getBinaryTree(5);
const bTreeBRoot = bTreeB.getRootNode();
console.log('----');
bTreeA.traverseLevelOrder();
console.log('----');
bTreeB.traverseLevelOrder();
console.log('----');
console.log('Are anagram', areDiagonalAnagram(bTreeARoot, bTreeBRoot));
const { getDiagonalNodes, getDiagonalNodes2 } = require("./diagonalNodes");
const Examples = require("../../utility/examples");

// Using getDiagonalNodes approach
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

// Using getDiagonalNodes2 approach
const areDiagonalAnagram2 = (rootA, rootB) => {
    const nodesA = getDiagonalNodes2(rootA);
    const nodesB = getDiagonalNodes2(rootB);

    if (Object.keys(nodesA).length !== Object.keys(nodesB).length) {
        return false;
    }

    for(let key of Object.keys(nodesA)) {
        if((nodesA[key] === undefined) && (nodesB[key] === undefined)) {
            continue;
        } else if(nodesA[key].size === nodesB[key].size) {
            for(let nodeVal of nodesA[key]) {
                if(!nodesB[key].has(nodeVal))
                    return false;
            }
        } else {
            return false;
        }
    }

    return true;
}

// Same trees
const bTreeA = new Examples().getBinaryTree();
const bTreeARoot = bTreeA.getRootNode();

// Different trees
const bTreeB = new Examples().getBinaryTree(2);
const bTreeBRoot = bTreeB.getRootNode();
console.log('----');
bTreeA.traverseLevelOrder();
console.log('----');
bTreeB.traverseLevelOrder();
console.log('----');

// Solution 1
// console.log('Are anagram', areDiagonalAnagram(bTreeARoot, bTreeARoot));
// console.log('Are anagram', areDiagonalAnagram(bTreeARoot, bTreeBRoot));

// Solution 2
// console.log('Are anagram', areDiagonalAnagram2(bTreeARoot, bTreeARoot));
// console.log('Are anagram', areDiagonalAnagram2(bTreeARoot, bTreeBRoot));
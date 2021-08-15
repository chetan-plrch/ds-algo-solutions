const Examples = require('../../utility/examples');
const binaryTree = require('../../Datastructure/BinaryTree');

const findOptimalBST = (keys, frequency) => {
    console.log(keys, frequency);
}

const examples = {
    1: {
        keys: [1, 3, 5],
        frequency: [3, 10, 7],
    },
    2: {
        keys: [],
        frequency: []
    }
}

findOptimalBST(examples['1'].keys, examples['1'].frequency);
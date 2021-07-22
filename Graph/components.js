const { problem2 } = require('./utils.js');
const { aList } = problem2

// Solution for connected components with Id tagging

let count = 0;
let components = new Array(aList.length);
function findConnectedComponents() {
    const visited = {};

    for(let i = 0; i < aList.length; i++) {
        if(visited[i] === undefined) {
            count++;
            dfs(i, visited);
        }
    }

    return [count, components];
}

function dfs(node, visited) {
    if(visited[node]) return;
    visited[node] = true;
    components[node] = count;

    aList[node].forEach(l => {
        const [nextNode,] = l;
        dfs(nextNode, visited);
    })
}

console.log(findConnectedComponents());
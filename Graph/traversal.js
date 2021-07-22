const { A, problem1 } = require('./utils')
const { aMatrix, aList } = problem1;

// Using DFS
function exploreNodesUsingDFSUsingAMatrix() {
  let visited = {};
  processNode(A, visited);
}

function processNode(node, visited) {
  visited[node] = true;
  for(let i = 0; i < aMatrix[node].length; i++) {
    if(aMatrix[node][i] === 1 && (visited[i] === undefined))
      processNode(i, visited);
  }
}

function exploreNodesUsingDFSUsingAList() {
  let visited = {};

  dfsTraversal(A, visited);
}

function dfsTraversal(node, visited) {
  if(visited[node]) return;
  visited[node] = true;

  aList[node].forEach((item) => {
    const [nextNode,] = item;
    dfsTraversal(nextNode, visited)
  })
}

// console.log(exploreNodesUsingDFSUsingAMatrix());
// console.log(exploreNodesUsingDFSUsingAList());

// Using BFS
function exploreNodesUsingBFSUsingAMatrix() {
  let current = 0;
  let nodes = [A];
  let visited = {};
  while (nodes[current] !== undefined) {
    for (let i = 0; i < aMatrix[nodes[current]].length; i++) {
      if ((aMatrix[nodes[current]][i] === 1) && visited[i] === undefined) {
        nodes.push(i);
      }
    }
    visited[nodes[current]] = true;
    current++;
  }

  return nodes;
}

function exploreNodesUsingBFSUsingAList() {
  let current = 0;
  let nodes = [A];
  let visited = {};
  while (nodes[current] !== undefined) {
    for (let i = 0; i < aList[nodes[current]].length; i++) {
      let [node,] = aList[nodes[current]][i];
      if (visited[node] === undefined) {
        nodes.push(node);
      }
    }
    visited[nodes[current]] = true;
    current++;
  }

  return nodes;
}

function exploreNodesUsingBFSUsingEList() {
  // How to implement using eList
}

// console.log(exploreNodesUsingBFSUsingAMatrix());
// console.log(exploreNodesUsingBFSUsingAList());
// console.log(exploreNodesUsingBFSUsingEList());
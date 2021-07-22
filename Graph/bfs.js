const { problem1, A } = require('./utils');
const { aList } = problem1;
const { Queue } = require('@datastructures-js/queue');

const q = new Queue.Queue();

function traverse(graph) {
  let traversed = [];
  let parent = new Array(graph.length);
  q.enqueue(A);
  let visited= { 0:true };
  while(!q.isEmpty()) {
    graph[q.front()].forEach(edge => {
      const [nextNode,] = edge;
      if(visited[nextNode] === undefined) {
        visited[nextNode] = true;
        parent[nextNode] = q.front();
        q.enqueue(nextNode);
      }
    })
    traversed.push(q.dequeue());
  }

  return [traversed, parent];
}

function findPathFromSToE(aList, sNode, eNode) {
  const [,p] = traverse(aList);
  const path = [];
  let cur = eNode;
  while(cur !== sNode && (cur >= 0 && cur < aList.length)) {
    path.push(String.fromCharCode(65 + cur));
    cur = p[cur];
  }
  path.push(String.fromCharCode(65 + sNode));
  return path.reverse();
}

// console.log('Traverse', traverse());
console.log('Path', findPathFromSToE(aList, 0, aList.length - 1));
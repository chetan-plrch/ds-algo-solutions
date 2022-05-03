const util = require('util');

class Node {
    index = null;
    name = null;
    distance = null;
    next = null;

    constructor(index, distance, next) {
        this.index = index;
        this.name = cityNames[index];
        this.distance = distance;
        this.next = next;
    }
}

let cityNames = ["Austin", "Atlanta", "Chicago", "Dallas", "Denver", "Huston", "Washington"];

let cities = [
    new Node(3, 200, new Node(5, 160, null)),
    new Node(5, 800, new Node(6, 600, null)),
    new Node(4, 1000, null),
    new Node(0, 200, new Node(2, 900, new Node(4, 780, null))),
    new Node(1, 1400, new Node(2, 1000, null)),
    new Node(1, 800, null),
    new Node(1, 600, null)
]

console.log('City names', cityNames);

console.log('Cities', util.inspect(cities, false, null, true /* enable colors */))

let DFS = function() {
    let booleanVisited = new Array(cities.length).fill(0);

    let startNode = cities[0];

}
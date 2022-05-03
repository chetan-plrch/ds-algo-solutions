const Queue = require('./circularQueueUsingArray')

class Stack {
    queue = null;
    size = 0;

    constructor(size = 16) {
        this.queue = new Queue(size);
    }

    push(data) {
        this.queue.enqueue(data);
    }

    pop() {
        this.queue.dequeue();
    }

    // isEmpty() {

    // }

    // isFull() {

    // }

    // display() {

    // }
}

let s1 = new Stack();

console.log(s1);

s1.push(54);

console.log(s1);

s1.pop();

console.log(s1);

s1.push(60);

console.log(s1);

s1.push(90);

console.log(s1);

s1.pop();
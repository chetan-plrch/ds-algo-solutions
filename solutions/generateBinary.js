let CircularQueue = require('./circularQueueUsingArray');

function generateBinary(num) {
    let q1 = new CircularQueue(num);
    q1.enqueue('1');

    for(let i = 1; i <= num; i++) {
        let value = q1.dequeue();
        console.log(value);
        q1.enqueue(value + '0');
        q1.enqueue(value + '1');
    }
}


generateBinary(5);
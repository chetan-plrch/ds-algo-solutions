class Node {
    constructor(data = null) {
        this.data = data;
        this.next = null;
    }
}

class CircularQueue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    enqueue(element) {
        let n1 = new Node(element);
        if(this.isEmpty()) {
            this.front = n1;
            this.rear = n1;
        } else {
            this.rear.next = n1;
            this.rear = n1;
        }
        this.size+=1;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('List is already empty !!')
            return;
        }

        if (this.front === this.rear) {
            this.front = null;
            this.rear =null;
        } else {
            this.front = this.front.next;
        }
        this.size-=1;
    }

    isEmpty() {
        return this.front === null;
    }

    display() {
        if(this.isEmpty()) {
            console.log('List is empty');
            return;
        }

        let start = this.front;
        do {
            console.log('Value', start.data);
            start = start.next;
        } while(start !== this.rear)
    }

    size() {
        return this.size;
    }

    onlyOneElement() {
        if(this.isEmpty()) {
            console.log('List is empty')
            return false;
        }
        return this.front === this.rear;
    }
}

function executeQueue() {
    let q1 = new CircularQueue();

    console.log('Queue', q1)

    q1.enqueue(54);

    console.log('Queue', q1)

    q1.dequeue();

    console.log('Queue', q1)

    console.log('Is empty ?' , q1.isEmpty())

    q1.enqueue(1)
    q1.enqueue(2)
    q1.enqueue(3)
    q1.enqueue(4)
    q1.enqueue(5)

    console.log('Queue', q1)

    q1.dequeue()

    console.log('Queue', q1)

    q1.dequeue()

    console.log('Queue', q1)

    q1.dequeue()

    console.log('Queue', q1)

    q1.dequeue()

    console.log('Queue', q1)

    q1.dequeue()

    console.log('Queue', q1);
}

executeQueue();
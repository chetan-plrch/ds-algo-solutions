class CircularQueue {
    front = -1;
    rear = -1;
    queue = [];
    size = 0;

    constructor(size = 16) {
        this.front = -1;
        this.rear = -1;
        this.queue = new Array(size);
    }

    enqueue(element) {
        let length = this.queue.length;
        if(this.isFull()) {
            console.log('The list is full')
        } else {
            if(this.isEmpty()) {
                this.front = 0;
            }
            this.rear = (this.rear + 1) % length;
            this.queue[this.rear] = element;

            this.size+=1;
        }
    }

    dequeue() {
        let length = this.queue.length;
        if(this.isEmpty()) {
            console.log('Queue is already empty');
            return null;
        } else {
            let value = this.queue[this.front];
            this.queue[this.front] = undefined;

            if(this.size === 1) {
                this.front = -1;
                this.rear = -1;
            } else {
                this.front = (this.front + 1) % length;
            }

            this.size-=1;
            return value;
        }
    }

    onlyOneElement() {
        if(this.front !== -1) {
            return this.front === this.rear;
        }
        return false;
    }

    isEmpty() {
        return this.front === -1;
    }

    isFull() {
        if(this.rear > this.front) {
            let length = this.queue.length;
            return (this.rear - this.front + 1) === length;
        } else if(this.front > this.rear) {
            return this.rear === (this.front - 1);
        }
        return false;
    }

    size() {
        if(this.isEmpty()) {
            return 0;
        }

        if(this.rear > this.front) {
            return this.rear - this.front + 1;
        } else if(this.front > this.rear) {
            let length = this.queue.length;
            return length - (this.front - this.rear - 1);
        }
    }

    genericSize() {
        return this.size;
    }

    display() {
        if(this.isEmpty()) {
            console.log('List is empty!')
            console.log('0 elements')
        } else {
            let length = this.queue.length
            for(let i = this.front; i !== (this.rear + 1); i = (i + 1) % length) {
                console.log('Value', this.queue[i]);
            }
        }
    }
}


module.exports = CircularQueue

// let q1 = new CircularQueue(6);

// console.log(q1);

// q1.enqueue(55);
// q1.enqueue(45);

// console.log(q1);

// q1.dequeue();

// console.log(q1)

// console.log('Only one element', q1.onlyOneElement());

// q1.display();

// q1.enqueue(1);
// q1.enqueue(2);
// q1.enqueue(3);
// q1.enqueue(4);
// q1.enqueue(5);

// console.log(q1)

// console.log('Is Empty', q1.isEmpty());
// console.log('Is Full', q1.isFull());

// q1.enqueue(6);

// q1.dequeue();

// q1.dequeue();

// console.log(q1);

// console.log(q1.size());

// q1.display();



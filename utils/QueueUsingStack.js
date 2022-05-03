class Queue {
    stack = null;
    size = 0;

    constructor() {
        this.stack = [];
    }

    enqueue(data) {
        this.stack.push(data);
        this.size++;
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log('Queue is already empty');
            return Number.MIN_SAFE_INTEGER;
        } else {
            this.size--;
            return this.stack.shift();
        }
    }

    isFull() {
        return this.size === this.stack.length;
    }

    isEmpty() {
        return this.size === 0;
    }

    size() {
        return this.size;
    }

    display() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
        } else {
            this.stack.forEach((value, index) => {
                console.log(index, ' Value: ', value);
            })
        }
    }

    front() {
        if(this.isEmpty()) {
            console.log('Queue is empty');
            return Number.MIN_SAFE_INTEGER
        }
        return this.stack[0]
    }
}

module.exports = Queue

class Stack {
    store = null;
    front = -1;
    constructor(size = 20) {
        if(size < 0) {
            throw new Error('Stack size cannot be negative');
        }
        this.store = new Array(20);
    }

    size() {
        return this.front + 1;
    }

    maxSize() {
        return this.store.length;
    }

    isFull() {
        return this.size() === this.maxSize();
    }

    isEmpty() {
        return this.size() === 0;
    }

    push(val) {
        if(this.isFull()) {
            throw new Error('Stack is full');
        } else {
            this.store[++this.front] = val;
        }
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error('Stack is empty');
        } else {
            this.front--;
        }
    }

    peek() {
        if(this.isEmpty()) {
            throw new Error('Stack is empty');
        } else {
            return this.store[this.front];
        }
    }
}

module.exports = {
    Stack
}
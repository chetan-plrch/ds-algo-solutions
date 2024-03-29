class Queue {
    store = null;
    front = 0;
    current = 0;
    constructor(size = 20) {
        if(size < 0) {
            throw new Error('Queue size cannot be negative');
        }
        this.store = new Array(20);
    }

    size() {
        return this.current - this.front;
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

    enqueue(val) {
        if(this.isEmpty()) {
            this.store[this.current++] = val;
        } else if(this.isFull()) {
            let newSize = this.store.length + Math.ceil(this.store.length / 3);
            let newStore = new Array(newSize);
            for(let i = 0; i < this.store.length; i++) {
                newStore[i] = this.store[i];
            }
            
            this.store = newStore;
            this.store[this.current++] = val;
        } else {
            this.store[this.current++] = val;
        }
    }

    poll() {
        return this.dequeue();
    }

    dequeue() {
        if(this.isEmpty()) {
            throw new Error('Queue is empty');
        } else {
            return this.store[this.front++];
        }
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error('Queue is empty');
        } else {
            return this.store[--this.current];
        }
    }

    peek() {
        return this.firstElement();
    }

    firstElement() {
        if(this.isEmpty()) {
            return null;
        } else {
            return this.store[this.front];
        }
    }

    lastElement() {
        if(this.isEmpty()) {
            throw new Error('Queue is empty');
        } else {
            return this.store[this.current - 1];
        }
    }

    getValueAtIndex(idx) {
        if(idx >= this.maxSize()) {
            return undefined;
        }
        return this.store[idx];
    }

    print() {
        for(let i = this.front; i < this.current; i++) {
            console.log(this.store[i]);
        }
    }
}

module.exports = {
    Queue
}
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
            let newSize = this.store.length + Math.ceil(this.store.length / 3);
            let newStore = new Array(newSize);
            for(let i = 0; i < this.store.length; i++) {
                newStore[i] = this.store[i];
            }
            
            this.store = newStore;
            this.store[++this.front] = val;
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

    bottom() {
        return this.store[0];
    }

    getValueAtIndex(idx) {
        if(idx >= this.maxSize()) {
            return undefined;
        }
        return this.store[idx];
    }

    setValueAtIndex(idx, val) {
        if(idx >= this.maxSize()) {
            return undefined;
        }
        this.store[idx] = val;
        return true;
    }

    print() {
        console.log(this.store);
    }
}

module.exports = {
    Stack
}
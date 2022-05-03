class Stack {
    stack = null;
    top = null;

    constructor(size = 10) {
        this.top = -1;
        this.stack = new Array(size).fill(Number.MIN_SAFE_INTEGER);
    }

    isFull() {
        return (this.top === this.stack.length - 1)
    }

    isEmpty() {
        return this.top === -1;
    }

    push(value) {
        if(this.isFull()) {
            console.log('Stack is full, dynamic extend')
            this.stack[++this.top] = value;
        } else {
            this.stack[++this.top] = value;
        }
    }

    pop() {
        if(this.isEmpty()) {
            console.log('Stack is empty')
        } else {
            return this.stack[this.top--]
        }
    }

    peek() {
        if(this.isEmpty()) {
            console.log('Stack is empty')
        } else {
            let val = this.stack[this.top]
            this.stack[this.top] = undefined
            return val
        }
    }

    size() {
        return this.top + 1;
    }

    display() {
        if(this.isEmpty()) {
            console.log('Stack is empty')
        } else {
            for(let i = this.top; i >= 0; i--) {
                console.log(this.stack[i])
            }
        }
    }

    insertAtPosition(position, value) {
        if(this.isFull()) {
            console.log('Stack is full')
        } else {
            for(let i = this.top + 1; i > position; i--) {
                this.stack[i] = this.stack[i - 1];
            }
            this.stack[position] = value;
            this.top++;
        }
    }
}

module.exports = Stack
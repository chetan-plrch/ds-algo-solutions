class Queue {
    front = -1;
    rear = -1;
    queue = new Array(5);

    constructor(list) {
        if(list && Array.isArray(list)) {
            this.queue = list;
            this.rear = list.length - 1;
            front = 0;
        }
    }

    insert(element) {
        this.queue[++rear] = element;
    }

    delete() {
        this.front++;
    }

    isEmpty() {
        return rear === -1;
    }

    isFull() {
        return (this.rear === (this.queue.length - 1))
    }
}

let s1 = new Stack();
let s2 = new Stack([1,2,3,4,5]);

console.log(s1)
console.log(s2)
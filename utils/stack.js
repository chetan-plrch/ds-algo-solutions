class Stack {
    top = - 1;
    arr = [];

    constructor(list) {
        if(list && Array.isArray(list)) {
            this.arr = list;
            this.top = list.length - 1;
        }
    }

    push(element) {
        this.arr[++this.top] = element;
    }

    pop() {
        let element = this.arr[this.top];
        delete this.arr[this.top--];
        return element;
    }

    print() {
        if(this.isEmpty()) { 
            console.log('List is empty')
        } else {
            console.log('Elements are :')
            for(let i = 0; i <= this.top; i++) {
                console.log(this.arr[i])
            }
        }
    }

    isEmpty() {
        return this.top === -1;
    }
}

let s1 = new Stack();
let s2 = new Stack([1,2,3,4,5]);

console.log(s1)
console.log(s2)
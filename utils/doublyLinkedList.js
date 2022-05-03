class Node {
    data = null;
    next = null;
    prev = null;

    constructor(prev = null, data = null, next = null) {
        this.prev = prev;
        this.data = data;
        this.next = next;
    }
}

class DoublyLinkedList {
    head = null;
    last = null;

    isEmpty() {
        return this.head === null;
    }

    push(data) {
        if(this.isEmpty()) {
            this.head = new Node(null, data, null);
            this.last = this.head;
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            temp.next = new Node(temp, data, null)
            this.last = temp.next;
        }
    }

    print(inAsc = false) {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else if(inAsc) {
            let temp = this.head;
            do {
                console.log(temp.data)
                temp = temp.next;
            } while(temp !== null)
        } else {
            let temp = this.last;
            do {
                console.log(temp.data);
                temp = temp.prev
            } while(temp !== null)
        }
    }

    delete() {
        if(this.isEmpty()) {
            console.log('List is empty')
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next;
            }
            console.log('Deleted data', temp.data);
            
            if(temp.prev !== null) {
                temp.prev.next = null;
                this.last = temp.prev;
                temp.prev = null;
            } else {
                temp.next = null;
                this.head = null;
            }

            temp = null;
        }
    }
}
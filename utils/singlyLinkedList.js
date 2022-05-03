class Node {
    constructor(val = null, next = null) {
        this.val = val;
        this.next = next;
    }

    setValue(val) {
        this.val = val;
    }

    setNext(next) {
        this.next = next;
    }

    getValue() {
        return this.val;
    }

    getNext() {
        return this.next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.head === null;
    }

    getHead() {
        return this.head;
    }

    setHead(node) {
        this.head = node;
    }

    insertAtBegin(val) {
        if(this.isEmpty()) {
            this.head = new Node(val);
        } else {
            let temp = new Node(val);
            temp.next = this.head;
            this.head = temp;
        }
        this.size++;
    }

    insert(val) {
        this.insertAtEnd(val);
        this.size++;
    }

    insertAtEnd(val) {
        if(this.isEmpty()) {
            this.head = new Node(val)
        } else {
            let temp = this.head;
            while(temp.next !== null) {
                temp = temp.next
            }
            temp.next = new Node(val)
        }
        this.size++;
    }

    insertNodesAtEnd(list) {
        let temp = list;
        while(temp !== null) {
            this.insertAtEnd(temp.val);
            temp = temp.next;
        }
    }

    insertBulk(arr) {
        if(this.isEmpty()) {
            this.head = new Node(arr[0]);
            this.size++;
        }

        let i = 1;
        let temp = this.head;
        while(i < arr.length) {
            temp.next = new Node(arr[i]);
            temp = temp.next;
            i++;
            this.size++;
        }
    }

    printEach() {
        if(this.isEmpty()) {
            console.log('The list is empty')
        } else {
            let temp = this.head;
            do {
                console.log(temp.val);
                temp = temp.next
            } while(temp !== null)
        }
    }

    print() {
        if(this.isEmpty()) {
            console.log('The list is empty')
        } else {
            let temp = this.head;
            let str = ''
            do {
                str = (str === '') ? ('' + temp.val) : `${str}, ${temp.val}`;
                temp = temp.next
            } while(temp !== null)
            console.log(str);
        }
    }

    deleteAtEnd() {
        if(this.isEmpty()) {
            console.log('The list is already empty')
        } else {
            let temp = this.head;
            let prevTemp = null;
            while(temp.next !== null) {
                prevTemp = temp;
                temp = temp.next;
            }

            if(prevTemp !== null) {
                prevTemp.next = null;
            } else {
                this.head = null;
            }
            this.size--;
        }
    }

    deleteAtBegin() {
        if(this.isEmpty()) {
            console.log('The list is already empty')
        } else {
            let temp = this.head;
            this.head = temp.next;
            temp.next = null;
            this.size--;
        }
    }

    length() {
        return this.size;
    }
}

module.exports = {
    LinkedList,
    Node
}
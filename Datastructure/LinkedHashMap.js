const { LinkedList } = require('datastructures-js');
const chalk = require('chalk');

class LinkedHashMap {
    m = null;
    linkedList = null;

    constructor() {
        this.linkedList = new LinkedList();
        this.m = {};

        // Iterable on linkedlist items
        this.m[Symbol.iterator] = () => {
            let i = 0;
            return {
                next: () => ({
                    done: i >= this.linkedList.count(),
                    value: this.m[this.makeIndexKey(i)] ? 
                        this.m[this.makeIndexKey(i++)].getValue() : null
                })
            }
        }
    }

    // Sets an key with a value
    set(key, value) {
        this.m[this.makeIndexKey(this.linkedList.count())] = this.linkedList.insertLast(value);
        this.m[this.makeKey(key)] = this.m[this.makeIndexKey(this.linkedList.count() - 1)];
    }

    // Gets a value at a key
    get(key) {
        return m[key].getValue();
    }

    atIndex(idx) {
        return this.m[this.makeIndexKey(idx)].getValue();
    }

    // Returns an iterator for the for each loop
    size() {
        return this.linkedList.count();
    }

    // Returns true if the key is present in the map
    has(key) {
        return key in this.m;
    }

    iterator() {
        return this.m;
    }

    // Removes all key-value pairs
    clear() {
        this.m = {};
        this.linkedList = new LinkedList();
    }

    makeKey(key) {
        return `key-${key}`;
    }

    makeIndexKey(idx) {
        return `index-${idx}`;
    }

    print() {
        console.log(chalk.greenBright(JSON.stringify(this.m, null, 2)));
    }
}

module.exports = {
    LinkedHashMap
}
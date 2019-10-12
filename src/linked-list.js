const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
        }
        this.length++;

        return this;
    }

    head() { return this._head.data }

    tail() { return this._tail.data }

    at(index) {
        if (index === 0) return this._head.data;
        if (index === (this.length - 1)) return this._tail.data;
        let count = 0;
        let node = this._head;
        while (count < index) {
            node = node.next;
            count++;
        }
        return node.data;
    }

    insertAt(index, data) {
        if (this.length !== 0) {
            let count = 0;
            let node = this._head;
            while (count < index) {
                node = node.next;
                count++;
            }
            const insertNode = new Node(data, node.prev, node);
            node.prev.next = insertNode;
            node.prev = insertNode;
            this.length++;
        }

        return this;
    }

    isEmpty() {
        return this.length === 0 ? true : false;
    }

    clear() {
        this.length = 0;
        let node = new Node();
        this._head = node;
        this._tail = node;
        return this;
    }

    deleteAt(index) {
        if (this.length > 1){

            let count = 0;
            let node = this._head;
            while (count < index) {
                node = node.next;
                count++;
            }
            node.prev.next = node.next;
            node.next.prev = node.prev;
        } 

        return this;
    }

    reverse() {
        let node = this._head;
        while (node !== null) {
            let nextNode = node.next;
            node.next = node.prev;
            node.prev = nextNode;
            node = nextNode;
        }
        let temp = this._head;
        this._head = this._tail;
        this._tail = temp;

        return this;
    }

    indexOf(data) {
        let node = this._head;
        let count = 0;
        while (node !== null) {
            if (node.data === data) return count;
            node = node.next;
            count++;
        }
        return -1;
    }
}

module.exports = LinkedList;


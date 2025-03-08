"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root) {
            this.root = node;
        }
        else {
            let current = this.root;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
    }
}
const numberList = new LinkedList();
const stringList = new LinkedList();

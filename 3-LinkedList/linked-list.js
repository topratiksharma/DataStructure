"use strict";
exports.__esModule = true;
exports.LinkedList = void 0;
// import { LNode } from './node';
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    LinkedList.prototype.addLast = function (item) {
        var node = new LNode(item);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            this.last.next = node;
            this.last = node;
        }
        this.size++;
    };
    LinkedList.prototype.addFirst = function (item) {
        var node = new LNode(item);
        if (this.isEmpty()) {
            this.first = this.last = node;
        }
        else {
            node.next = this.first;
            this.first = node;
        }
        this.size++;
    };
    LinkedList.prototype.isEmpty = function () {
        return !this.first;
    };
    LinkedList.prototype.removeFirst = function () {
        if (!this.first)
            throw new Error("No Element exists in linked list");
        if (this.first === this.last) {
            this.first = this.last = null;
        }
        this.first = this.first.next;
        this.size--;
    };
    LinkedList.prototype.removeLast = function () {
        if (this.isEmpty()) {
            throw new Error("No elements present");
        }
        if (this.first === this.last) {
            this.first = this.last = null;
        }
        else {
            var secondLastNode = this.getSecondLastNode(this.last);
            this.last = secondLastNode;
            this.last.next = null;
        }
        this.size--;
    };
    LinkedList.prototype.getSecondLastNode = function (node) {
        var current = this.first;
        while (current !== null) {
            if (current.next === this.last)
                return current;
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.contains = function (item) {
        return this.indexOf(item) !== -1;
    };
    LinkedList.prototype.indexOf = function (item) {
        var index = 0;
        var current = this.first;
        while (current != null) {
            if (current.value === item) {
                return index;
            }
            else {
                index++;
                current = current.next;
            }
        }
        return -1;
    };
    LinkedList.prototype.getSize = function () {
        return this.size;
    };
    LinkedList.prototype.toArray = function () {
        var array = new Array(this.size);
        var current = this.first;
        var index = 0;
        while (current !== null) {
            array[index++] = current.value;
            if (current === this.last) {
                return array;
            }
            current = current.next;
        }
        return array;
    };
    LinkedList.prototype.reverse = function () {
        var lastNode = null;
        var current = this.first;
        while (current !== null) {
            var newNode = new LNode(current.value);
            newNode.next = lastNode;
            lastNode = newNode;
            current = current.next;
        }
        this.last = this.first;
        this.last.next = null;
        this.first = lastNode;
    };
    return LinkedList;
}());
exports.LinkedList = LinkedList;
var LNode = /** @class */ (function () {
    function LNode(value) {
        this.value = value;
    }
    return LNode;
}());

"use strict";
exports.__esModule = true;
var Queue_1 = require("./5-Queue/Queue");
var array_1 = require("./2-Arrays/array");
var linked_list_1 = require("./3-LinkedList/linked-list");
var Balancing_String_Using_Stack_1 = require("./4-Stack/Balancing_String_Using_Stack");
var PriorityQueue_1 = require("./5-Queue/PriorityQueue");
var hashtable_1 = require("./6-HashTables/hashtable");
var main = /** @class */ (function () {
    function main() {
        this.creatingHashTable();
    }
    main.prototype.creatingLinkList = function () {
        var linkedList = new linked_list_1.LinkedList();
        linkedList.addLast(10);
        linkedList.addLast(20);
        console.log("Size: ", linkedList.getSize());
        linkedList.addLast(30);
        linkedList.addLast(40);
        linkedList.addLast(50);
        linkedList.addLast(60);
        console.log("Linked List: ", linkedList);
        console.log("Size: ", linkedList.getSize());
        linkedList.removeFirst();
        linkedList.removeLast();
        console.log("To Array : ", linkedList.toArray());
        linkedList.reverse();
        console.log("To Array Reverse : ", linkedList.toArray());
        console.log("Index of 10 : ", linkedList.indexOf(10));
        console.log("Size: ", linkedList.getSize());
        console.log("Index Of 30: ", linkedList.indexOf(30));
        console.log("To Array : ", linkedList.toArray());
        console.log("Contains 70 : ", linkedList.contains(70));
    };
    main.prototype.creatingArray = function () {
        var arr = new array_1.Array_Custom(5);
        arr.insert(10);
        arr.insert(20);
        arr.insert(30);
        arr.insert(40);
        arr.insert(50);
        arr.insert(60);
        console.log("index of 50:", arr.indexOf(50));
        arr.removeAt(4);
        console.log("===");
        console.log("index of 10:", arr.indexOf(10));
        console.log("index of 50:", arr.indexOf(50));
        console.log("===");
        arr.print();
    };
    main.prototype.creatingStack = function () {
        var stacks = new Balancing_String_Using_Stack_1.BalancingString();
        var result = stacks.isBalancedString("{{{[[]]addasd]]]das(()");
        console.log("RESULT :================>", result);
    };
    main.prototype.creatingQueue = function () {
        var queue = new Queue_1.ArrayQueue(5);
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);
        console.log(queue.toString());
        queue.dequeue();
        queue.enqueue(40);
        queue.enqueue(50);
        console.log(queue.toString());
        queue.enqueue(50);
    };
    main.prototype.creatingPriorityQueue = function () {
        var queue = new PriorityQueue_1.PriorityQueue();
        queue.add(8);
        queue.add(4);
        queue.add(5);
        queue.add(1);
        console.log(queue.toString());
    };
    main.prototype.creatingHashTable = function () {
        var hashTable = new hashtable_1.HashTable(5);
        hashTable.put(1, "33");
        hashTable.put(4, "44");
        hashTable.put(6, "234");
        console.log(JSON.stringify(hashTable));
    };
    return main;
}());
new main();

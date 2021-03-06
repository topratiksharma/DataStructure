"use strict";
exports.__esModule = true;
var Queue_1 = require("./5-Queue/Queue");
var array_1 = require("./2-Arrays/array");
var linked_list_1 = require("./3-LinkedList/linked-list");
var Balancing_String_Using_Stack_1 = require("./4-Stack/Balancing_String_Using_Stack");
var PriorityQueue_1 = require("./5-Queue/PriorityQueue");
var hashtable_1 = require("./6-HashTables/hashtable");
var Tree_1 = require("./7-Trees/Tree");
var AVL_Tree_1 = require("./8-AVL_TRee/AVL_Tree");
var Heap_1 = require("./9-Heap/Heap");
var Tries_1 = require("./10-Tries/Tries");
var Graphs_1 = require("./11-Graphs/Graphs");
var main = /** @class */ (function () {
    function main() {
        this.createGraph();
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
    main.prototype.createTree = function () {
        var tree = new Tree_1.Tree();
        tree.insert(7);
        tree.insert(4);
        tree.insert(9);
        tree.insert(1);
        tree.insert(6);
        tree.insert(8);
        tree.insert(10);
        console.log("To String", tree.toString());
        console.log("Find: 10 =>", tree.find(10));
        console.log("Find: 4 =>", tree.find(4));
        console.log("Find: 2 =>", tree.find(2));
        console.log("Pre Order", tree.traversePreOrder());
        console.log("Post Order", tree.traversePostOrder());
        console.log("In order", tree.traverseInOrder());
        tree.findMinimumValueInBinaryTree();
        console.log("Is Binary Search Tree: ", tree.isBinarySearchTree());
        console.log("Get Nodes at Distance 0:", tree.getNodesAtDistance(0));
        console.log("Get Nodes at Distance 1:", tree.getNodesAtDistance(1));
        console.log("Get Nodes at Distance 2:", tree.getNodesAtDistance(2));
        console.log("Get Nodes at Distance 30:", tree.getNodesAtDistance(30));
        var tree2 = new Tree_1.Tree();
        tree2.insert(7);
        tree2.insert(4);
        tree2.insert(9);
        tree2.insert(1);
        tree2.insert(6);
        tree2.insert(8);
        tree2.insert(10);
        console.log("is Equal", tree2.isEqual(tree));
        console.log("Level Order Traversal:", tree.levelOrderTraversal());
    };
    main.prototype.createAVLTree = function () {
        var avlTree = new AVL_Tree_1.AVLTree();
        avlTree.insert(10);
        avlTree.insert(20);
        avlTree.insert(30);
        console.log(JSON.stringify(avlTree));
    };
    main.prototype.createHeap = function () {
        var numbers = [7, 3, 10, 6, 22, 14];
        var heap = new Heap_1.Heaps(numbers.length);
        for (var i = 0; i < numbers.length; i++) {
            heap.insert(numbers[i]);
        }
        console.log("Current heap: ", heap);
        for (var i = numbers.length - 1; i >= 0; i--) {
            numbers[i] = heap.remove();
        }
        console.log("Current numbers: ", numbers);
    };
    main.prototype.createTrie = function () {
        var trie = new Tries_1.Trie();
        trie.insert("Test");
    };
    main.prototype.createGraph = function () {
        var graph = new Graphs_1.Graph();
        graph.addNode("A");
        graph.addNode("B");
        graph.addNode("C");
        graph.addEdge("A", "B");
        graph.addEdge("A", "C");
        // graph.print();
        // graph.removeNode("A");
        graph.removeEdge("A", "C");
        graph.removeEdge("A", "D");
        graph.print();
    };
    return main;
}());
new main();

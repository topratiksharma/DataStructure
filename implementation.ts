import { ArrayQueue } from "./5-Queue/Queue";
import { Array_Custom } from "./2-Arrays/array";
import { LinkedList } from "./3-LinkedList/linked-list";
import { BalancingString } from "./4-Stack/Balancing_String_Using_Stack";
import { PriorityQueue } from "./5-Queue/PriorityQueue";
import { HashTable } from "./6-HashTables/hashtable";
import { Tree } from "./7-Trees/Tree";
import { AVLTree } from "./8-AVL_TRee/AVL_Tree";
import { Heaps } from "./9-Heap/Heap";

class main {
  constructor() {
    this.createHeap();
  }

  creatingLinkList() {
    const linkedList = new LinkedList();
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
  }

  creatingArray() {
    const arr = new Array_Custom(5);
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
  }

  creatingStack() {
    const stacks = new BalancingString();
    const result = stacks.isBalancedString("{{{[[]]addasd]]]das(()");
    console.log("RESULT :================>", result);
  }

  creatingQueue() {
    const queue = new ArrayQueue(5);
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    console.log(queue.toString());
    queue.dequeue();
    queue.enqueue(40);
    queue.enqueue(50);
    console.log(queue.toString());
    queue.enqueue(50);
  }

  creatingPriorityQueue() {
    const queue = new PriorityQueue();
    queue.add(8);
    queue.add(4);
    queue.add(5);
    queue.add(1);
    console.log(queue.toString());
  }

  creatingHashTable() {
    const hashTable = new HashTable(5);
    hashTable.put(1, "33");
    hashTable.put(4, "44");
    hashTable.put(6, "234");
    console.log(JSON.stringify(hashTable));
  }

  createTree() {
    const tree = new Tree();
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

    const tree2 = new Tree();
    tree2.insert(7);
    tree2.insert(4);
    tree2.insert(9);
    tree2.insert(1);
    tree2.insert(6);
    tree2.insert(8);
    tree2.insert(10);
    console.log("is Equal", tree2.isEqual(tree));

    console.log("Level Order Traversal:", tree.levelOrderTraversal());
  }

  createAVLTree() {
    const avlTree = new AVLTree();
    avlTree.insert(10);
    avlTree.insert(20);
    avlTree.insert(30);
    console.log(JSON.stringify(avlTree));
  }

  createHeap() {
    const numbers = [7, 3, 10, 6, 22, 14];
    const heap = new Heaps(numbers.length);

    for (let i = 0; i < numbers.length; i++) { heap.insert(numbers[i]); }
    console.log("Current heap: ", heap);

    for (let i = numbers.length - 1; i >= 0; i--) { numbers[i] = heap.remove(); }
    console.log("Current numbers: ", numbers);
  }
}

new main();

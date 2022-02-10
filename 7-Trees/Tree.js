"use strict";
/** USAGES
 * Represent Hireachial Data
 *
 * Databases
 * Autocompletion
 * Compilers
 * Compression (jpeg, mp3)

// Traversels
  1.) Depth Order Traversels
        a.) Pre Order   | Root Left Right
        b.) In Order    | Left Root Right
        c.) Post Order  | Left Right Root

  2.) Breadth First
   a.) Level Order
   b.)
 */
exports.__esModule = true;
exports.Tree = void 0;
var Tree = /** @class */ (function () {
    function Tree() {
        //#region Traversals
        this.arry = [];
    }
    //#region Insert value in tree
    Tree.prototype.insert = function (value) {
        var node = new TNode(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        var current = this.root;
        while (true) {
            if (value < current.value) {
                if (!current.leftChild) {
                    current.leftChild = node;
                    break;
                }
                current = current.leftChild;
            }
            else {
                if (!current.rightChild) {
                    current.rightChild = node;
                    break;
                }
                current = current.rightChild;
            }
        }
    };
    //#endregion
    //#region Find value in Tree
    Tree.prototype.find = function (value) {
        var current = this.root;
        while (current) {
            if (value < current.value) {
                current = current.leftChild;
            }
            else if (value > current.value) {
                current = current.rightChild;
            }
            else {
                return true;
            }
        }
        return false;
    };
    //#endregion
    Tree.prototype.toString = function () {
        return "Node : " + this.root.value;
    };
    //#region Pre Order Traversal
    Tree.prototype.traversePreOrder = function () {
        this.arry = [];
        console.log("=========== Printing Pre Order traversels ===========");
        this.traversePreOrders(this.root);
        return this.arry;
    };
    Tree.prototype.traversePreOrders = function (node) {
        if (!node)
            return;
        this.arry.push(node.value);
        this.traversePreOrders(node.leftChild);
        this.traversePreOrders(node.rightChild);
    };
    //#endregion
    //#region In Order Traversal
    Tree.prototype.traverseInOrder = function () {
        this.arry = [];
        console.log("=========== Printing In Order traversels ===========");
        this.traverseInOrders(this.root);
        return this.arry;
    };
    Tree.prototype.traverseInOrders = function (node) {
        if (!node)
            return;
        this.traverseInOrders(node.leftChild);
        this.arry.push(node.value);
        this.traverseInOrders(node.rightChild);
    };
    //#endregion
    //#region Post Order Traversal
    Tree.prototype.traversePostOrder = function () {
        this.arry = [];
        console.log("=========== Printing Post Order traversels ===========");
        this.traversePostOrders(this.root);
        return this.arry;
    };
    Tree.prototype.traversePostOrders = function (node) {
        if (!node)
            return;
        this.traversePostOrders(node.leftChild);
        this.traversePostOrders(node.rightChild);
        this.arry.push(node.value);
    };
    //#endregion
    //#endregion
    //#region Get tree height
    Tree.prototype.getHeightOfTree = function () {
        return this.height(this.root);
    };
    Tree.prototype.height = function (node) {
        if (!node) {
            return -1;
        }
        if (this.isLeaf(node)) {
            return 0;
        }
        return (1 + Math.max(this.height(node.leftChild), this.height(node.rightChild)));
    };
    //#endregion
    //#region Find minimum in the Tree
    Tree.prototype.findMinimumValueInBinaryTree = function () {
        console.log("Minimum value in Binary Tree: ", this.findMinimumInBinaryTree(this.root));
        console.log("Minimum value in Binary Search Tree: ", this.findMinimumInBinarySearchTree(this.root));
    };
    // Time Complexity O(n)
    // This method is usefull when working with Binary Tree where its not sure if the left nodes are smaller than the root.
    Tree.prototype.findMinimumInBinaryTree = function (node) {
        if (this.isLeaf(node)) {
            return node.value;
        }
        var left = this.findMinimumInBinaryTree(node.leftChild);
        var right = this.findMinimumInBinaryTree(node.rightChild);
        return Math.min(left, right, node.value);
    };
    // Time Complexity O(Log n)
    Tree.prototype.findMinimumInBinarySearchTree = function (root) {
        if (!root)
            return Error("Invalid operation");
        var current = root;
        var last = current;
        while (current != null) {
            last = current;
            current = current.leftChild;
        }
        return last.value;
    };
    //#endregion
    //#region Find if the trees are equal
    Tree.prototype.isEqual = function (tree) {
        if (!tree)
            return false;
        return this.equals(this.root, tree.root);
    };
    Tree.prototype.equals = function (first, second) {
        if (!first && !second)
            return true;
        if (first && second) {
            return (first.value === second.value &&
                this.equals(first.leftChild, second.leftChild) &&
                this.equals(first.rightChild, second.rightChild));
        }
        return false;
    };
    //#endregion
    //#region Find if tree is Binary Search Tree
    Tree.prototype.isBinarySearchTree = function () {
        return this.binarySearchTreeValidation(this.root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    };
    Tree.prototype.binarySearchTreeValidation = function (node, min, max) {
        if (!node)
            return true;
        if (node.value < min || node.value > max) {
            return false;
        }
        return (this.binarySearchTreeValidation(node.leftChild, min, node.value - 1) &&
            this.binarySearchTreeValidation(node.rightChild, node.value + 1, max));
    };
    //#endregion
    //#region Find Nodes as given Distance
    Tree.prototype.getNodesAtDistance = function (distance) {
        this.arry = [];
        this.findDistance(this.root, distance);
        return this.arry;
    };
    Tree.prototype.findDistance = function (root, distance) {
        if (!root)
            return null;
        if (distance == 0) {
            this.arry.push(root.value);
        }
        this.findDistance(root.leftChild, distance - 1);
        this.findDistance(root.rightChild, distance - 1);
    };
    //#endregion
    Tree.prototype.isLeaf = function (node) {
        return !node.leftChild && !node.rightChild;
    };
    return Tree;
}());
exports.Tree = Tree;
var TNode = /** @class */ (function () {
    function TNode(value) {
        this.value = value;
    }
    return TNode;
}());

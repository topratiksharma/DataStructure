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
    }
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
    Tree.prototype.toString = function () {
        return "Node : " + this.root.value;
    };
    Tree.prototype.traversePreOrder = function () {
        console.log("=========== Printing Pre Order traversels ===========");
        this.traversePreOrders(this.root);
    };
    Tree.prototype.traversePreOrders = function (node) {
        if (!node)
            return;
        console.log("Value: ", node.value);
        this.traversePreOrders(node.leftChild);
        this.traversePreOrders(node.rightChild);
    };
    Tree.prototype.traverseInOrder = function () {
        console.log("=========== Printing In Order traversels ===========");
        this.traverseInOrders(this.root);
    };
    Tree.prototype.traverseInOrders = function (node) {
        if (!node)
            return;
        this.traverseInOrders(node.leftChild);
        console.log("Value: ", node.value);
        this.traverseInOrders(node.rightChild);
    };
    Tree.prototype.traversePostOrder = function () {
        console.log("=========== Printing Post Order traversels ===========");
        this.traversePostOrders(this.root);
    };
    Tree.prototype.traversePostOrders = function (node) {
        if (!node)
            return;
        this.traversePostOrders(node.leftChild);
        this.traversePostOrders(node.rightChild);
        console.log("Value: ", node.value);
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
// interface IInter {
// 	id: number
// }
// interface IInter {
// 	name: string
// }
// const mysVar: IInter = {
// 	s
// }

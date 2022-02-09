"use strict";
/** USAGES
 * Represent Hireachial Data
 *
 * Databases
 * Autocompletion
 * Compilers
 * Compression (jpeg, mp3)
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
    return Tree;
}());
exports.Tree = Tree;
var TNode = /** @class */ (function () {
    function TNode(value) {
        this.value = value;
    }
    return TNode;
}());

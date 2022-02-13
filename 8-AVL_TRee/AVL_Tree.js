"use strict";
exports.__esModule = true;
exports.AVLTree = void 0;
var AVLTree = /** @class */ (function () {
    function AVLTree() {
    }
    AVLTree.prototype.toString = function () {
        return "Value: " + this.root.value;
    };
    AVLTree.prototype.insert = function (value) {
        this.root = this.insertInNode(this.root, value);
        return this.root;
    };
    AVLTree.prototype.insertInNode = function (node, value) {
        if (!node) {
            return new AVLNode(value);
        }
        if (value < node.value) {
            node.leftChild = this.insertInNode(node.leftChild, value);
        }
        else {
            node.rightChild = this.insertInNode(node.rightChild, value);
        }
        this.setHeight(node);
        return this.balance(node);
    };
    AVLTree.prototype.balance = function (node) {
        if (this.isLeftHeavy(node)) {
            if (this.balanceFactor(node.leftChild) < 0) {
                node.leftChild = this.rotateLeft(node.leftChild);
            }
            this.rotateRight(node);
        }
        else if (this.isRightHeavy(node)) {
            if (this.balanceFactor(node.rightChild) > 0) {
                node.rightChild = this.rotateRight(node.rightChild);
            }
            this.rotateLeft(node);
        }
        return node;
    };
    AVLTree.prototype.rotateLeft = function (root) {
        var newRoot = root.rightChild;
        root.rightChild = newRoot.leftChild;
        newRoot.leftChild = root;
        this.setHeight(root);
        this.setHeight(newRoot);
        return newRoot;
    };
    AVLTree.prototype.rotateRight = function (root) {
        var newRoot = root.leftChild;
        root.leftChild = newRoot.rightChild;
        newRoot.rightChild = root;
        this.setHeight(root);
        this.setHeight(newRoot);
        return newRoot;
    };
    AVLTree.prototype.setHeight = function (node) {
        node.height =
            Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
    };
    AVLTree.prototype.height = function (node) {
        return (node === null || node === void 0 ? void 0 : node.height) || 0;
    };
    AVLTree.prototype.isLeftHeavy = function (node) {
        return this.balanceFactor(node) > 1;
    };
    AVLTree.prototype.isRightHeavy = function (node) {
        return this.balanceFactor(node) < -1;
    };
    AVLTree.prototype.balanceFactor = function (node) {
        return node
            ? this.height(node.leftChild) - this.height(node.rightChild)
            : 0;
    };
    return AVLTree;
}());
exports.AVLTree = AVLTree;
var AVLNode = /** @class */ (function () {
    function AVLNode(value) {
        this.value = value;
        this.height = 0;
    }
    return AVLNode;
}());

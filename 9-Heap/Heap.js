"use strict";
/**
 ***************************** HEAPS *****************************
 * Max Heap or Binary Heap : In Heap each child node is either equal or less than parent node.
 *
 * Min Heap : Where root node is smaller than the child node node.
 *
 *------Uses:--------------
 * Sorting
 * Graphs
 * Priority Queues
 */
exports.__esModule = true;
exports.Heaps = void 0;
var Heaps = /** @class */ (function () {
    function Heaps(count) {
        this.size = 0;
        this.items = new Array(count);
    }
    Heaps.prototype.insert = function (value) {
        if (this.items.length === this.size) {
            console.error("Max items reached");
        }
        this.items[this.size++] = value;
        this.bubbleUp();
    };
    Heaps.prototype.bubbleUp = function () {
        var index = this.size - 1;
        while (index > 0 && this.items[index] > this.items[this.parent(index)]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    };
    Heaps.prototype.parent = function (index) {
        return Math.floor((index - 1) / 2);
    };
    Heaps.prototype.swap = function (first, second) {
        var swapper = this.items[first];
        this.items[first] = this.items[second];
        this.items[second] = swapper;
    };
    Heaps.prototype.remove = function () {
        if (this.isEmpty()) {
            console.error("empty heap");
            return;
        }
        var root = this.items[0];
        this.items[0] = this.items[--this.size];
        this.bubbleDown();
        return root;
    };
    Heaps.prototype.bubbleDown = function () {
        var index = 0;
        while (index <= this.size && !this.isValidParent(index)) {
            var largerChildIndex = this.getLargerChildIndex(index);
            this.swap(index, largerChildIndex);
            index = largerChildIndex;
        }
    };
    Heaps.prototype.isEmpty = function () {
        return this.size === 0;
    };
    Heaps.prototype.getLargerChildIndex = function (index) {
        if (!this.hasLeftChild(index)) {
            return index;
        }
        if (!this.hasRightChild(index)) {
            return index;
        }
        return this.leftChild(index) > this.rightChild(index)
            ? this.leftChildIndex(index)
            : this.rightChildIndex(index);
    };
    Heaps.prototype.hasLeftChild = function (index) {
        return this.leftChildIndex(index) <= this.size;
    };
    Heaps.prototype.hasRightChild = function (index) {
        return this.rightChildIndex(index) <= this.size;
    };
    Heaps.prototype.isValidParent = function (index) {
        if (!this.hasLeftChild(index))
            return true;
        var isValid = this.items[index] >= this.leftChild(index);
        if (this.hasRightChild(index)) {
            return (isValid && (isValid = this.items[index] >= this.rightChild(index)));
        }
        return isValid;
    };
    Heaps.prototype.leftChildIndex = function (index) {
        return index * 2 + 1;
    };
    Heaps.prototype.rightChildIndex = function (index) {
        return index * 2 + 2;
    };
    Heaps.prototype.leftChild = function (index) {
        return this.items[this.leftChildIndex(index)];
    };
    Heaps.prototype.rightChild = function (index) {
        return this.items[this.rightChildIndex(index)];
    };
    return Heaps;
}());
exports.Heaps = Heaps;

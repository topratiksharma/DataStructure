"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = new Array(5);
        this.count = 0;
    }
    PriorityQueue.prototype.add = function (item) {
        if (this.isFull())
            throw ("ERROR");
        // shifting items
        this.items[this.shiftItemsToInsert(item)] = item;
        this.count++;
    };
    PriorityQueue.prototype.shiftItemsToInsert = function (item) {
        var i = 0;
        for (i = this.count - 1; i >= 0; i--) {
            if (this.items[i] > item) {
                this.items[i + 1] = this.items[i];
            }
            else
                break;
        }
        return i + 1;
    };
    PriorityQueue.prototype.toString = function () {
        return this.items.toString();
    };
    PriorityQueue.prototype.remove = function () {
        if (this.isEmpty()) {
            throw console.error();
        }
        return this.items[--this.count];
    };
    PriorityQueue.prototype.isFull = function () {
        return this.count === this.items.length;
    };
    PriorityQueue.prototype.isEmpty = function () {
        return this.count === 0;
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;

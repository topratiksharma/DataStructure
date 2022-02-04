"use strict";
exports.__esModule = true;
exports.ArrayQueue = void 0;
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue(capacity) {
        this.capacity = capacity;
        this.rear = 0;
        this.front = 0;
        this.count = 0;
        this.items = new Array(capacity);
    }
    ArrayQueue.prototype.enqueue = function (item) {
        if (this.count === this.items.length) {
            throw new Error("Item out of bound");
        }
        this.items[this.rear++] = item;
        this.count++;
    };
    ArrayQueue.prototype.dequeue = function () {
        var item = this.items[this.front];
        this.items[this.front++] = 0;
        return item;
    };
    ArrayQueue.prototype.toString = function () {
        return this.items.toString();
    };
    return ArrayQueue;
}());
exports.ArrayQueue = ArrayQueue;

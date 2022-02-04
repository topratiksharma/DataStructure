"use strict";
exports.__esModule = true;
exports.PriorityQueue = void 0;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.items = new Array(5);
        this.count = 0;
    }
    PriorityQueue.prototype.add = function (item) {
        var i = 0;
        if (this.count === this.items.length)
            throw ("ERROR");
        // shifting items
        for (i = this.count - 1; i >= 0; i--) {
            if (this.items[i] > item) {
                this.items[i + 1] = this.items[i];
            }
            else
                break;
        }
        this.items[i + 1] = item;
        this.count++;
    };
    PriorityQueue.prototype.toString = function () {
        return this.items.toString();
    };
    return PriorityQueue;
}());
exports.PriorityQueue = PriorityQueue;

"use strict";
exports.__esModule = true;
exports.Array_Custom = void 0;
var Array_Custom = /** @class */ (function () {
    function Array_Custom(length) {
        this.count = 0;
        this.items = new Array(length);
    }
    Array_Custom.prototype.print = function () {
        for (var i = 0; i < this.count; i++) {
            console.log(this.items[i]);
        }
        console.log(this.items);
    };
    Array_Custom.prototype.insert = function (item) {
        //if Array is full , resize it.
        if (this.items.length === this.count) {
            var newArray = new Array(2 * this.count);
            for (var i = 0; i < this.count; i++) {
                newArray[i] = this.items[i];
            }
            this.items = newArray;
        }
        // Add new item in end of this array
        this.items[this.count++] = item;
    };
    Array_Custom.prototype.removeAt = function (index) {
        if (index < 0 || index >= this.count) {
            console.error("invalid index!");
            throw new Error("invalid index!");
        }
        for (var i = index; i < this.count; i++) {
            this.items[i] = this.items[i + 1];
        }
        delete this.items[this.count - 1];
        this.count--;
    };
    Array_Custom.prototype.indexOf = function (item) {
        for (var i = 0; i < this.count; i++) {
            if (this.items[i] === item) {
                return i;
            }
        }
        return -1;
    };
    return Array_Custom;
}());
exports.Array_Custom = Array_Custom;
new Array_Custom(5);

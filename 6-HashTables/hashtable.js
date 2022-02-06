"use strict";
exports.__esModule = true;
exports.Entry = exports.HashTable = void 0;
var linked_list_1 = require("../3-LinkedList/linked-list");
var HashTable = /** @class */ (function () {
    function HashTable(length) {
        this.entries = new Array(length);
    }
    HashTable.prototype.put = function (key, value) {
        var index = this.hash(key);
        if (!this.entries[index]) {
            this.entries[index] = new linked_list_1.LinkedList();
        }
        this.entries[index].addLast(new Entry(key, value));
    };
    HashTable.prototype.hash = function (key) {
        return Math.abs(key) % this.entries.length;
    };
    return HashTable;
}());
exports.HashTable = HashTable;
var Entry = /** @class */ (function () {
    function Entry(key, value) {
        this.key = key;
        this.value = value;
    }
    return Entry;
}());
exports.Entry = Entry;

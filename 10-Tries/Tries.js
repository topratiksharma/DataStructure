"use strict";
/**
 * ********** Tries **********
 *
 *   Tries are used in auto-complete algorithm
 */
exports.__esModule = true;
exports.Trie = void 0;
var Trie = /** @class */ (function () {
    function Trie() {
        this.root = new TNode(" ");
    }
    Trie.prototype.insert = function (word) {
        var current = this.root;
        word.split("").forEach(function (eachWord) {
            if (!(current === null || current === void 0 ? void 0 : current.children) || !current.children[eachWord]) {
                current.children = new TNode(eachWord);
            }
            current = current.children;
        });
        current.isEndOfWord = true;
    };
    return Trie;
}());
exports.Trie = Trie;
var TNode = /** @class */ (function () {
    function TNode(value) {
        this.isEndOfWord = false;
        this.value = value;
    }
    TNode.prototype.toString = function () {
        return "value =>" + this.value;
    };
    return TNode;
}());

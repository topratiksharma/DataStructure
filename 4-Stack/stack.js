"use strict";
exports.__esModule = true;
exports.Stack = void 0;
var Stack = /** @class */ (function () {
    function Stack() {
        this.stack = [];
    }
    Stack.prototype.push = function (ele) {
        // push at top of array
        return this.stack.unshift(ele);
    };
    Stack.prototype.pop = function () {
        return this.stack.shift();
        // remove from top of array and return it
    };
    Stack.prototype.isEmpty = function () {
        // return true if stack is empty
        return !(this.stack.length > 0);
    };
    Stack.prototype.peek = function () {
        return this.stack[0];
        // return from top of array
    };
    return Stack;
}());
exports.Stack = Stack;

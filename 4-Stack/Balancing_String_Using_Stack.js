"use strict";
exports.__esModule = true;
exports.BalancingString = void 0;
var stack_1 = require("./stack");
var BalancingString = /** @class */ (function () {
    function BalancingString() {
    }
    BalancingString.prototype.isBalancedString = function (customString) {
        var _this = this;
        var splittedString = customString.split('');
        var stack = new stack_1.Stack();
        splittedString.forEach(function (ele) {
            if (ele === '(' || ele === '{' || ele === '[' || ele === '<') {
                stack.push(ele);
            }
            else if (ele === ')' || ele === '}' || ele === ']' || ele === '>') {
                if (stack.isEmpty()) {
                    return false;
                }
                else {
                    var top_1 = stack.pop();
                    return (ele === _this.getClosingTag(top_1));
                }
            }
        });
        return true;
    };
    BalancingString.prototype.getClosingTag = function (tag) {
        if (tag === '(') {
            return ')';
        }
        else if (tag === '[') {
            return ']';
        }
        else if (tag === '{') {
            return '}';
        }
        else if (tag === '<') {
            return '>';
        }
    };
    return BalancingString;
}());
exports.BalancingString = BalancingString;

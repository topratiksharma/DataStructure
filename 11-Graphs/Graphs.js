"use strict";
// Tree is kind of graph
//
exports.__esModule = true;
exports.GNode = exports.Graph = void 0;
var Graph = /** @class */ (function () {
    function Graph() {
        this.nodes = {};
        this.adjacencyList = {};
    }
    Graph.prototype.addNode = function (label) {
        var node = new GNode(label);
        if (!this.nodes[label]) {
            this.nodes[label] = node;
            this.adjacencyList[label] = [];
        }
    };
    Graph.prototype.addEdge = function (from, to) {
        var _a;
        if (this.adjacencyList[from] && this.adjacencyList[to]) {
            (_a = this.adjacencyList[from]) === null || _a === void 0 ? void 0 : _a.push(to);
            // this.adjacencyList[to]?.push(from); // if want to add a non directed graph
        }
        else {
            throw new Error("Illegal state exception");
        }
    };
    Graph.prototype.print = function () {
        for (var key in this.adjacencyList) {
            if (Object.prototype.hasOwnProperty.call(this.adjacencyList, key)) {
                var targets = this.adjacencyList[key];
                if (targets.length)
                    console.log(key + " is connected to ", targets);
            }
        }
    };
    Graph.prototype.removeNode = function (label) {
        if (!this.nodes[label]) {
            return;
        }
        for (var key in this.adjacencyList) {
            if (Object.prototype.hasOwnProperty.call(this.adjacencyList, key)) {
                this.adjacencyList[key].splice(this.adjacencyList[key].indexOf(label), 1);
            }
        }
        delete this.nodes[label];
        delete this.adjacencyList[label];
    };
    Graph.prototype.removeEdge = function (from, to) {
        if (this.adjacencyList[from] && this.adjacencyList[to]) {
            this.adjacencyList[from].splice(this.adjacencyList[from].indexOf(to), 1);
        }
    };
    return Graph;
}());
exports.Graph = Graph;
var GNode = /** @class */ (function () {
    function GNode(label) {
        this.label = label;
    }
    return GNode;
}());
exports.GNode = GNode;

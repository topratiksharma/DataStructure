export class Stack {
    private stack = [];

    constructor() { }

    public push(ele) {
        // push at top of array
        return this.stack.unshift(ele);
    }

    public pop() {
        return this.stack.shift();
        // remove from top of array and return it
    }

    public isEmpty() {
        // return true if stack is empty
        return !(this.stack.length > 0);
    }

    public peek() {
        return this.stack[0];
        // return from top of array
    }
}
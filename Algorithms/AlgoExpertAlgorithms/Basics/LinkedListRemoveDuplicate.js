// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
  let currentNode = linkedList;
  while (currentNode.next) {
    if (currentNode.value === currentNode.next.value) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return linkedList;
}
const a = {
  value: 1,
  next: {
    value: 1,
    next: {
      value: 1,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 4,
            next: {
              value: 4,
              next: {
                value: 5,
                next: { value: 6, next: { value: 6, next: null } },
              },
            },
          },
        },
      },
    },
  },
};
console.log(JSON.stringify(removeDuplicatesFromLinkedList(a)));

// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList;

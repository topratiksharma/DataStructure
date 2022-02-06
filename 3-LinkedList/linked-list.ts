import { NumericLiteral } from "typescript";
// import { LNode } from './node';

export class LinkedList<T> {
  private first: LNode<T> = null;
  private last: LNode<T> = null;
  private size: number = 0;

  constructor() {}

  public addLast(item: T): void {
    const node = new LNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    this.size++;
  }

  public addFirst(item: T) {
    const node = new LNode(item);
    if (this.isEmpty()) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }
    this.size++;
  }

  private isEmpty(): boolean {
    return !this.first;
  }

  public removeFirst(): void {
    if (!this.first) throw new Error("No Element exists in linked list");

    if (this.first === this.last) {
      this.first = this.last = null;
    }
    this.first = this.first.next;
    this.size--;
  }

  public removeLast(): void {
    if (this.isEmpty()) {
      throw new Error("No elements present");
    }
    if (this.first === this.last) {
      this.first = this.last = null;
    } else {
      const secondLastNode = this.getSecondLastNode(this.last);
      this.last = secondLastNode;
      this.last.next = null;
    }
    this.size--;
  }

  private getSecondLastNode(node: LNode<T>): LNode<T> {
    let current = this.first;
    while (current !== null) {
      if (current.next === this.last) return current;
      current = current.next;
    }
    return null;
  }

  public contains(item): boolean {
    return this.indexOf(item) !== -1;
  }

  public indexOf(item: T): number {
    let index = 0;
    let current = this.first;
    while (current != null) {
      if (current.value === item) {
        return index;
      } else {
        index++;
        current = current.next;
      }
    }
    return -1;
  }

  public getSize() {
    return this.size;
  }

  public toArray() {
    let array = new Array(this.size);
    let current = this.first;
    let index = 0;
    while (current !== null) {
      array[index++] = current.value;
      if (current === this.last) {
        return array;
      }
      current = current.next;
    }
    return array;
  }

  public reverse() {
    let lastNode = null;
    let current = this.first;
    while (current !== null) {
      let newNode = new LNode(current.value);
      newNode.next = lastNode;
      lastNode = newNode;
      current = current.next;
    }
    this.last = this.first;
    this.last.next = null;
    this.first = lastNode;
  }
}

class LNode<T> {
  public value: T;
  public next: LNode<T>;
  constructor(value: T) {
    this.value = value;
  }
}

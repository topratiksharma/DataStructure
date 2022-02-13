/**
 ***************************** HEAPS *****************************
 * Max Heap or Binary Heap : In Heap each child node is either equal or less than parent node.
 *
 * Min Heap : Where root node is smaller than the child node node.
 *
 *------Uses:--------------
 * Sorting
 * Graphs
 * Priority Queues
 */

export class Heaps {
  public size: number = 0;
  public items;

  constructor(count: number) {
    this.items = new Array<number>(count);
  }

  public insert(value: number) {
    if (this.items.length === this.size) {
      console.error("Max items reached");
    }
    this.items[this.size++] = value;
    this.bubbleUp();
  }

  private bubbleUp() {
    let index = this.size - 1;
    while (index > 0 && this.items[index] > this.items[this.parent(index)]) {
      this.swap(index, this.parent(index));
      index = this.parent(index);
    }
  }

  private parent(index: number) {
    return Math.floor((index - 1) / 2);
  }

  private swap(first: number, second: number) {
    const swapper = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = swapper;
  }

  public remove() {
    if (this.isEmpty()) {
      console.error("empty heap");
      return;
    }
    const root = this.items[0];
    this.items[0] = this.items[--this.size];
    this.bubbleDown();
    return root;
  }
  
  bubbleDown() {
    let index = 0;
    while (index <= this.size && !this.isValidParent(index)) {
      const largerChildIndex = this.getLargerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  isEmpty() {
    return this.size === 0;
  }

  private getLargerChildIndex(index: number) {
    if (!this.hasLeftChild(index)) {
      return index;
    }

    if (!this.hasRightChild(index)) {
      return index;
    }

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }

  private hasLeftChild(index: number) {
    return this.leftChildIndex(index) <= this.size;
  }

  private hasRightChild(index: number) {
    return this.rightChildIndex(index) <= this.size;
  }

  private isValidParent(index: number) {
    if (!this.hasLeftChild(index)) return true;

    let isValid = this.items[index] >= this.leftChild(index);

    if (this.hasRightChild(index)) {
      return (isValid &&= this.items[index] >= this.rightChild(index));
    }

    return isValid;
  }

  private leftChildIndex(index: number) {
    return index * 2 + 1;
  }

  private rightChildIndex(index: number) {
    return index * 2 + 2;
  }

  private leftChild(index: number) {
    return this.items[this.leftChildIndex(index)];
  }

  private rightChild(index: number) {
    return this.items[this.rightChildIndex(index)];
  }
}

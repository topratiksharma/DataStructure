import { LinkedList } from "../3-LinkedList/linked-list";

export class HashTable {
  private entries: Array<LinkedList<Entry>> = new Array<LinkedList<Entry>>();

  public put(key: number, value: string) {
    const index = this.hash(key);
    if (this.entries[index]) {
    } else {
      this.entries[index].addLast(new Entry(key, value));
    }
  }

  private hash(key: number) {
    return Math.abs(key) % this.entries.length;
  }
}

export class Entry {
  private key: number;
  private value: string;

  constructor(key: number, value: string) {
    this.key = key;
    this.value = value;
  }
}

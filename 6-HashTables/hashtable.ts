import { LinkedList } from "../3-LinkedList/linked-list";

export class HashTable {
  private entries: Array<LinkedList<Entry>>;

  constructor(length) {
    this.entries = new Array<LinkedList<Entry>>(length);
  }

  public put(key: number, value: string) {
    const index = this.hash(key);
    if (!this.entries[index]) {
      this.entries[index] = new LinkedList<Entry>();
    }
    this.entries[index].addLast(new Entry(key, value));
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

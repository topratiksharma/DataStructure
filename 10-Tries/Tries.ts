/**
 * ********** Tries **********
 *
 *   Tries are used in auto-complete algorithm
 */

export class Trie {
  public root = new TNode(" ");

  public insert(word: string) {
    let current = this.root;
    word.split("").forEach((eachWord) => {
      if (!current?.children || !current.children[eachWord]) {
        current.children = new TNode(eachWord);
      }
      current = current.children;
    });
    current.isEndOfWord = true;
  }
}

class TNode {
  value: string;
  children: TNode;
  isEndOfWord: boolean = false;

  constructor(value: string) {
    this.value = value;
  }
  toString() {
    return "value =>" + this.value;
  }
}

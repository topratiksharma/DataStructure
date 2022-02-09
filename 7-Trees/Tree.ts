/** USAGES
 * Represent Hireachial Data
 *
 * Databases
 * Autocompletion
 * Compilers
 * Compression (jpeg, mp3)
 */

export class Tree {
  private root: TNode;

  public insert(value: number) {
    const node = new TNode(value);
    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.leftChild) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (!current.rightChild) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  find(value: number) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.leftChild;
      } else if (value > current.value) {
        current = current.rightChild;
      } else {
        return true;
      }
    }
    return false;
  }

  toString() {
    return "Node : " + this.root.value;
  }
}

class TNode {
  public value: number;
  public leftChild: TNode;
  public rightChild: TNode;

  constructor(value: number) {
    this.value = value;
  }
}

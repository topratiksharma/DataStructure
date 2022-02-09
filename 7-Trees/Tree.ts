/** USAGES
 * Represent Hireachial Data 
 * 
 * Databases
 * Autocompletion
 * Compilers
 * Compression (jpeg, mp3)

// Traversels
  1.) Depth Order Traversels
        a.) Pre Order   | Root Left Right
        b.) In Order    | Left Root Right
        c.) Post Order  | Left Right Root 

  2.) Breadth First
   a.) Level Order
   b.) 
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

  public find(value: number) {
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

  public toString() {
    return "Node : " + this.root.value;
  }

  public traversePreOrder() {
    console.log("=========== Printing Pre Order traversels ===========");
    this.traversePreOrders(this.root);
  }

  private traversePreOrders(node: TNode) {
    if (!node) return;
    console.log("Value: ", node.value);
    this.traversePreOrders(node.leftChild);
    this.traversePreOrders(node.rightChild);
  }

  public traverseInOrder() {
    console.log("=========== Printing In Order traversels ===========");
    this.traverseInOrders(this.root);
  }

  private traverseInOrders(node: TNode) {
    if (!node) return;
    this.traverseInOrders(node.leftChild);
    console.log("Value: ", node.value);
    this.traverseInOrders(node.rightChild);
  }

  public traversePostOrder() {
    console.log("=========== Printing Post Order traversels ===========");
    this.traversePostOrders(this.root);
  }
 
  private traversePostOrders(node: TNode) {
    if (!node) return;

    this.traversePostOrders(node.leftChild);
    this.traversePostOrders(node.rightChild);
    console.log("Value: ", node.value);
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

// interface IInter {
// 	id: number
// }

// interface IInter {
// 	name: string
// }

// const mysVar: IInter = {
// 	s
// }

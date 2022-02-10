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

  //#region Insert value in tree
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
  //#endregion

  //#region Find value in Tree
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
  //#endregion

  public toString() {
    return "Node : " + this.root.value;
  }

  //#region Traversals
  public arry = [];
  //#region Pre Order Traversal
  public traversePreOrder() {
    this.arry = [];
    console.log("=========== Printing Pre Order traversels ===========");
    this.traversePreOrders(this.root);
    return this.arry;
  }

  private traversePreOrders(node: TNode) {
    if (!node) return;

    this.arry.push(node.value);
    this.traversePreOrders(node.leftChild);
    this.traversePreOrders(node.rightChild);
  }
  //#endregion

  //#region In Order Traversal
  public traverseInOrder() {
    this.arry = [];
    console.log("=========== Printing In Order traversels ===========");
    this.traverseInOrders(this.root);
    return this.arry;
  }

  private traverseInOrders(node: TNode) {
    if (!node) return;
    this.traverseInOrders(node.leftChild);
    this.arry.push(node.value);
    this.traverseInOrders(node.rightChild);
  }
  //#endregion

  //#region Post Order Traversal
  public traversePostOrder() {
    this.arry = [];
    console.log("=========== Printing Post Order traversels ===========");
    this.traversePostOrders(this.root);
    return this.arry;
  }

  private traversePostOrders(node: TNode) {
    if (!node) return;

    this.traversePostOrders(node.leftChild);
    this.traversePostOrders(node.rightChild);
    this.arry.push(node.value);
  }
  //#endregion

  //#endregion

  //#region Get tree height
  public getHeightOfTree() {
    return this.height(this.root);
  }

  private height(node: TNode) {
    if (!node) {
      return -1;
    }

    if (this.isLeaf(node)) {
      return 0;
    }

    return (
      1 + Math.max(this.height(node.leftChild), this.height(node.rightChild))
    );
  }
  //#endregion

  //#region Find minimum in the Tree
  public findMinimumValueInBinaryTree() {
    console.log(
      "Minimum value in Binary Tree: ",
      this.findMinimumInBinaryTree(this.root)
    );
    console.log(
      "Minimum value in Binary Search Tree: ",
      this.findMinimumInBinarySearchTree(this.root)
    );
  }

  // Time Complexity O(n)
  // This method is usefull when working with Binary Tree where its not sure if the left nodes are smaller than the root.
  private findMinimumInBinaryTree(node: TNode) {
    if (this.isLeaf(node)) {
      return node.value;
    }

    const left = this.findMinimumInBinaryTree(node.leftChild);
    const right = this.findMinimumInBinaryTree(node.rightChild);

    return Math.min(left, right, node.value);
  }

  // Time Complexity O(Log n)
  private findMinimumInBinarySearchTree(root: TNode) {
    if (!root) return Error("Invalid operation");

    let current = root;
    let last = current;
    while (current != null) {
      last = current;
      current = current.leftChild;
    }
    return last.value;
  }
  //#endregion

  //#region Find if the trees are equal
  isEqual(tree: Tree): boolean {
    if (!tree) return false;
    return this.equals(this.root, tree.root);
  }

  private equals(first: TNode, second: TNode) {
    if (!first && !second) return true;

    if (first && second) {
      return (
        first.value === second.value &&
        this.equals(first.leftChild, second.leftChild) &&
        this.equals(first.rightChild, second.rightChild)
      );
    }

    return false;
  }
  //#endregion

  //#region Find if tree is Binary Search Tree
  public isBinarySearchTree() {
    return this.binarySearchTreeValidation(
      this.root,
      Number.NEGATIVE_INFINITY,
      Number.POSITIVE_INFINITY
    );
  }

  private binarySearchTreeValidation(node: TNode, min: number, max: number) {
    if (!node) return true;

    if (node.value < min || node.value > max) {
      return false;
    }

    return (
      this.binarySearchTreeValidation(node.leftChild, min, node.value - 1) &&
      this.binarySearchTreeValidation(node.rightChild, node.value + 1, max)
    );
  }
  //#endregion

  //#region Find Nodes as given Distance
  public getNodesAtDistance(distance: number) {
    this.arry = [];
    this.findDistance(this.root, distance);
    return this.arry;
  }

  private findDistance(root: TNode, distance: number) {
    if (!root) return null;

    if (distance == 0) {
      this.arry.push(root.value);
    }
    this.findDistance(root.leftChild, distance - 1);
    this.findDistance(root.rightChild, distance - 1);
  }
  //#endregion

  private isLeaf(node: TNode) {
    return !node.leftChild && !node.rightChild;
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

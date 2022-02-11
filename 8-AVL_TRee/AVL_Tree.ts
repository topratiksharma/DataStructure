export class AVLTree {
  private root: AVLNode;

  toString() {
    return "Value: " + this.root.value;
  }

  public insert(value: number) {
    this.root = this.insertInNode(this.root, value);
    return this.root;
  }

  private insertInNode(node: AVLNode, value: number): AVLNode {
    if (!node) {
      return new AVLNode(value);
    }

    if (value < node.value) {
      node.leftChild = this.insertInNode(node.leftChild, value);
    } else {
      node.rightChild = this.insertInNode(node.rightChild, value);
    }
    this.setHeight(node);

    return this.balance(node);
  }

  private balance(node: AVLNode): AVLNode {
    if (this.isLeftHeavy(node)) {
      if (this.balanceFactor(node.leftChild) < 0) {
        node.leftChild = this.rotateLeft(node.leftChild);
      }
      this.rotateRight(node);
    } else if (this.isRightHeavy(node)) {
      if (this.balanceFactor(node.rightChild) > 0) {
        node.rightChild = this.rotateRight(node.rightChild);
      }
      this.rotateLeft(node);
    }
    return node;
  }

  private rotateLeft(root: AVLNode) {
    const newRoot = root.rightChild;
    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;
    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  private rotateRight(root: AVLNode) {
    const newRoot = root.leftChild;
    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;
    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  private setHeight(node: AVLNode) {
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }

  private height(node: AVLNode): number {
    return node?.height || 0;
  }

  private isLeftHeavy(node: AVLNode) {
    return this.balanceFactor(node) > 1;
  }

  private isRightHeavy(node: AVLNode) {
    return this.balanceFactor(node) < -1;
  }

  private balanceFactor(node: AVLNode) {
    return node
      ? this.height(node.leftChild) - this.height(node.rightChild)
      : 0;
  }
}

class AVLNode {
  public height: number;
  public leftChild: AVLNode;
  public rightChild: AVLNode;
  public value: number;

  constructor(value: number) {
    this.value = value;
    this.height = 0;
  }
}

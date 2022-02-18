// Tree is kind of graph
//

export class Graph {
  private nodes = {};

  private adjacencyList = {};

  public addNode(label: string) {
    const node = new GNode(label);
    if (!this.nodes[label]) {
      this.nodes[label] = node;
      this.adjacencyList[label] = [] as Array<string>;
    }
  }

  public addEdge(from: string, to: string) {
    if (this.adjacencyList[from] && this.adjacencyList[to]) {
      this.adjacencyList[from]?.push(to);
      // this.adjacencyList[to]?.push(from); // if want to add a non directed graph
    } else {
      throw new Error("Illegal state exception");
    }
  }

  public print() {
    for (const key in this.adjacencyList) {
      if (Object.prototype.hasOwnProperty.call(this.adjacencyList, key)) {
        const targets = this.adjacencyList[key];
        if (targets.length) console.log(key + " is connected to ", targets);
      }
    }
  }

  public removeNode(label: string) {
    if (!this.nodes[label]) {
      return;
    }

    for (const key in this.adjacencyList) {
      if (Object.prototype.hasOwnProperty.call(this.adjacencyList, key)) {
        this.adjacencyList[key].splice(
          this.adjacencyList[key].indexOf(label),
          1
        );
      }
    }

    delete this.nodes[label];
    delete this.adjacencyList[label];
  }

  public removeEdge(from: string, to: string) {
    if (this.adjacencyList[from] && this.adjacencyList[to]) {
      this.adjacencyList[from].splice(this.adjacencyList[from].indexOf(to), 1);
    }
  }
}

export class GNode {
  public label: string;
  constructor(label: string) {
    this.label = label;
  }
}

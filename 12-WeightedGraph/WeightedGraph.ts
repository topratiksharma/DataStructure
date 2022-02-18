export class WeightedGraph {
  private nodes = {};
}

class WeightedNode {
  private label: string;
  private edges = [];

  constructor(label) {
    this.label = label;
  }

  toString() {
    return this.label;
  }

  public addEdge(to: WeightedNode, weight: number) {
    this.edges.push(new Edge(this, to, weight));
  }
}

class Edge {
  private from: WeightedNode;
  private to: WeightedNode;
  private weight: number;

  constructor(from, to, weight) {
    this.from = from;
    this.to = to;
    this.weight = weight;
  }

  toString() {
    return this.from + "->" + this.to; // A->B
  }
}

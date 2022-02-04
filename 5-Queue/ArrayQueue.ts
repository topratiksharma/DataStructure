export class ArrayQueue {

    /*
        enqueue
        dequeue
        peek
        isEmpty
        isFull
    */
    private items: Array<number>;
    private rear: number = 0;
    private front: number = 0;
    private count: number = 0;

    constructor(private capacity: number) {
        this.items = new Array<number>(this.capacity);
    }

    public enqueue(item: number) {
        if (this.count === this.items.length) { throw new Error("Queue is full."); }
        this.items[this.rear] = item;
        this.rear = (this.rear + 1) % this.items.length;
        this.count++;
    }

    public dequeue(): number {
        const item = this.items[this.front]
        this.items[this.front] = 0;
        this.front = (this.front + 1) % this.items.length;
        this.count--;
        return item;
    }

    // public peek(): number {
    //     return item;
    // }

    // public isFull(): number {
    //     return item;
    // }


    // public isEmpty(): number {
    //     return item;
    // }

    public toString(): string {
        return this.items.toString();
    }
}
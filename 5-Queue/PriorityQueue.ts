export class PriorityQueue {
    private items: number[] = new Array(5);
    private count = 0;

    public add(item: number) {
        if (this.isFull()) throw ("ERROR");
        // shifting items
        this.items[this.shiftItemsToInsert(item)] = item;
        this.count++
    }

    private shiftItemsToInsert(item) {
        let i = 0;
        for (i = this.count - 1; i >= 0; i--) {
            if (this.items[i] > item) {
                this.items[i + 1] = this.items[i];
            }
            else break;
        }
        return i + 1;
    }

    public toString(): string {
        return this.items.toString();
    }

    public remove() {
        if (this.isEmpty()) {
            throw console.error();
        }
        return this.items[--this.count];
    }

    public isFull(): Boolean {
        return this.count === this.items.length;
    }

    public isEmpty() {
        return this.count === 0;
    }
}
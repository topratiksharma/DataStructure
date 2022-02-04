export class Array_Custom {
    private items: number[];
    private count: number = 0;

    constructor(length: number) {
        this.items = new Array(length);
    }

    public print() {
        for (let i = 0; i < this.count; i++) {
            console.log(this.items[i])
        }
        console.log(this.items);
    }

    public insert(item: number) {
        //if Array is full , resize it.
        if (this.items.length === this.count) {
            const newArray = new Array(2 * this.count);
            for (let i = 0; i < this.count; i++) {
                newArray[i] = this.items[i];
            }
            this.items = newArray;
        }

        // Add new item in end of this array
        this.items[this.count++] = item;
    }

    public removeAt(index: number): void {
        if (index < 0 || index >= this.count) {
            console.error("invalid index!");
            throw new Error("invalid index!");
        }

        for (let i = index; i < this.count; i++) {
            this.items[i] = this.items[i + 1];
        }
        delete this.items[this.count - 1];
        this.count--;
    }

    public indexOf(item: number): number {
        for (let i = 0; i < this.count; i++) {
            if (this.items[i] === item) {
                return i;
            }
        }
        return -1;
    }
}

new Array_Custom(5);
class O_notation {
    constructor() {
        this.O_Of_one([5, 6]);
        this.O_Of_n([5, 6]);
        this.O_Of_n_Square([5, 6]);
    }
    O_Of_one(i) {
        console.log("=================O of 1=================")
        console.log(i[1]);
    }

    O_Of_n(arr) {
        console.log("=================O of n=================")
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        }
    }

    O_Of_n_Square(arr) {
        console.log("=================O of n^2=================")
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
            for (let j = 0; j < arr.length; j++) {
                console.log(arr[j]);
            }
        }
    }
}

new O_notation();
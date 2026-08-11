class Container<T> {
    item: T;

    constructor(item: T) {
        this.item = item;
    }

    show(): void {
        console.log("Item:", this.item);
    }
}

let numContainer = new Container<number>(500);
let textContainer = new Container<string>("Hello");

numContainer.show();
textContainer.show();

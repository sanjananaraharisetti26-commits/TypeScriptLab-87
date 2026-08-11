namespace FoodOrder {
    export function itemCost(items: number, price: number): number {
        return items * price;
    }

    export function getDiscount(amount: number, rate: number): number {
        return amount * rate / 100;
    }

    export function finalAmount(amount: number, discount: number): number {
        return amount - discount;
    }
}

let amount = FoodOrder.itemCost(4, 150);
let offer = FoodOrder.getDiscount(amount, 10);
let payable = FoodOrder.finalAmount(amount, offer);

console.log("Item Amount:", amount);
console.log("Discount:", offer);
console.log("Payable Amount:", payable);
